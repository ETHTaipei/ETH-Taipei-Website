import Image from "next/image";
import styled from "styled-components";

import t from "@/public/constant/content";
import {
  coscupUrl,
  ethereumFoundationUrl,
  geodeLabsUrl,
  localEthereumTaiwanUrl,
  lumaEmbedUrl,
  lumaUrl,
  newsletterUrl,
  temMediumUrl,
  xueDaoUrl,
} from "@/public/constant/urls";
import { useRouting } from "@/public/utils/common";
import type { FeedPost } from "@/public/utils/rss";
import Colors from "@/styles/colors";
import { diagonalSymmetricBorder } from "@/styles/constants";

type Props = {
  mediumPosts: FeedPost[];
  newsletterPosts: FeedPost[];
};

const PostList = ({
  posts,
  heading,
  onOpen,
}: {
  posts: FeedPost[];
  heading: string;
  onOpen: (url: string) => void;
}) => {
  if (!posts.length) return null;
  return (
    <PostListContainer>
      <PostListHeading>{heading}</PostListHeading>
      {posts.map((post) => (
        <PostItem key={post.link} onClick={() => onOpen(post.link)}>
          <PostTitle>{post.title}</PostTitle>
          {post.pubDate && <PostDate>{post.pubDate}</PostDate>}
        </PostItem>
      ))}
    </PostListContainer>
  );
};

const CommunityPage = ({ mediumPosts, newsletterPosts }: Props) => {
  const { handleOnClickExternalLink } = useRouting();

  return (
    <Container id="info">
      <MainContent>
        <Title>
          <ImageWrapper>
            <Image
              src="/images/icons/butterfly.svg"
              alt="community"
              width={48}
              height={48}
              style={{ marginRight: 4 }}
            />
          </ImageWrapper>
          {t.community.title}
        </Title>
        <Subtitle>{t.community.subtitle}</Subtitle>
        <Description>{t.community.intro1}</Description>
        <Description>{t.community.intro2}</Description>

        {/* Monthly meetups */}
        <SectionTitle>{t.community.meetupsTitle}</SectionTitle>
        <Description>{t.community.meetupsIntro}</Description>
        <MeetupGrid>
          <MeetupCard>
            <MeetupName>{t.community.tldrName}</MeetupName>
            <MeetupDate>
              <Icon>
                <Image
                  src="/images/FirstViewBanner/Date_Icon.svg"
                  alt="Date"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Icon>
              {t.community.tldrDate}
            </MeetupDate>
            <MeetupDesc>{t.community.tldrDesc}</MeetupDesc>
          </MeetupCard>
          <MeetupCard>
            <MeetupName>{t.community.featuredName}</MeetupName>
            <MeetupDate>
              <Icon>
                <Image
                  src="/images/FirstViewBanner/Date_Icon.svg"
                  alt="Date"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Icon>
              {t.community.featuredDate}
            </MeetupDate>
            <MeetupDesc>{t.community.featuredDesc}</MeetupDesc>
          </MeetupCard>
        </MeetupGrid>
        <Description>
          {t.community.meetupsOutro1}
          <Link onClick={() => handleOnClickExternalLink(lumaUrl)}>
            {t.community.meetupsSubscribe}
          </Link>
          {t.community.meetupsOutro2}
        </Description>
        <CalendarEmbed
          title="Upcoming Community Events"
          src={lumaEmbedUrl}
          width="100%"
          height="auto"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          loading="lazy"
        />

        {/* COSCUP track */}
        <SectionTitle>{t.community.coscupTitle}</SectionTitle>
        <Description>
          {t.community.coscupDesc1}
          <Link onClick={() => handleOnClickExternalLink(coscupUrl)}>
            {t.community.coscupLink}
          </Link>
          {t.community.coscupDesc2}
        </Description>

        {/* Taipei Ethereum Meetup Medium column */}
        <SectionTitle>{t.community.mediumTitle}</SectionTitle>
        <Description>
          {t.community.mediumDesc1}
          <Link onClick={() => handleOnClickExternalLink(temMediumUrl)}>
            {t.community.mediumLink}
          </Link>
          {t.community.mediumDesc2}
        </Description>
        <PostList
          posts={mediumPosts}
          heading={t.community.mediumLatest}
          onOpen={handleOnClickExternalLink}
        />

        {/* Newsletter */}
        <SectionTitle>{t.community.newsletterTitle}</SectionTitle>
        <Description>
          {t.community.newsletterDesc1}
          <Link onClick={() => handleOnClickExternalLink(newsletterUrl)}>
            {t.community.newsletterName}
          </Link>
          {t.community.newsletterDesc2}
        </Description>
        <PostList
          posts={newsletterPosts}
          heading={t.community.newsletterLatest}
          onOpen={handleOnClickExternalLink}
        />
        <Description>
          <Link onClick={() => handleOnClickExternalLink(newsletterUrl)}>
            {t.community.newsletterSubscribe}
          </Link>
        </Description>

        {/* Local Ethereum coverage */}
        <SectionTitle>{t.community.coverageTitle}</SectionTitle>
        <Description>{t.community.coverageDesc}</Description>
        <FeatureCard
          onClick={() => handleOnClickExternalLink(localEthereumTaiwanUrl)}
        >
          <FeatureCardSource>{t.community.coverageCardSource}</FeatureCardSource>
          <FeatureCardTitle>{t.community.coverageCardTitle}</FeatureCardTitle>
          <FeatureCardBody>{t.community.coverageCardBody}</FeatureCardBody>
          <FeatureCardCta>{t.community.coverageCardCta}</FeatureCardCta>
        </FeatureCard>

        {/* XueDAO */}
        <SectionTitle>{t.community.xuedaoTitle}</SectionTitle>
        <Description>
          {t.community.xuedaoDesc1}
          <Link onClick={() => handleOnClickExternalLink(xueDaoUrl)}>
            {t.community.xuedaoLink}
          </Link>
          {t.community.xuedaoDesc2}
        </Description>

        {/* Sponsor thanks */}
        <SectionTitle>{t.community.thanksTitle}</SectionTitle>
        <Description>
          {t.community.thanksDesc1}
          <Link
            onClick={() => handleOnClickExternalLink(ethereumFoundationUrl)}
          >
            {t.community.thanksEF}
          </Link>
          {t.community.thanksDesc2}
          <Link onClick={() => handleOnClickExternalLink(geodeLabsUrl)}>
            {t.community.thanksGeode}
          </Link>
          {t.community.thanksDesc3}
        </Description>
      </MainContent>
    </Container>
  );
};

