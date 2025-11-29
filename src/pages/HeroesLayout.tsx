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

  return (
    <Container>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error loading heroes."
      ) : !heroes ? (
        "No heroes found"
      ) : (
        <>
          <HeroList heroes={heroes} />
          <Outlet />
        </>
      )}
    </Container>
  );
};

export default HeroesLayout;
