import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface ScrollerProps {
  name: string;
}

const ScrollerWrapper = styled(Link)`
  ${tw`flex items-center text-xs mx-2 sm:mx-12 uppercase tracking-widest`}
  opacity: 100%;
  :hover {
    opacity: 75%;
  }
`;

const Scroller = ({ name }: ScrollerProps) => {
  return (
    <ScrollerWrapper to={`#${name}`}>
      <span>{name}</span>
    </ScrollerWrapper>
  );
};

export default Scroller;
