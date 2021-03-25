import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const PageStyle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 1920px;
  height: 7091px;
  margin: 0 auto;
  max-width:100%;

  overflow:hidden;

  background: #ffffff;
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A group of software enthusiasts to do projects in great way"
        />
        <meta name="author" content="tech.at.core"></meta>
        <title>tech.at.core</title>
      </Helmet>
      <PageStyle>
        <Header index={0}></Header>
        <main>{children}</main>
        <Footer></Footer>
      </PageStyle>
    </>
  );
};

export default Layout;
