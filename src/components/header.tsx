import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Button from "./common/button";

const LogoPath = require("../images/logo_tech.svg") as string;

const TopNav = styled.header`
  position: absolute;
  width: 1640px;
  height: 50px;
  left: 138px;
  top: 82px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;
const LogoLink = styled(Link)`
  margin-right: auto;
`;

const LogoTech = styled.img`
  // position: absolute;
  width: 250.31px;
  height: 44px;
  // left: 138px;
  // top: 85px;
`;

const MenuContainer = styled.nav``;

const MenuItem = styled(Link)`
  &.active {
    background-color: #ffffff;
  }
  padding-left: 17.02px;
`;

type stateProps = {
  bgColor: string;
};
type Props = {
  index: number;
};
class Header extends Component<Props, stateProps> {
  constructor(props: Props) {
    super(props);
    this.state = { bgColor: "#0078D7" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ bgColor: "rgba(0,0,0,0)" });
  }
  render() {
    return (
      <TopNav>
        <LogoLink to={"/"}>
          <LogoTech src={LogoPath} alt="tech.at.core" />
        </LogoLink>
        <MenuContainer>
          <MenuItem to={"/"}>
            <Button
              height="48px"
              width="120.15px"
              bgColor={this.state.bgColor}
              onClick={() => this.handleClick}
            >
              HOME
            </Button>
          </MenuItem>
          <MenuItem to={"/careers"}>
            <Button
              height="48px"
              width="140.17px"
              bgColor={this.state.bgColor}
              onClick={() => this.handleClick}
            >
              CAREERS
            </Button>
          </MenuItem>
        </MenuContainer>
      </TopNav>
    );
  }
}

export default Header;
