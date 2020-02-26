import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export const Row = styled.div`
  ${tw`flex flex-row`};
`;

export const AnimatedRow = styled(motion.div)`
  ${tw`flex flex-row`};
`;

export const Col = styled.div`
  ${tw`flex flex-col`};
`;

export const AnimatedCol = styled(motion.div)`
  ${tw`flex flex-col`};
`;

export const MotionFlex = styled(motion.div)`
  ${tw`flex justify-center items-center`};
`;

export const TwLink = styled.a`
  ${tw`hover:opacity-75 cursor-pointer`};
`;

export const ExternalLink = styled.a`
  ${tw`text-accent`};
  :hover {
    text-decoration: underline;
  }
`;

export const StyledLink = tw(ExternalLink)`
  ml-2 mb-1 hover:opacity-75
`;

export const Icon = styled(FontAwesomeIcon)<{ color?: string }>`
  ${tw`text-xl mr-3`};
  color: ${({ color }) => (color ? color : '#1a1a1a')};
`;

export const StyledIcon = tw(Icon)`
  mb-1
`;

/* Animation */

export const initialAnimation = (staggerSpeed = 0.5) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerSpeed,
        ease: 'easeInOut',
      },
    },
  };
};

export const delayedAnimation = (delay = 1.5) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.5,
      },
    },
  };
};

export const animatedItem = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

export const slideInOpacity = {
  hidden: { opacity: 0, translateX: -45 },
  show: { opacity: 1, translateX: 0 },
};
