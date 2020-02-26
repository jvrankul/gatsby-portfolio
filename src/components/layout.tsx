import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Header } from './header';
import { Footer } from './footer';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Col } from '../common/base';

library.add(fab, fas);

interface Props {
  location?: Location;
  title: string;
  children?: any;
}

const Body = styled.div`
  ${tw`bg-primary text-black mx-auto`}
`;

const Content = styled(Col)`
  ${tw`md:mx-auto`}
  width: 50%;
  @media only screen and (max-width: 1440px) {
    width: 60%;
  }
  @media only screen and (max-width: 1080px) {
    width: 80%;
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ location, title, children }: Props) => {
  return (
    <>
      <Body id="App">
        <Header />
        <Content>{children}</Content>
      </Body>
      <Footer />
    </>
  );
};

export default Layout;
