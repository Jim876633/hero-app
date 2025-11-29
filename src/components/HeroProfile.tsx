import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { STATS } from "../constant";
import { useUpdateHeroProfile } from "../hooks/useHeroProfile";
import type { HeroProfileType } from "../types/hero";
import OptimizedImage from "./OptimizedImage";

const ProfileLayout = styled.div`
  flex: 1;
  display: flex;
  gap: 30px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatsSection = styled.div`
  flex: 2;
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const HeroInfoSection = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 576px) {
    height: 250px;
  }
`;

const HeroImage = styled(OptimizedImage)`
  border: 3px solid ${(props) => props.theme.colors.primary.gold};
  box-shadow:
    0 8px 30px ${(props) => props.theme.colors.shadow.goldLight},
    inset 0 1px 0 ${(props) => props.theme.colors.shadow.goldInsetLight};
`;

const HeroName = styled.h3`
  margin: 0;
  font-size: 24px;
  color: ${(props) => props.theme.colors.text.gold};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  text-shadow:
    0 0 20px ${(props) => props.theme.colors.shadow.gold},
    0 2px 4px ${(props) => props.theme.colors.shadow.black};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
`;

const ActionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: ${(props) => props.theme.gradients.stat.row};
  border-left: 3px solid ${(props) => props.theme.colors.border.brown};
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.gradients.stat.rowHover};
    border-left-color: ${(props) => props.theme.colors.primary.gold};
  }
`;

const StatLabel = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  min-width: 50px;
  color: ${(props) => props.theme.colors.text.gold};
  letter-spacing: 1.5px;
  font-size: 14px;
  text-shadow: 0 2px 4px ${(props) => props.theme.colors.shadow.black};
`;

const StatControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${(props) => props.theme.colors.border.brown};
  background: ${(props) => props.theme.gradients.button.dark};
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.gold};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:
    0 2px 8px ${(props) => props.theme.colors.shadow.blackDark},
    inset 0 1px 0 ${(props) => props.theme.colors.shadow.whiteVeryLight};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.gradients.button.darkHover};
    border-color: ${(props) => props.theme.colors.primary.gold};
    box-shadow:
      0 4px 15px ${(props) => props.theme.colors.shadow.goldLight},
      inset 0 1px 0 ${(props) => props.theme.colors.shadow.goldInsetLight};
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    border-color: ${(props) => props.theme.colors.background.lightBrown};
  }
`;

const StatValue = styled.div`
  min-width: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.gold};
  text-shadow: 0 0 10px ${(props) => props.theme.colors.shadow.gold};
`;

const PointsRemaining = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.colors.text.gold};
  font-weight: 700;
  text-shadow: 0 0 10px ${(props) => props.theme.colors.shadow.gold};
  letter-spacing: 1px;
  padding: 12px;
  background: ${(props) => props.theme.gradients.stat.row};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.border.brown};
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 14px;
  background: ${(props) => props.theme.gradients.button.gold};
  color: ${(props) => props.theme.colors.text.black};
  border: 2px solid ${(props) => props.theme.colors.primary.gold};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 15px ${(props) => props.theme.colors.shadow.goldLight},
    inset 0 1px 0 ${(props) => props.theme.colors.shadow.whiteLight};
  font-family: ${(props) => props.theme.fonts.body};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.gradients.button.goldHover};
    box-shadow:
      0 6px 25px ${(props) => props.theme.colors.shadow.gold},
      inset 0 1px 0 ${(props) => props.theme.colors.shadow.whiteMedium};
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.gradients.button.goldDisabled};
    border-color: ${(props) => props.theme.colors.border.brown};
    color: ${(props) => props.theme.colors.text.disabled};
    opacity: 0.7;
  }
`;

interface HeroProfileProps {
  heroId: string;
  heroName: string;
  heroImage: string;
  initialProfile: HeroProfileType;
}

const HeroProfile = ({
  heroId,
  heroName,
  heroImage,
  initialProfile,
}: HeroProfileProps) => {
  const [profile, setProfile] = useState<HeroProfileType>(initialProfile);

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
    }
  };

  const handleDecrement = (stat: keyof HeroProfileType) => {
    if (profile[stat] > 0) {
      setProfile((prev) => ({
        ...prev,
        [stat]: prev[stat] - 1,
      }));
    }
  };

  const handleSave = () => {
    if (currentTotal !== initialTotal) {
      toast.error("總能力值必須與原始值相同");
      return;
    }

    updateMutation.mutate(profile, {
      onSuccess: () => {
        toast.success("儲存成功！");
      },
      onError: (error) => {
        toast.error(error instanceof Error ? error.message : "儲存失敗");
      },
    });
  };

  return (
    <ProfileLayout>
      <StatsSection>
        <HeroName>{heroName}</HeroName>
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
      </StatsSection>

      <HeroInfoSection>
        <ImageContainer>
          <HeroImage src={heroImage} alt={heroName} />
        </ImageContainer>
        <ActionSection>
          <PointsRemaining>剩餘點數: {pointsRemaining}</PointsRemaining>
          <SaveButton
            onClick={handleSave}
            disabled={updateMutation.isPending || currentTotal !== initialTotal}
          >
            {updateMutation.isPending ? "儲存中..." : "儲存"}
          </SaveButton>
        </ActionSection>
      </HeroInfoSection>
    </ProfileLayout>
  );
};

export default HeroProfile;