export default CommunityPage;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(33, 35, 37, 1);
  min-height: 100vh;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 860px;
  padding: 120px 40px;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${Colors.neonGreen};
  text-align: center;
  font-size: 48px;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.div`
  font-size: 22px;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${Colors.neonGreen};
  margin-top: 48px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.div`
  color: white;
  font-family: Inter;
  font-size: 16px;
  line-height: 26px;
  margin-top: 12px;
`;

const Link = styled.a`
  color: ${Colors.aero};
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: ${Colors.neonGreen};
  }
`;

const MeetupGrid = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MeetupCard = styled.div`
  flex: 1;
  padding: 24px;
  border: 3px solid ${Colors.brightBlue};
  ${diagonalSymmetricBorder}
`;

const MeetupName = styled.h3`
  font-size: 24px;
  color: white;
  text-shadow: -2px 0 ${Colors.brightBlue}, 0 2px ${Colors.brightBlue},
    2px 0 ${Colors.brightBlue}, 0 -2px ${Colors.brightBlue};
`;

const MeetupDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${Colors.neonGreen};
  font-size: 16px;
  margin-top: 12px;
`;

const Icon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

const MeetupDesc = styled.div`
  color: white;
  font-family: Inter;
  font-size: 14px;
  line-height: 24px;
  margin-top: 12px;
`;

const CalendarEmbed = styled.iframe`
  margin-top: 24px;
  border: none;
  min-height: 370px;
`;

const PostListContainer = styled.div`
  margin-top: 16px;
  border-left: 3px solid ${Colors.brightBlue};
  padding-left: 16px;
`;

const PostListHeading = styled.div`
  color: ${Colors.gray3};
  font-family: Inter;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PostItem = styled.div`
  margin-top: 12px;
  cursor: pointer;

  :hover > div:first-child {
    color: ${Colors.neonGreen};
  }
`;

const PostTitle = styled.div`
  color: ${Colors.aero};
  font-family: Inter;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  transition: color 200ms ease;
`;

const PostDate = styled.div`
  color: ${Colors.gray3};
  font-family: Inter;
  font-size: 13px;
  margin-top: 2px;
`;

const FeatureCard = styled.div`
  margin-top: 24px;
  padding: 24px;
  border: 3px solid ${Colors.brightBlue};
  ${diagonalSymmetricBorder}
  cursor: pointer;
  transition: transform 200ms ease;

  :hover {
    transform: scale(1.01);
  }
`;

const FeatureCardSource = styled.div`
  color: ${Colors.gray3};
  font-family: Inter;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeatureCardTitle = styled.h3`
  color: white;
  font-size: 24px;
  margin-top: 8px;
  text-shadow: -2px 0 ${Colors.brightBlue}, 0 2px ${Colors.brightBlue},
    2px 0 ${Colors.brightBlue}, 0 -2px ${Colors.brightBlue};
`;

const FeatureCardBody = styled.div`
  color: white;
  font-family: Inter;
  font-size: 14px;
  line-height: 24px;
  margin-top: 12px;
`;

const FeatureCardCta = styled.div`
  color: ${Colors.neonGreen};
  font-family: Inter;
  font-size: 15px;
  margin-top: 16px;
`;
