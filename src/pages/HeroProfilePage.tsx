import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeroProfile from "../components/HeroProfile";
import { useHeroes } from "../hooks/useHeroes";
import { useHeroProfile } from "../hooks/useHeroProfile";

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 700px;
  border: 3px solid ${(props) => props.theme.colors.border.brown};
  border-radius: 16px;
  padding: 40px;
  background: ${(props) => props.theme.gradients.card.dark};
  box-shadow:
    0 8px 40px ${(props) => props.theme.colors.shadow.blackMedium},
    0 0 60px ${(props) => props.theme.colors.shadow.goldMedium},
    inset 0 1px 0 ${(props) => props.theme.colors.shadow.goldInsetLight};
  margin-top: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.theme.gradients.border.horizontal};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at top right,
      ${(props) => props.theme.colors.overlay.goldLight},
      transparent 50%
    );
    pointer-events: none;
  }
`;

const ProfileTitle = styled.h2`
  margin: 0 0 30px 0;
  font-size: 28px;
  color: ${(props) => props.theme.colors.text.gold};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  text-shadow:
    0 0 20px ${(props) => props.theme.colors.shadow.gold},
    0 2px 4px ${(props) => props.theme.colors.shadow.black};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 700;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background: ${(props) => props.theme.gradients.border.horizontal};
    margin: 12px auto 0;
  }
`;

const HeroProfilePage = () => {
  const { heroId } = useParams<{ heroId: string }>();
  const { data: heroes } = useHeroes();
  const { data: profile, isLoading, error } = useHeroProfile(heroId);

  const hero = heroes?.find((h) => h.id === heroId);

  return (
    <ProfileContainer>
      <title>Hero Profile Page</title>
      <ProfileTitle>Hero Profile</ProfileTitle>
      {isLoading ? (
        "Loading profile..."
      ) : error ? (
        "Error loading profile."
      ) : !profile || !heroId || !hero ? (
        "Profile not found."
      ) : (
        <HeroProfile
          key={heroId}
          heroId={heroId}
          heroName={hero.name}
          heroImage={hero.image}
          initialProfile={profile}
        />
      )}
    </ProfileContainer>
  );
};

export default HeroProfilePage;
