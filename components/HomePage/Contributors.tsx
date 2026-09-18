import Image from "next/image";
import styled from "styled-components";
import { useLanguage } from "@/contexts/LanguageContext";
import Colors from "@/styles/colors";
import { diagonalSymmetricBorder } from "@/styles/constants";
import { BlueGridBackgroundStyles } from "@/styles/gridBackground";

const CONTRIBUTORS = [
  { name: "Martinet Lee", image: "/images/speakers/martinet.jpg", xUrl: "https://x.com/martinetlee" },
  { name: "Chang-Wu Chen", image: "/images/speakers/changwu.jpg", xUrl: "https://x.com/changwu_tw" },
  { name: "Hana Chang", image: "/images/contributors/2026/hana-chang.jpeg", xUrl: "https://x.com/hanamizuki" },
  { name: "PJ", image: "/images/contributors/2026/pj-web.jpg", xUrl: "https://x.com/0xpanjohn" },
  { name: "Jason L", image: "/images/speakers/jason-lai.jpg", xUrl: "https://x.com/Jasonjlai" },
  { name: "Jennifer Hsu", image: "/images/contributors/2026/jennifer-hsu-web.jpg", xUrl: "https://x.com/joy_890913" },
  { name: "ccwang", image: "/images/contributors/2026/ccwang.jpeg", xUrl: "https://x.com/a2468834_eth" },
  { name: "Ryan", image: "/images/speakers/ryan.png", xUrl: "https://x.com/ryanycwEth" },
  { name: "Nic Lin", image: "/images/contributors/2026/nic-lin.png", xUrl: "https://x.com/NICLin619" },
  { name: "Kevin Chia", image: "/images/contributors/2026/kevin-chia-web.jpg", xUrl: "https://x.com/kevinchia0907" },
  { name: "Taka", image: "/images/speakers/taka.jpg", xUrl: "https://x.com/takasaky" },
  { name: "PinHao", image: "/images/contributors/2026/pinhao-web.jpg", xUrl: "https://x.com/mnipinhao" },
  { name: "Ying Wu", image: "/images/contributors/2026/ying-wu-web.jpg", xUrl: "https://x.com/Jou29572" },
  { name: "Malingshu 🥔", image: "/images/contributors/2026/malingshu-web.jpg", xUrl: "https://x.com/0xMalingshu" },
  { name: "Michelle Novenda Hartono", image: "/images/contributors/2026/michelle-novenda-hartono-web.jpg", xUrl: "https://x.com/MichelleNovenda" },
  { name: "Jeff Chung", image: "/images/contributors/2026/jeff-chung-web.jpg", xUrl: "https://x.com/jeffoodchain" },
  { name: "Stamford Hwang", image: "/images/speakers/stamford.jpg" },
  { name: "Yuting", image: "/images/contributors/2026/yuting.png" },
] as const;

type Contributor = (typeof CONTRIBUTORS)[number];

const ContributorContents = ({ contributor }: { contributor: Contributor }) => (
  <>
    <Photo>
      <Image
        src={contributor.image}
        alt={contributor.name}
        fill
        sizes="(max-width: 768px) 44vw, (max-width: 992px) 22vw, 180px"
      />
    </Photo>
    <Name>{contributor.name}</Name>
  </>
);

const Contributors = () => {
  const { locale } = useLanguage();

  return (
    <Container>
      <MainContent>
        <Title>
          <Image
            src="/images/icons/contributors.svg"
            alt=""
            width={46}
            height={46}
            aria-hidden="true"
          />
          {locale === "zh-Hant" ? "主辦團隊" : "Contributors"}
        </Title>
        <Grid>
          {CONTRIBUTORS.map((contributor) =>
            "xUrl" in contributor ? (
              <LinkedCard
                key={contributor.name}
                href={contributor.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${contributor.name} on X`}
              >
                <ContributorContents contributor={contributor} />
              </LinkedCard>
            ) : (
              <Card key={contributor.name}>
                <ContributorContents contributor={contributor} />
              </Card>
            )
          )}
        </Grid>
      </MainContent>
    </Container>
  );
};

export default Contributors;

const Container = styled.section`
  ${BlueGridBackgroundStyles}
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 40px 120px;

  @media (max-width: 768px) {
    padding: 0 24px 80px;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0;
  color: ${Colors.neonGreen};
  font-size: 42px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 28px 20px;
  margin-top: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 16px;
  }
`;

const Card = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
`;

const LinkedCard = styled.a`
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;

  &:focus-visible {
    border-radius: 16px;
    outline: 3px solid white;
    outline-offset: 6px;
  }
`;

const Photo = styled.div`
  ${diagonalSymmetricBorder}
  position: relative;
  width: 100%;
  max-width: 180px;
  aspect-ratio: 1;
  overflow: hidden;
  border: 2px solid ${Colors.neonGreen};
  background: #111;

  img {
    object-fit: cover;
    transition: transform 400ms ease;
  }

  ${LinkedCard}:hover & img {
    transform: scale(1.06);
  }
`;

const Name = styled.div`
  margin-top: 12px;
  color: ${Colors.neonGreen};
  font-size: 20px;
  line-height: 1.2;
  overflow-wrap: anywhere;
`;
