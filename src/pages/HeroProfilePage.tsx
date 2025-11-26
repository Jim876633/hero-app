import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeroProfile from "../components/HeroProfile";
import { useHeroProfile } from "../hooks/useHeroProfile";

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  background-color: #fff;
  margin-top: 40px;
`;

const ProfileTitle = styled.h2`
  margin: 0 0 24px 0;
  font-size: 24px;
`;

const HeroProfilePage = () => {
  const { heroId } = useParams<{ heroId: string }>();
  const { data: profile, isLoading, error } = useHeroProfile(heroId);

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  if (!profile || !heroId) {
    return <div>Profile not found</div>;
  }

  return (
    <ProfileContainer>
      <ProfileTitle>Hero Profile</ProfileTitle>
      <HeroProfile key={heroId} heroId={heroId} initialProfile={profile} />
    </ProfileContainer>
  );
};

export default HeroProfilePage;
