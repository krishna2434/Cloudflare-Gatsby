import React, { Component } from "react";
import styled from "@emotion/styled";
import Title from "./common/title";
import { Link } from "gatsby";

const LogoPath = require("../images/logo_tech.svg") as string;
const PolygonPath = require("../images/Polygon2.svg") as string;

const Container = styled.div`
  position: absolute;
  width: 1920px;
  height: 741px;
  left: 0px;
  top: 6350px;

  background: #0078d7;
`;

const ContainerTitle = styled(Title)`
  position: absolute;
  width: 309px;
  height: 50px;
  left: 801px;
  top: 150px;

  color: #ffffff;
`;

const TitleDesc = styled.p`
  position: absolute;
  width: 590px;
  height: 50px;
  left: 665px;
  top: 200px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 50px;

  color: #ffffff;
`;

const Mail = styled.a`
  position: absolute;
  width: 236px;
  height: 50px;
  left: 842px;
  top: 286px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 50px;

  color: #ffffff;
`;

const Logo = styled.img`
  position: absolute;
  width: 250.31px;
  height: 44px;
  left: 826px;
  top: 486px;
`;

const RightsText = styled.p`
  position: absolute;
  width: 295px;
  height: 20px;
  left: 808px;
  top: 546px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-align: center;

  color: #cecece;
`;

const GoTop = styled.div`
  position: absolute;
  width: 42px;
  height: 81px;
  left: 1816px;
  top: 16px;
`;

const Top = styled.p`
  position: absolute;
  width: 35px;
  height: 41px;
  left: 6px;
  top: 0px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 50px;
  /* or 357% */

  color: #e5e5e5;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  left: 0px;
  top: 39px;

  background: #ffffff;
  border-radius: 6px;
`;

const Polygon = styled.img`
  position: absolute;
  width: 24px;
  height: 24x;
  left: 9px;
  top: 9px;

  border-radius: 2px;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <GoTop>
          <Top>Top</Top>
          <Link to={"#bContent"}>
            <Rectangle>
              <Polygon src={PolygonPath}></Polygon>
            </Rectangle>
          </Link>
        </GoTop>
        <ContainerTitle>Get in touch</ContainerTitle>
        <TitleDesc>
          If you'd like to know more about what we do, do not hesitate to reach
          out.
        </TitleDesc>
        <Mail href={"mailto:hello@techatcore.com"}>hello@techatcore.com</Mail>
        <Logo src={LogoPath}></Logo>
        <RightsText>
          ©2020 tech.at.core. All Rights Reserved. Privacy Policy
        </RightsText>
      </Container>
    );
  }
}
