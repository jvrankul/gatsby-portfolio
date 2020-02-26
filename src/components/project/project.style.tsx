import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '../../common/base';

export const ProjectWrapper = styled(Link)``;

export const ProjectTitle = styled.div`
  ${tw`uppercase font-medium text-4xl mt-2`};
`;

export const TechsWrapper = tw(Col)`
  font-light mb-2
`;

export const Keyline = styled.div`
  ${tw`bg-dark`};
  height: 1px;
`;

export const LinkWrapper = styled(Row)`
  ${tw`justify-end`};
`;

export const RightLink = styled.div`
  ${tw`text-sm mr-2 mb-2`};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  ${tw`text-accent text-md mt-1`}
`;
