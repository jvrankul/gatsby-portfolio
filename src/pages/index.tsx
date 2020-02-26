import React from 'react';
import { graphql } from 'gatsby';

import {
  PageTitle,
  PageSubtitle,
  AccentLetter,
  PageCopy,
  PageSection,
} from '../styles/page.style';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project/project';
import { FilterList } from '../components/filter/filter-list';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  initialAnimation,
  animatedItem,
  delayedAnimation,
} from '../common/base';

interface Props {
  data: {
    allMarkdownRemark: any;
    markdown: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const BlogIndex = ({ data }: Props) => {
  const projects = data.markdown.group[0].edges.map(
    (item: any) => item.node.frontmatter
  );
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />

      <PageSection id="home">
        <motion.div
          initial="hidden"
          animate="show"
          variants={initialAnimation()}
        >
          <PageTitle variants={animatedItem}>THINKER</PageTitle>
          <PageTitle variants={animatedItem}>
            <AccentLetter>C</AccentLetter>REAT<AccentLetter>O</AccentLetter>R
          </PageTitle>
          <PageTitle variants={animatedItem}>
            <AccentLetter>D</AccentLetter>EV<AccentLetter>E</AccentLetter>LOPER;
          </PageTitle>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={delayedAnimation()}
        >
          <PageCopy variants={animatedItem}>Hey, I'm Jonathon.</PageCopy>
          <PageCopy variants={animatedItem}>
            I design & build digital experiences for
            <AccentLetter> web</AccentLetter> +
            <AccentLetter> mobile.</AccentLetter>
          </PageCopy>
          <PageCopy variants={animatedItem}>
            Scroll down to check out some of my{' '}
            <ExternalLink href="#projects">projects.</ExternalLink>
          </PageCopy>
        </motion.div>
      </PageSection>

      <div id="projects" />
      <PageSection justify="center">
        <PageSubtitle>Projects</PageSubtitle>
        <FilterList filterTags={['web', 'mobile']}>
          {projects.map((project: any) => (
            <Project
              key={project}
              name={project.title}
              tag={project.type}
              techs={project.tags}
            />
          ))}
        </FilterList>
      </PageSection>

      <div id="contact" />
      <PageSection justify="center">
        <PageSubtitle>Contact</PageSubtitle>
        <PageCopy>
          Want to work together, need something built, or just want to have a
          chat?
        </PageCopy>
        <PageCopy>
          {' '}
          Reach out to me on{' '}
          <ExternalLink
            href="https://www.linkedin.com/in/jvrankul/"
            target="_blank"
          >
            LinkedIN.
          </ExternalLink>
        </PageCopy>
      </PageSection>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site: site {
      siteMetadata {
        title
      }
    }
    markdown: allMarkdownRemark {
      group(field: frontmatter___date) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              type
              tags
            }
          }
        }
      }
    }
  }
`;
