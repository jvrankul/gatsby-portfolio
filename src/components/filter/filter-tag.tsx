import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Row } from '../../common/base';

interface FilterTagProps {
  onClick: any;
  selectedTags: string[];
  numItems: number;
  children: any;
}

type TagName = string;

const FilterTagItem = styled(motion.div)<{ selected: boolean }>`
  ${tw`flex flex-row text-sm bg-grey cursor-pointer hover:bg-black text-primary text-xxs tracking-widest uppercase items-center rounded-lg py-2 px-4 mr-2`};
  height: 26px;
  background-color: ${({ selected }) => (selected ? '#1a1a1a' : '#ABABAB')};
`;

const FilterTagInner = styled(Row)`
  ${tw`justify-between`}
`;

export const FilterTag = ({
  onClick,
  children,
  selectedTags,
  numItems,
}: FilterTagProps) => {
  const isSelected = selectedTags.includes(children);
  return (
    <FilterTagItem
      whileHover={{ scale: 1.03 }}
      onClick={() => onClick(children as TagName)}
      selected={isSelected}
    >
      <FilterTagInner>
        <div>{`(${numItems}) ${children}`}</div>
      </FilterTagInner>
    </FilterTagItem>
  );
};
