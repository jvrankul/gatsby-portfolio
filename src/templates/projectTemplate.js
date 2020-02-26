import React from 'react';
import { graphql } from 'gatsby'
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  Page,
  PageSubtitle,
  PageHeader,
  PageTag,
  PageTagText,
  TeamHeader,
  TeamMember,
  Description,
} from '../styles/page.style';
import {
  Icon,
  ExternalLink,
  StyledLink,
  StyledIcon,
  Col,
  AnimatedRow,
  AnimatedCol,
  MotionFlex,
  delayedAnimation,
} from '../common/base';
import { Tag } from '../components/tag';
import Image from '../common/image';
import PocketVideo from '../assets/pocket-vid.mp4';

import {
  initialAnimation,
  slideInOpacity,
  animtedItem
} from '../common/base';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ResponsiveImageContainer = styled(motion.div)`
  ${tw`mt-8 justify-center`}
  align-self: center;
  @media only screen and (min-width: 1440px) {
    width: 50%;
  }
  @media only screen and (max-width: 1440px) {
    width: 50%;
  }
  @media only screen and (max-width: 1000px) {
    width: 75%;
  }
  @media only screen and (max-width: 720px) {
    width: 90%;
  }
`;

const ImageContainer = styled(motion.div)`
  ${tw`flex w-full justify-center mt-8`};
  align-self: center;
`;

const Video = tw.video`mt-8 self-center`;

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, type, tags, members, link, image, description } = frontmatter

  return (
    <Layout title={title}>
    <SEO title={title} />
    <Page id="home">
      <motion.div initial="hidden" animate="show" variants={initialAnimation(0.25)}>
        <PageHeader>
          <Col>
            <PageTag variants={slideInOpacity}>
              <Icon icon={['fas', type === 'web' ? 'globe' : 'mobile-alt']} />
              <PageTagText>{type}</PageTagText>
            </PageTag>
            <PageSubtitle variants={slideInOpacity}>
              {title}
              {link &&
                <StyledLink href={link} target="_blank">
                  <StyledIcon icon={['fas', 'external-link-alt']} />
                </StyledLink> 
              }
            </PageSubtitle>
            <AnimatedRow variants={slideInOpacity}>
              { tags.map(tag => tag && <Tag name={tag} />) }
            </AnimatedRow>
          </Col>
        </PageHeader>

        <AnimatedCol variants={slideInOpacity}>
          <TeamHeader>
            <Icon icon={['fas', 'user-friends']} />
            <PageTagText>THE TEAM</PageTagText>
          </TeamHeader>
          {members?.map(member => <TeamMember>{member}</TeamMember>)}
        </AnimatedCol>
        </motion.div>
      <motion.div initial="hidden" animate="show" variants={delayedAnimation(1)}>
      {image &&
        <Col>
          {
            title === 'nourish' ?
            <ImageContainer variants={slideInOpacity}>
              <iframe
                src="https://player.vimeo.com/video/371316968"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen />
            </ImageContainer>
            :
            <ResponsiveImageContainer variants={slideInOpacity}>
              <Image
                alt="Animation showing the app in action."
                filename={`${title}.png`}
                />
          </ResponsiveImageContainer>
          }
        </Col>
      }
      <Description variants={slideInOpacity}>
        {description}
        {link && 
          <ExternalLink href={link} target="_blank">
            here.
          </ExternalLink>
        }
      </Description>
      {!image &&
        <MotionFlex variants={slideInOpacity}>
          <Video controls>
            <source src={PocketVideo} type="video/mp4" />
          </Video>
        </MotionFlex>
      }
      </motion.div>
    </Page>
  </Layout>

  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        type
        link
        image
        tags
        members
        description
      }
    }
  }
`