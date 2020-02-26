import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { TwLink, Row, Col } from '../common/base';
import Image from '../common/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterWrapper = styled.div`
  ${tw`
    w-full h-24 flex items-center bg-primary text-dark
  `}
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

const FooterInner = tw.div`
  w-full h-16 mx-4 lg:mx-32 flex items-center justify-between lg:justify-around
`;

const FooterLeft = styled(Col)`
  ${tw`px-2 sm:px-4 justify-center`}
`;

const FooterText = tw.span`
  tracking-widest font-semibold text-xs hidden xs:block md:text-sm
`;

const Socials = tw.div`
  flex block
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  position: relative;
  @keyframes marquee {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
  ${tw`
    text-xs
    mb-2
    h-4
  `}
`;

const MarqueeInner = styled.div`
  display: block;
  width: 200%;
  height: 30px;
  position: absolute;
  overflow: hidden;

  animation: marquee 2.5s linear infinite;
`;

const MarqueeText = styled.span`
  float: left;
  width: 50%;
  position: relative;
`;

const SocialIcon = tw(FontAwesomeIcon)`
  text-2xl
  mr-3
  text-dark
`;

const ImageContainer = styled.div`
  height: 32px;
  width: 32px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <Row>
          <ImageContainer>
            <Image
              alt="Jonathon.codes logo - The letters J and C on a dark background"
              filename={`logo.png`}
            />
          </ImageContainer>
          <FooterLeft>
            <FooterText>jonathon.codes</FooterText>
          </FooterLeft>
        </Row>
        <Socials>
          <MarqueeWrapper>
            <MarqueeInner>
              <MarqueeText>FIND ME ON SOCIALS</MarqueeText>
              <MarqueeText>FIND ME ON SOCIALS</MarqueeText>
            </MarqueeInner>
          </MarqueeWrapper>
          <TwLink href="https://www.linkedin.com/in/jvrankul/" target="_blank">
            <SocialIcon icon={['fab', 'linkedin']} />
          </TwLink>
          <TwLink href="https://www.twitter.com" target="_blank">
            <SocialIcon icon={['fab', 'twitter']} />
          </TwLink>
          <TwLink
            href="https://www.strava.com/athletes/45317732"
            target="_blank"
          >
            <SocialIcon icon={['fab', 'strava']} />
          </TwLink>
          <TwLink href="https://github.com/jvrankul/" target="_blank">
            <SocialIcon icon={['fab', 'github']} />
          </TwLink>
        </Socials>
      </FooterInner>
    </FooterWrapper>
  );
};
