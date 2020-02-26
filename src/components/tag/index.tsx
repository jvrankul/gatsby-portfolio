import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

interface TagProps {
  name: string;
}

const TagContainer = tw(motion.div)`
  border border-dark px-2 py-1 mr-3 rounded-lg text-xs uppercase tracking-wider
`;

const TagText = styled.span`
  ${tw``};
`;

export const Tag = ({ name }: TagProps) => {
  return (
    <TagContainer>
      <TagText>{name}</TagText>
    </TagContainer>
  );
};
