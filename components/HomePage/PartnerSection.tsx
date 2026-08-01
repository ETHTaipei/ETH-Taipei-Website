import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { useT } from "@/contexts/LanguageContext";
import {
  abmediaUrl,
  blockbeatsUrl,
  blocktempoUrl,
  cryptoCityUrl,
  cryptokenMediaUrl,
  cryptoWesearchUrl,
  daCapitalUrl,
  foresightNewsUrl,
  miraUrl,
  monsterBlockUrl,
  pukecastUrl,
  tabeiUrl,
  techFlowUrl,
  zombitUrl,
} from "@/public/constant/urls";
import { GrayGridBackgroundStyles } from "@/styles/gridBackground";
import {
  BaseContainer,
  BaseMainContent,
  PartnersGrid,
  Subtitle,
  Title,
} from "./PartnerAndSponsor";

type LogoEntry = {
  name: string;
  url: string;
  img: string;
  width: number;
  height: number;
  /** 1 ~ 3, 1 being the highest importance. Controls order only, not size. */
  tier?: number;
};

const PARTNERS: LogoEntry[] = [
  {
    name: "TABEI",
    url: tabeiUrl,
    img: "/images/partners/tabei.png",
    width: 220,
    height: 88,
  },
  {
    name: "Mira",
    url: miraUrl,
    img: "/images/partners/mira.png",
    width: 250,
    height: 80,
  },
];

// Sizes below are normalised for roughly equal optical area rather than equal
// width, so a wide wordmark (DA Capital) and a near-square mark (Zombit) carry
// the same visual weight in the grid.
const MEDIA_PARTNERS: LogoEntry[] = [
  {
    name: "ABMedia",
    url: abmediaUrl,
    img: "/images/media-partners/abmedia.png",
    width: 124,
    height: 52,
  },
  {
    name: "BlockBeats",
    url: blockbeatsUrl,
    img: "/images/media-partners/blockbeats.png",
    width: 131,
    height: 49,
  },
  {
    name: "BlockTempo",
    url: blocktempoUrl,
    img: "/images/media-partners/blocktempo.png",
    width: 89,
    height: 62,
  },
  {
    name: "Crypto City",
    url: cryptoCityUrl,
    img: "/images/media-partners/cryptocity.png",
    width: 190,
    height: 34,
  },
  {
    name: "Cryptoken Media",
    url: cryptokenMediaUrl,
    img: "/images/media-partners/cryptokenmedia.svg",
    width: 133,
    height: 48,
  },
  {
    name: "Crypto Wesearch",
    url: cryptoWesearchUrl,
    img: "/images/media-partners/cryptowesearch.png",
    width: 141,
    height: 46,
  },
  {
    name: "DA Capital",
    url: daCapitalUrl,
    img: "/images/media-partners/dacapital.svg",
    width: 170,
    height: 38,
  },
  {
    name: "Foresight News",
    url: foresightNewsUrl,
    img: "/images/media-partners/foresightnews.svg",
    width: 203,
    height: 32,
  },
  {
    name: "MonsterBlock HK",
    url: monsterBlockUrl,
    img: "/images/media-partners/monsterblock.png",
    width: 154,
    height: 42,
  },
  {
    name: "Pukecast",
    url: pukecastUrl,
    img: "/images/media-partners/pukecast.svg",
    width: 113,
    height: 57,
  },
  {
    name: "TechFlow",
    url: techFlowUrl,
    img: "/images/media-partners/techflow.svg",
    width: 298,
    height: 30,
  },
  {
    // Same square badge the 2025 site used.
    name: "Zombit",
    url: zombitUrl,
    img: "/images/media-partners/zombit.png",
    width: 72,
    height: 72,
  },
];

const SmileIcon = () => (
  <Image
    src="./images/icons/smile.svg"
    alt="Smile icon"
    width={36}
    height={36}
    style={{ marginRight: 16 }}
  />
);

const Logo = ({ logo }: { logo: LogoEntry }) => {
  const image = (
    <Image
      src={logo.img}
      alt={logo.name}
      width={logo.width}
      height={logo.height}
      style={{ height: "auto" }}
    />
  );

  // Partners whose official URL we don't have yet still show, just unlinked.
  if (!logo.url) {
    return <PartnerLogoStatic>{image}</PartnerLogoStatic>;
  }

  return (
    <PartnerLogo
      href={logo.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${logo.name} website`}
    >
      {image}
    </PartnerLogo>
  );
};

const PartnerSection = () => {
  const t = useT();

  const mediaPartners = [...MEDIA_PARTNERS].sort(
    (a, b) => (a.tier ?? 3) - (b.tier ?? 3)
  );

  return (
    <Container>
      <MainContent>
        <SectionContainer>
          <Title>
            <SmileIcon />
            {t.homepage.partners}
          </Title>
          <Subtitle>{t.homepage.partnersDesc}</Subtitle>
          <PartnersGrid>
            {PARTNERS.map((partner) => (
              <Logo logo={partner} key={partner.name} />
            ))}
          </PartnersGrid>
        </SectionContainer>
        {mediaPartners.length > 0 && (
          <SectionContainer>
            <Title>
              <SmileIcon />
              {t.homepage.mediaPartners}
            </Title>
            <Subtitle>{t.homepage.mediaPartnersDesc}</Subtitle>
            <PartnersGrid>
              {mediaPartners.map((partner) => (
                <Logo logo={partner} key={partner.name} />
              ))}
            </PartnersGrid>
          </SectionContainer>
        )}
      </MainContent>
    </Container>
  );
};

const Container = styled(BaseContainer)`
  ${GrayGridBackgroundStyles}
`;

const MainContent = styled(BaseMainContent)`
  gap: 80px;
`;

const SectionContainer = styled.div`
  width: 100%;
`;

const logoStyles = `
  margin: 16px 20px;
  display: block;

  > img {
    object-fit: contain;
    max-height: 100px;
  }
`;

const PartnerLogo = styled(Link)`
  ${logoStyles}
  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const PartnerLogoStatic = styled.div`
  ${logoStyles}
`;

export default PartnerSection;
