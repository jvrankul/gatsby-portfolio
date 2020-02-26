import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { TwLink, Row } from '../common/base';
import Scroller from './widgets/scroller';
import Image from '../common/image';
import { Breakpoint, BreakpointProvider } from 'react-socks';

const HeaderWrapper = styled.div`
  ${tw`h-16 w-full items-center bg-primary fixed`}
  z-index: 999;
`;

const HeaderInner = styled(Row)`
  ${tw`w-screen px-6 lg:px-64 py-0 md:py-8 items-center justify-center mx-auto bg-primary`}
  height: 56px;
`;

const HeaderInnerSm = styled(HeaderInner)`
  ${tw`justify-between`}
`;

const Keyline = styled.div`
  height: 1px;
  background-color: #1a1a1a40;
`;

const HeaderLink = styled(TwLink)`
  min-width: fit-content;
`;

const HeaderText = styled.span`
  ${tw`tracking-widest text-md md:text-xl text-black uppercase font-semibold`};
  min-width: 8rem;
  letter-spacing: 8px;
`;

const ImageContainer = styled.div`
  height: 32px;
  width: 32px;
`;

export const Header = () => {
  return (
    <BreakpointProvider>
      <HeaderWrapper>
        <Breakpoint medium up>
          <HeaderInner>
            <Scroller name="projects" />
            <HeaderLink href="/">
              <HeaderText>jonathon•codes</HeaderText>
            </HeaderLink>
            <Scroller name="contact" />
          </HeaderInner>
        </Breakpoint>

        <Breakpoint small down>
          <HeaderInnerSm>
            <div>
              <HeaderLink href="/">
                <ImageContainer>
                  <Image
                    alt="Jonathon.codes logo - The letters J and C on a dark background"
                    filename={`logo.png`}
                  />
                </ImageContainer>
              </HeaderLink>
            </div>
            <Row>
              <Scroller name="projects" />
              <Scroller name="contact" />
            </Row>
          </HeaderInnerSm>
        </Breakpoint>

        <Keyline />
      </HeaderWrapper>
    </BreakpointProvider>
  );
};
