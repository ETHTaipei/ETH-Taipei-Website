import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { useT } from "@/contexts/LanguageContext";
import {
  abmediaUrl,
  bermuDaoUrl,
  blockbeatsUrl,
  blocktempoUrl,
  blockTrendUrl,
  bobaDaoUrl,
  cryptoBarUrl,
  cryptoCityUrl,
  cryptokenMediaUrl,
  cryptoWesearchUrl,
  daCapitalUrl,
  desciAsiaUrl,
  desciTaiwanUrl,
  ethHubHkUrl,
  ethTaoUrl,
  foresightNewsUrl,
  miraUrl,
  monsterBlockUrl,
  nccuBlockchainUrl,
  nchuBlockchainUrl,
  ncuBlockchainClubUrl,
  nodeZUrl,
  ntufcUrl,
  ntustBlockchainUrl,
  ntutBlockchainUrl,
  openBuildUrl,
  pukecastUrl,
  tabeiUrl,
  techFlowUrl,
  vyperUrl,
  xueDaoUrl,
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

// Student clubs, DAOs and regional Ethereum communities all sit here rather
// than under Community Support — that's how Hygraph classified them for 2025,
// where isCommunitySupport was reserved for Taipei Ethereum Meetup, the
// Ethereum Foundation and Geode Labs.
//
// Sizes in both lists below are normalised for roughly equal optical area
// rather than equal width, so a 10:1 wordmark (TechFlow) and a square badge
// (Zombit) carry the same weight in the grid: height = sqrt(6400 / aspect),
// clamped to 30..78. TABEI and Mira are hand-sized — they lead the section.
const PARTNERS: LogoEntry[] = [
  {
    name: "TABEI",
    url: tabeiUrl,
    img: "/images/partners/tabei.png",
    width: 220,
    height: 88,
    tier: 1,
  },
  {
    name: "Mira",
    url: miraUrl,
    img: "/images/partners/mira.png",
    width: 250,
    height: 80,
    tier: 1,
  },
  {
    name: "BermuDAO",
    url: bermuDaoUrl,
    img: "/images/partners/bermudao.png",
    width: 125,
    height: 51,
  },
  {
    name: "BlockTrend 區塊勢",
    url: blockTrendUrl,
    img: "/images/partners/blocktrend.png",
    width: 72,
    height: 78,
  },
  {
    name: "BOBA DAO",
    url: bobaDaoUrl,
    img: "/images/partners/bobadao.svg",
    width: 198,
    height: 33,
  },
  {
    name: "CryptoBar 流動吧",
    url: cryptoBarUrl,
    img: "/images/partners/cryptobar.png",
    width: 71,
    height: 78,
  },
  {
    name: "DeSci Asia",
    url: desciAsiaUrl,
    img: "/images/partners/desciasia.png",
    width: 68,
    height: 78,
  },
  {
    name: "DeSci Taiwan",
    url: desciTaiwanUrl,
    img: "/images/partners/descitaiwan.png",
    width: 87,
    height: 73,
  },
  {
    name: "ETH Hub Hong Kong",
    url: ethHubHkUrl,
    img: "/images/partners/ethhub.png",
    width: 123,
    height: 52,
  },
  {
    name: "ETHTao",
    url: ethTaoUrl,
    img: "/images/partners/ethtao.png",
    width: 142,
    height: 45,
  },
  {
    name: "NCCU Blockchain",
    url: nccuBlockchainUrl,
    img: "/images/partners/nccubc.png",
    width: 107,
    height: 60,
  },
  {
    name: "NCHU Blockchain",
    url: nchuBlockchainUrl,
    img: "/images/partners/nchubc.png",
    width: 93,
    height: 69,
  },
  {
    name: "NCU Blockchain Club",
    url: ncuBlockchainClubUrl,
    img: "/images/partners/ncubc.png",
    width: 160,
    height: 40,
  },
  {
    name: "NodeZ",
    url: nodeZUrl,
    img: "/images/partners/nodez.png",
    width: 70,
    height: 78,
  },
  {
    name: "NTU Fintech Club",
    url: ntufcUrl,
    img: "/images/partners/ntufc.png",
    width: 296,
    height: 30,
  },
  {
    name: "NTUST Blockchain",
    url: ntustBlockchainUrl,
    img: "/images/partners/ntustbc.png",
    width: 88,
    height: 73,
  },
  {
    name: "NTUT Blockchain",
    url: ntutBlockchainUrl,
    img: "/images/partners/ntutbc.png",
    width: 129,
    height: 50,
  },
  {
    name: "OpenBuild",
    url: openBuildUrl,
    img: "/images/partners/openbuild.png",
    width: 173,
    height: 37,
  },
  {
    name: "Vyper",
    url: vyperUrl,
    img: "/images/partners/vyper.png",
    width: 70,
    height: 78,
  },
  {
    name: "XueDAO",
    url: xueDaoUrl,
    img: "/images/partners/xuedao.png",
    width: 185,
    height: 35,
  },
];

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
    width: 96,
    height: 67,
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
    width: 78,
    height: 78,
  },
];

const SmileIcon = () => (
  <Image
    src="/images/icons/smile.svg"
    alt=""
    width={36}
    height={36}
    style={{ marginRight: 16 }}
  />
);

const MediaIcon = () => (
  <Image
    src="/images/icons/media.svg"
    alt=""
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

const byTier = (list: LogoEntry[]) =>
  [...list].sort((a, b) => (a.tier ?? 3) - (b.tier ?? 3));

const PartnerSection = () => {
  const t = useT();

  const partners = byTier(PARTNERS);
  const mediaPartners = byTier(MEDIA_PARTNERS);

  return (
    <Container>
      <MainContent>
        <SectionAnchor id="partners" aria-hidden="true" />
        <SectionContainer>
          <Title>
            <SmileIcon />
            {t.homepage.partners}
          </Title>
          <Subtitle>{t.homepage.partnersDesc}</Subtitle>
          <PartnersGrid>
            {partners.map((partner) => (
              <Logo logo={partner} key={partner.name} />
            ))}
          </PartnersGrid>
        </SectionContainer>
        {mediaPartners.length > 0 && (
          <SectionContainer>
            <Title>
              <MediaIcon />
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

const SectionAnchor = styled.span`
  display: block;
  width: 0;
  height: 0;
  scroll-margin-top: calc(var(--site-nav-height, 76px) + 16px);
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
`;

const PartnerLogoStatic = styled.div`
  ${logoStyles}
`;

export default PartnerSection;
