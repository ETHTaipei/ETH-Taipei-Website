import styled from "styled-components";
import Image from "next/image";

import t from "@/public/constant/content";
import BackgroundVideo from "./BackgroundVideo";
import Colors from "@/styles/colors";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 120px 40px;
  background-color: rgba(0, 0, 0, 0.5);
  scroll-margin-top: -20px;
  @media (max-width: 768px) {
    padding: 60px 24px;
    scroll-margin-top: -50px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 880px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 996px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: 330px;
  background-color: ${Colors.brightBlue};
  opacity: 0.85;
  gap: 8px;
  @media (max-width: 996px) {
    gap: 24px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  color: ${Colors.neonGreen};
`;

const SubTitleContainer = styled.div`
  display: flex;
  gap: 22px;
  align-items: end;
  color: ${Colors.neonGreen};
`;

const SubTitle = styled.h2`
  font-size: 36px;
`;

const Description = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  color: white;
  font-family: "Inter";
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Address = styled.a`
  display: flex;
  gap: 8px;
  align-items: top;
  font-size: 16px;
  line-height: 24px;
`;

const AddressDetail = styled.div`
  color: ${Colors.neonGreen};
`;

const MapContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 330px;

  @media (max-width: 996px) {
    flex: none;
    height: 265px;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  position: relative;
  height: 329px;
  overflow: hidden;

  @media (max-width: 996px) {
    min-height: 329px;
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Venue = () => {
  return (
    <Container id="venue">
      <MainContent>
        <TextContainer>
          <Title>{t.homepage.venue}</Title>
          <SubTitleContainer>
            <SubTitle>{t.homepage.venueName}</SubTitle>
          </SubTitleContainer>
          <Description>{t.homepage.venueDescription}</Description>
          <AddressContainer>
            <Address
              href="https://goo.gl/maps/CCXUtykxqYjyp9wVA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/images/icons/location.svg"
                alt="location"
                width={24}
                height={24}
                style={{ marginRight: 4 }}
              />
              <AddressDetail>{t.homepage.venueAddress}</AddressDetail>
            </Address>
          </AddressContainer>
        </TextContainer>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4235963977653!2d121.6013444758816!3d25.053628077803722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab6736d1d707%3A0x752127c88348688b!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5Y2X5riv6Lev5LqM5q61MTPomZ8!5e0!3m2!1szh-TW!2stw!4v1708771348975!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </MapContainer>
        <ImageContainer>
          <picture>
            <source
              media="(max-width: 996px)"
              srcSet="./images/2025/venue/venue_vertical.jpg"
            />
            <ResponsiveImage
              src="./images/2025/venue/venue_horizontal.jpg"
              alt="Venue"
            />
          </picture>
        </ImageContainer>
      </MainContent>
      <BackgroundVideo />
    </Container>
  );
};

export default Venue;
