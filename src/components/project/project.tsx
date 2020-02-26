import React, { useState } from 'react';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { motion, useMotionValue } from 'framer-motion';
import {
  ProjectWrapper,
  ProjectTitle,
  TechsWrapper,
  LinkWrapper,
  RightLink,
  StyledIcon,
  Keyline,
} from './project.style';

interface ProjectProps {
  name: string;
  techs: string[];
  tag: string;
}

export const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };

const Project = ({ name, techs }: ProjectProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const zIndex = useMotionValue(isSelected ? 2 : 0);

  function checkZIndex(latest: any) {
    console.log('called zIndex');
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }

  const toggleSelected = () => setIsSelected(!isSelected);
  return (
    <motion.div onClick={toggleSelected} whileHover={{ scale: 0.95 }}>
      <ProjectWrapper to={`/projects/${name}`}>
        <ProjectTitle>{name}</ProjectTitle>
        <TechsWrapper>
          {techs && techs.map(tech => <span key={tech}>{tech}</span>)}
        </TechsWrapper>
        <LinkWrapper>
          <RightLink>tap to view</RightLink>
          <StyledIcon icon={['fas', 'chevron-right']} />
        </LinkWrapper>
        <Keyline />
      </ProjectWrapper>
    </motion.div>
  );
};

export default Project;
