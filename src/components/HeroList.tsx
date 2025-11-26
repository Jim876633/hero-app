import { useParams } from "react-router-dom";
import styled from "styled-components";
import type { HeroType } from "../types/hero";
import HeroCard from "./HeroCard";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

interface HeroListProps {
  heroes: HeroType[];
}

const HeroList = ({ heroes }: HeroListProps) => {
  const { heroId } = useParams<{ heroId: string }>();

  return (
    <ListContainer>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} isSelected={heroId === hero.id} />
      ))}
    </ListContainer>
  );
};

export default HeroList;
