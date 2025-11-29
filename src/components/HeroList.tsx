import { useParams } from "react-router-dom";
import type { HeroType } from "../types/hero";
import HeroCard from "./HeroCard";

interface HeroListProps {
  heroes: HeroType[];
}

const HeroList = ({ heroes }: HeroListProps) => {
  const { heroId } = useParams<{ heroId: string }>();

  return heroes.map((hero) => (
    <HeroCard key={hero.id} hero={hero} isSelected={heroId === hero.id} />
  ));
};

export default HeroList;
