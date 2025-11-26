import { useState } from "react";
import styled from "styled-components";
import { STATS } from "../constant";
import { useUpdateHeroProfile } from "../hooks/useHeroProfile";
import type { HeroProfileType } from "../types/hero";

const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StatLabel = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  width: 80px;
`;

const StatControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid #666;
  background-color: #fff;
  border-radius: 4px;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: #f0f0f0;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const StatValue = styled.div`
  width: 40px;
  text-align: center;
  font-size: 18px;
`;

const PointsRemaining = styled.div`
  margin: 24px 0;
  font-size: 18px;
  text-align: right;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #357abd;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Message = styled.div<{ $isError?: boolean }>`
  margin-top: 16px;
  padding: 12px;
  border-radius: 4px;
  background-color: ${(props) => (props.$isError ? "#fee" : "#efe")};
  color: ${(props) => (props.$isError ? "#c33" : "#363")};
`;

interface HeroProfileProps {
  heroId: string;
  initialProfile: HeroProfileType;
}

const HeroProfile = ({ heroId, initialProfile }: HeroProfileProps) => {
  const [profile, setProfile] = useState<HeroProfileType>(initialProfile);
  const [message, setMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  const updateMutation = useUpdateHeroProfile(heroId);

  const initialTotal = Object.values(initialProfile).reduce(
    (sum, val) => sum + val,
    0
  );
  const currentTotal = Object.values(profile).reduce(
    (sum, val) => sum + val,
    0
  );

  const pointsRemaining = initialTotal - currentTotal;

  const handleIncrement = (stat: keyof HeroProfileType) => {
    if (pointsRemaining > 0) {
      setProfile((prev) => ({
        ...prev,
        [stat]: prev[stat] + 1,
      }));
      setMessage(null);
    }
  };

  const handleDecrement = (stat: keyof HeroProfileType) => {
    if (profile[stat] > 0) {
      setProfile((prev) => ({
        ...prev,
        [stat]: prev[stat] - 1,
      }));
      setMessage(null);
    }
  };

  const handleSave = () => {
    if (currentTotal !== initialTotal) {
      setMessage({
        text: "總能力值必須與原始值相同",
        isError: true,
      });
      return;
    }

    updateMutation.mutate(profile, {
      onSuccess: () => {
        setMessage({
          text: "儲存成功！",
          isError: false,
        });
      },
      onError: (error) => {
        setMessage({
          text: error instanceof Error ? error.message : "儲存失敗",
          isError: true,
        });
      },
    });
  };

  return (
    <>
      {STATS.map(({ key, label }) => (
        <StatRow key={key}>
          <StatLabel>{label}</StatLabel>
          <StatControls>
            <StatButton
              onClick={() => handleDecrement(key)}
              disabled={profile[key] <= 0}
            >
              -
            </StatButton>
            <StatValue>{profile[key]}</StatValue>
            <StatButton
              onClick={() => handleIncrement(key)}
              disabled={pointsRemaining <= 0}
            >
              +
            </StatButton>
          </StatControls>
        </StatRow>
      ))}

      <PointsRemaining>剩餘點數: {pointsRemaining}</PointsRemaining>

      <SaveButton
        onClick={handleSave}
        disabled={updateMutation.isPending || currentTotal !== initialTotal}
      >
        {updateMutation.isPending ? "儲存中..." : "儲存"}
      </SaveButton>

      {message && <Message $isError={message.isError}>{message.text}</Message>}
    </>
  );
};

export default HeroProfile;
