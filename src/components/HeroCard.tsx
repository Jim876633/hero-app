import { Link } from "react-router-dom";
import styled from "styled-components";
import type { HeroType } from "../types/hero";

const Card = styled(Link)<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 3px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.colors.primary.gold
        : props.theme.colors.border.brown};
  border-radius: 12px;
  text-decoration: none;
  background: ${(props) =>
    props.$isSelected
      ? props.theme.gradients.card.selected
      : props.theme.gradients.card.dark};
  box-shadow: ${(props) =>
    props.$isSelected
      ? `0 0 30px ${props.theme.colors.shadow.goldDark}, inset 0 0 20px ${props.theme.colors.shadow.goldInset}`
      : `0 4px 15px ${props.theme.colors.shadow.blackLight}, inset 0 1px 0 ${props.theme.colors.shadow.whiteVeryLight}`};
  transition: all 0.3s ease;
  width: 160px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(props) => props.theme.gradients.card.goldOverlay};
    opacity: ${(props) => (props.$isSelected ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: ${(props) => props.theme.colors.primary.gold};
    box-shadow:
      0 8px 30px ${(props) => props.theme.colors.shadow.goldLight},
      0 0 40px ${(props) => props.theme.colors.shadow.goldVeryLight},
      inset 0 0 20px ${(props) => props.theme.colors.shadow.goldInset};
  }
`;

const HeroImage = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 2px solid ${(props) => props.theme.colors.border.brown};
  box-shadow: 0 4px 15px ${(props) => props.theme.colors.shadow.blackMedium};
  transition: all 0.3s ease;

  ${Card}:hover & {
    border-color: ${(props) => props.theme.colors.primary.gold};
    box-shadow: 0 4px 20px ${(props) => props.theme.colors.shadow.goldDark};
  }
`;

const HeroName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.gold};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px ${(props) => props.theme.colors.shadow.black};
  position: relative;
  font-family: ${(props) => props.theme.fonts.body};
`;

interface HeroCardProps {
  hero: HeroType;
  isSelected: boolean;
}

const HeroCard = ({ hero, isSelected }: HeroCardProps) => {
  return (
    <Card to={`/heroes/${hero.id}`} $isSelected={isSelected}>
      <HeroImage src={hero.image} alt={hero.name} />
      <HeroName>{hero.name}</HeroName>
    </Card>
  );
};

export default HeroCard;
