import { Link } from "react-router-dom";
import styled from "styled-components";
import type { HeroType } from "../types/hero";

const Card = styled(Link)<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 2px solid ${(props) => (props.$isSelected ? "#4a90e2" : "#ddd")};
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  background-color: ${(props) => (props.$isSelected ? "#f0f8ff" : "#fff")};
  transition: all 0.3s ease;
  width: 150px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const HeroImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const HeroName = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #333;
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
