import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeroList from "../components/HeroList";
import { useHeroes } from "../hooks/useHeroes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  margin: 0 auto;
`;

const HeroesLayout = () => {
  const { data: heroes, isLoading, error } = useHeroes();

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return (
      <Container>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </Container>
    );
  }

  if (!heroes) {
    return <Container>No heroes found</Container>;
  }

  return (
    <Container>
      <HeroList heroes={heroes} />
      <Outlet />
    </Container>
  );
};

export default HeroesLayout;
