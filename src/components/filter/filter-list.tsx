import React, { useState } from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { FilterTag } from './filter-tag';
import { MotionBox } from '../motion-box/motion-box';
import { IntersectionObserver } from '../intersection-observer';
import { Row } from '../../common/base';

interface Project {
  name: string;
  tag: string;
  techs: string[];
}

interface FilterListProps {
  children?: any;
  filterTags: string[];
}

const FilterListWrapper = styled.div``;

const FilterHeader = styled.div`
  ${tw`flex mb-8`};
`;

const Projects = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  @media only screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterList = ({ filterTags, children }: FilterListProps) => {
  const initialTags: string[] = [];
  const [selectedTags, setSelectedTags] = useState(initialTags);

  const toggleTag = (tagName: string) => {
    if (!selectedTags.includes(tagName) || selectedTags.length === 0) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      setSelectedTags(selectedTags.filter(tag => tag !== tagName));
    }
  };

  return (
    <FilterListWrapper>
      <FilterHeader>
        <Row>
          {filterTags &&
            filterTags.map(filterTag => (
              <FilterTag
                key={filterTag}
                numItems={
                  children.filter((child: any) => child.props.tag === filterTag)
                    .length
                }
                onClick={toggleTag}
                selectedTags={selectedTags}
              >
                {filterTag}
              </FilterTag>
            ))}
        </Row>
      </FilterHeader>
      <Projects>
        {children
          .filter((child: any) => {
            if (selectedTags.length === 0) return true;
            return selectedTags.includes(child.props.tag);
          })
          .map((element: any, index: number) => (
            <IntersectionObserver key={index}>
              <MotionBox duration={0.8} positionTransition>
                {element}
              </MotionBox>
            </IntersectionObserver>
          ))}
      </Projects>
    </FilterListWrapper>
  );
};
