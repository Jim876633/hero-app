import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeroList from "../components/HeroList";
import HeroListSkeleton from "../components/Skeleton/HeroListSkeleton";
import { useHeroes } from "../hooks/useHeroes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  margin: 0 auto;
  min-height: 100vh;
  background: ${(props) => props.theme.gradients.background.radialCenter};
`;
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const HeroesLayout = () => {
  const { data: heroes, isLoading, error } = useHeroes();

  return (
    <Container>
      <ListContainer>
        {isLoading ? (
          <HeroListSkeleton />
        ) : error ? (
          "Error loading heroes."
        ) : !heroes ? (
          "No heroes found"
        ) : (
          <HeroList heroes={heroes} />
        )}
      </ListContainer>
      <Outlet />
    </Container>
  );
};

export default HeroesLayout;
