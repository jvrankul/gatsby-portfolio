import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Col, Row } from '../common/base';

export const PageTitle = styled(motion.div)`
  ${tw`text-5xl md:text-6xl font-bold uppercase`};
`;

export const PageSubtitle = styled(motion.div)`
  ${tw`sm:text-5xl text-4xl font-bold uppercase tracking-wider`}
`;

export const AccentLetter = tw.span`
  text-accent
`;

export const PageCopy = tw.p`
  text-xl sm:text-2xl my-4
`;

export const PageSection = styled(Col)<{ justify?: string }>`
  ${tw`justify-center px-4`};
  min-height: 100vh;
  width: 100%;
  justify-content: ${({ justify }) => justify && justify};
`;

export const Page = styled(Col)`
  ${tw`justify-start mt-24 mb-8 px-8`};
  min-height: 90vh;
  width: 100%;
`;

// Project Page Styles

export const PageHeader = styled(Row)`
  ${tw`justify-between`};
`;

export const PageTag = tw(motion.div)`
  flex flex-row items-center
`;

export const PageTagText = tw.h4`
  text-md uppercase tracking-widest
`;

export const TeamHeader = tw(Row)`
  items-center mt-6 mb-2
`;

export const TeamMember = tw.span`
  text-xs font-light tracking-wider
`;

export const Description = styled(motion.div)`
  ${tw`mt-8 text-md font-normal text-center`};
`;
