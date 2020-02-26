import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Col, Row } from '../../common/base';

interface ProjectProps {
  name: string;
  techs: string[];
  tag: string;
}

const ProjectWrapper = styled.div`
  ${tw`flex bg-white`}
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
`;

const ProjectInner = styled.div`
  ${tw`w-full`}
`;

const BottomContainer = styled(Row)`
  ${tw`items-center justify-between py-2 px-4`}
`;

const TextContainer = styled(Col)`
  ${tw`justify-center`}
`;

const Tag = styled.span`
  ${tw`bg-dark rounded-lg px-2 py-1 ml-2 text-xs text-primary`}
  height: 300px;
`;

const ProjectSubtitle = tw.h2`
  text-xs uppercase font-hairline
`;
const ProjectTitle = tw.h1`
  text-xl capitalize font-semibold
`;

const Project = ({ name, tag, techs }: ProjectProps) => {
  return (
    <ProjectWrapper>
      <ProjectInner>
        <BottomContainer>
          <TextContainer>
            <ProjectSubtitle>{tag}</ProjectSubtitle>
            <ProjectTitle>{name}</ProjectTitle>
          </TextContainer>
          <div>
            {techs &&
              techs.map(tech => (
                <Tag key={tech}>
                  <span>{tech}</span>
                </Tag>
              ))}
          </div>
        </BottomContainer>
      </ProjectInner>
    </ProjectWrapper>
  );
};

export default Project;
