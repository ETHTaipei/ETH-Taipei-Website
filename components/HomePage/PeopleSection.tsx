import styled from "styled-components";
import Colors from "@/styles/colors";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";
import Image from "next/image";

interface PeopleSectionProps {
  title: string;
  subtitle: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  children: React.ReactNode;
  paddingStyle: {
    default: string;
    mobile: string;
  };
  maxWidth?: string;
}

const PeopleSection = ({
  title,
  subtitle,
  iconSrc,
  iconWidth,
  iconHeight,
  children,
  paddingStyle,
  maxWidth = "800px",
}: PeopleSectionProps) => {
  return (
    <Container $paddingStyle={paddingStyle}>
      <MainContent $maxWidth={maxWidth}>
        <ContentCenter>
          <Title>
            <Image
              src={iconSrc}
              alt={`${title} icon`}
              width={iconWidth}
              height={iconHeight}
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

const MainContent = styled.div<{
  $maxWidth: string;
}>`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.$maxWidth};
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
  padding-top: 50px;
  gap: 12px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
