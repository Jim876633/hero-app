import styled from "styled-components";
import { STATS } from "../../constant";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";

const ProfileLayout = styled.div`
  flex: 1;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
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
  align-items: center;
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

const HeroProfileSkeleton = () => {
  return (
    <ProfileLayout>
      <StatsSection>
        <TextSkeleton height="28px" width="60%" />
        {STATS.map(({ key }) => (
          <TextSkeleton key={key} height="64px" />
        ))}
      </StatsSection>

      <HeroInfoSection>
        <ImageSkeleton height="200px" />
        <TextSkeleton width="100%" height="48px" />
        <TextSkeleton width="100%" height="48px" />
      </HeroInfoSection>
    </ProfileLayout>
  );
};

export default HeroProfileSkeleton;
