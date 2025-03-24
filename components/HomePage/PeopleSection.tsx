import styled from "styled-components";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import Image from "next/image";

interface PeopleSectionProps {
  title: string;
  subtitle: string;
  iconSrc: string;
  iconSize: number;
  children: React.ReactNode;
  paddingStyle: {
    default: string;
    mobile: string;
  };
}

const PeopleSection = ({
  title,
  subtitle,
  iconSrc,
  iconSize,
  children,
  paddingStyle,
}: PeopleSectionProps) => {
  return (
    <Container $paddingStyle={paddingStyle}>
      <MainContent>
        <ContentCenter>
          <Title>
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={iconSize}
              height={iconSize}
              style={{ marginRight: 12, verticalAlign: "bottom" }}
            />
            {title}
          </Title>
          <Subtitle>{subtitle}</Subtitle>
          <PeopleList>{children}</PeopleList>
        </ContentCenter>
      </MainContent>
    </Container>
  );
};

export default PeopleSection;

const Container = styled.div<{
  $paddingStyle: { default: string; mobile: string };
}>`
  ${BlueGridBackgroundStyles}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${(props) => props.$paddingStyle.default};

  @media (max-width: 992px) {
    padding: ${(props) => props.$paddingStyle.mobile};
  }
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ContentCenter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  color: ${Colors.neonGreen};
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const PeopleList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  min-width: 0;
  padding-top: 80px;
  gap: 12px;

  @media (max-width: 992px) {
    padding-top: 50px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
