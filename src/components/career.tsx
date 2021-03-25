import React, { Component } from "react";
import Layout from "./layout";
import styled from "@emotion/styled";
import Title from "./common/title";
import { Link } from "gatsby";

const valuepath = require("../images/value.svg") as string;
const tickpath = require("../images/tick.svg") as string;
const imagepath = require("../images/image.svg") as string;
const Jay = require("../images/team/Jay.png") as string;
const Prasad = require("../images/team/prasad.jpg") as string;
const Raju = require("../images/team/RajuSidda.jpg") as string;
const Chetan = require("../images/team/ChetanBandari.png") as string;
const Vijay = require("../images/team/VijayPratap.jpg") as string;
const Vandana = require("../images/team/VandanaKumari.jpg") as string;
const Shiva = require("../images/team/ShivaSai.jpg") as string;
const Sushma = require("../images/team/Sushma.jpg") as string;
const Ravalika = require("../images/team/RavalikaKesari.jpeg") as string;
const Preethi = require("../images/team/Preethi.jpg") as string;
const Vivek = require("../images/team/Vivek.jpg") as string;

const BgShade = styled.div`
  position: absolute;
  width: 1920px;
  height: 429px;
  left: 0px;
  top: 0px;

  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
`;

const HeadTitle = styled(Title)`
  position: absolute;
  width: 202px;
  height: 65px;
  left: 859px;
  top: 247px;

  color: #ffffff;
`;

const WhyContainer = styled.div`
  position: absolute;
  width: 817px;
  height: 534px;
  left: 552px;
  top: 597px;
`;

const WhyTitle = styled(Title)`
  position: absolute;
  width: 817px;
  height: 534px;
  left: 172px;
  top: 0px;

  color: #000000;
`;

const Desc = styled.p`
  position: absolute;
  width: 817px;
  height: 333px;
  left: 0px;
  top: 201px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  color: #000000;
`;

const Break = styled.br``;

const ValuesContainer = styled.div`
  position: absolute;
  width: 1920px;
  height: 945px;
  left: 0px;
  top: 1286px;
`;

const ValueTitle = styled(Title)`
  position: absolute;
  width: 276px;
  height: 64px;
  left: 822px;
  top: 183px;
  color: #000000;
`;

type ValueProps = {
  left: string;
};

const ValueImg = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 455px;
  left: ${(props: ValueProps) => props.left};
`;

type ValueoneProps = {
  width: string;
  left: string;
};

const ValueOne = styled.div`
  position: absolute;
  width: ${(props: ValueoneProps) => props.width};
  height: 72.46px;
  left: ${(props: ValueoneProps) => props.left};
  top: 564.87px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
`;

type ValuedescProps = {
  left: string;
};

const ValueDesc = styled.p`
  position: absolute;
  width: 437px;
  height: 81.35px;
  left: ${(props: ValuedescProps) => props.left};
  top: 683.25px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;

  /* or 160% */

  color: #000000;
`;

const TechContainer = styled.div`
  position: absolute;
  width: 1661px;
  height: 412px;
  left: 146px;
  top: 2415px;
`;

const TechTitle = styled.div`
  position: absolute;
  width: 478px;
  height: 64px;
  left: 591px;
  top: 0px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 50px;
  color: #000000;
`;

type TickProps = {
  left: string;
  top: string;
};

const TechTick = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  left: ${(props: TickProps) => props.left};
  top: ${(props: TickProps) => props.top};
`;

type TickdescProps = {
  left: string;
  top: string;
};

const TechDesc = styled.div`
  position: absolute;
  width: 226px;
  height: 56px;
  left: ${(props: TickdescProps) => props.left};
  top: ${(props: TickdescProps) => props.top};

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
`;

const TeamContainer = styled.div`
  position: absolute;
  width: 1920px;
  height: 2087px;
  left: 0px;
  top: 3046px;
  background: #e5e5e5;
`;

const TeamTitle = styled.div`
  position: absolute;
  width: 315px;
  height: 63.56px;
  left: 780px;
  top: 183.02px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 50px;
  /* or 93% */

  color: #000000;
`;

type TeamProps = {
  left: string;
  top: string;
};

const TeamMember = styled.img`
  position: absolute;
  width: 368px;
  height: 342px;
  left: ${(props: TeamProps) => props.left};
  top: ${(props: TeamProps) => props.top};
  background: #ffffff;
`;

type NameProps = {
  left: string;
  top: string;
};

const MemberName = styled.div`
  position: absolute;
  width: 226px;
  height: 72.46px;
  left: ${(props: NameProps) => props.left};
  top: ${(props: NameProps) => props.top};

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
  color: #363636;
`;

type TechnameProps = {
  left: string;
  top: string;
};

const TechName = styled.div`
  position: absolute;
  width: 152px;
  height: 38px;
  left: ${(props: TechnameProps) => props.left};
  top: ${(props: TechnameProps) => props.top};

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`;

const BlogContainer = styled.div`
  position: absolute;
  width: 1641px;
  height: 979px;
  left: 140px;
  top: 5319px;
`;

type BlogProps = {
  left: string;
};
const SubBlog = styled.div`
  position: absolute;
  width: 791px;
  height: 718px;
  left: ${(props: BlogProps) => props.left};
  top: 261px;
`;

const Group = styled.div`
  position: absolute;
  width: 680px;
  height: 285px;
  left: 55px;
  top: 57px;

  background: #1e3658;
  border: 1px solid #1e3658;
  box-sizing: border-box;
`;

const ImageLogo = styled.img`
  position: absolute;
  width: 506px;
  height: 275px;
  left: 76px;
  top: 5px;
`;

const BlogTitle = styled.div`
  position: absolute;
  width: 640px;
  height: 94px;
  left: 55px;
  top: 377px;

  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 46px;
  color: #363636;
`;

const Time = styled.div`
  position: absolute;
  width: 152px;
  height: 38px;
  left: 55px;
  top: 508px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`;

const BlogMainTitle = styled(Title)`
  position: absolute;
  width: 128px;
  height: 64px;
  left: 756px;
  top: 0px;

  color: #000000;
`;

const BlogName = styled.div`
  position: absolute;
  width: 253px;
  height: 63px;
  left: 55px;
  top: 579px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;

const Department = styled.div`
  position: absolute;
  width: 152px;
  height: 38px;
  left: 55px;
  top: 620px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`;

export default class career extends Component {
  render() {
    return (
      <Layout>
        <BgShade>
          <HeadTitle>Careers</HeadTitle>
        </BgShade>
        <WhyContainer>
          <WhyTitle id="title">Why&nbsp;tech.at.core&nbsp;?</WhyTitle>
          <Desc>
            We are passionate Software specialist across various disciplines. We
            value quality of work and challenge continuous learning throughout
            the our journey.
            <Break></Break>
            <Break></Break>
            At tech.at.core, we believe human-first approach and you will get
            all the freedom and flexibility to work in your style and technology
            experiments.
            <Break></Break>
            <Break></Break>
            We help with the right mentorship program to have a right career
            path, we provide continuousone-to-one feedback sessions with your
            team and mentor.
            <Break></Break>
            <Break></Break>
            We believe, at tech.at.core you never get bored with the work and
            challenges will have.
          </Desc>
        </WhyContainer>
        <ValuesContainer>
          <ValueTitle>Our values</ValueTitle>
          <ValueImg src={valuepath} left="146px"></ValueImg>
          <ValueOne width="226px" left="146px">
            Being Human
          </ValueOne>
          <ValueDesc left="146px">
            We are human-first approach company and everything comes next.
          </ValueDesc>
          <ValueImg src={valuepath} left="720px"></ValueImg>
          <ValueOne width="264px" left="720px">
            Unblock people
          </ValueOne>
          <ValueDesc left="720px">
            Helping the team or people around is always comes as a top priority
          </ValueDesc>
          <ValueImg src={valuepath} left="1370px"></ValueImg>
          <ValueOne width="437px" left="1370px">
            Lead by example mindset
          </ValueOne>
          <ValueDesc left="1370px">
            Inspire everyone and set the trend and show how to.
          </ValueDesc>
        </ValuesContainer>
        <TechContainer>
          <TechTitle>Life at tech.at.core</TechTitle>
          <TechTick src={tickpath} left="0px" top="232px"></TechTick>
          <TechDesc left="72px" top="232px">
            Being&nbsp;Human
          </TechDesc>
          <TechTick src={tickpath} left="557px" top="232px"></TechTick>
          <TechDesc left="629px" top="232px">
            Unblock&nbsp;people
          </TechDesc>
          <TechTick src={tickpath} left="1152px" top="232px"></TechTick>
          <TechDesc left="1224px" top="232px">
            Lead&nbsp;by&nbsp;example&nbsp;mindset
          </TechDesc>
          <TechTick src={tickpath} left="0px" top="364px"></TechTick>
          <TechDesc left="72px" top="363px">
            Flexible&nbsp;working&nbsp;hours
          </TechDesc>
          <TechTick src={tickpath} left="557px" top="364px"></TechTick>
          <TechDesc left="629px" top="364px">
            Flexible&nbsp;working&nbsp;machine
          </TechDesc>
        </TechContainer>
        <TeamContainer>
          <TeamTitle>Our team</TeamTitle>
          <TeamMember left="136px" top="423px" src={Jay}></TeamMember>
          <MemberName left="136px" top="789px">
            Jayasagar&nbsp;Jagirapu
          </MemberName>
          <TechName left="136px" top="838px">
            Founder
          </TechName>
          <TeamMember left="562px" top="423px" src={Prasad}></TeamMember>
          <MemberName left="562px" top="789px">
            Prasad&nbsp;Jagirapu
          </MemberName>
          <TechName left="562px" top="838px">
            Administration&nbsp;Head
          </TechName>
          <TeamMember left="988px" top="423px" src={Raju}></TeamMember>
          <MemberName left="988px" top="789px">
            Raju&nbsp;Sidda
          </MemberName>
          <TechName left="988px" top="838px">
            Senior&nbsp;Software&nbsp;Engineer
          </TechName>
          <TeamMember left="1414px" top="423px" src={Chetan}></TeamMember>
          <MemberName left="1414px" top="789px">
            Cheatn&nbsp;Kumar&nbsp;Bandari
          </MemberName>
          <TechName left="1414px" top="838px">
            DevOps&nbsp;Engineer
          </TechName>
          <TeamMember left="136px" top="939px" src={Vandana}></TeamMember>
          <MemberName left="136px" top="1305px">
            Vandana&nbsp;Kumari
          </MemberName>
          <TechName left="136px" top="1354px">
            QA&nbsp;Engineer
          </TechName>
          <TeamMember left="562px" top="939px" src={Vijay}></TeamMember>
          <MemberName left="562px" top="1305px">
            Vijay&nbsp;Pratap
          </MemberName>
          <TechName left="562px" top="1354px">
            Software&nbsp;Engineer
          </TechName>
          <TeamMember left="988px" top="939px" src={Sushma}></TeamMember>
          <MemberName left="988px" top="1305px">
            Sushma&nbsp;Boddu
          </MemberName>
          <TechName left="988px" top="1354px">
            Software&nbsp;Engineer
          </TechName>
          <TeamMember left="1414px" top="939px" src={Shiva}></TeamMember>
          <MemberName left="1414px" top="1305px">
            ShivaSai&nbsp;Dikonda
          </MemberName>
          <TechName left="1414px" top="1354px">
            Software&nbsp;Engineer
          </TechName>
          <TeamMember left="136px" top="1459px" src={Ravalika}></TeamMember>
          <MemberName left="136px" top="1825px">
            Ravalika&nbsp;Kesari
          </MemberName>
          <TechName left="136px" top="1874px">
            Software&nbsp;Engineer
          </TechName>
          <TeamMember left="562px" top="1459px" src={Vivek} alt={"Vivek's pic"} ></TeamMember>
          <MemberName left="562px" top="1825px">
            Vivek&nbsp;Tej
          </MemberName>
          <TechName left="562px" top="1874px">
            Software&nbsp;Intern
          </TechName>
          <TeamMember left="988px" top="1459px" src={Preethi}></TeamMember>
          <MemberName left="988px" top="1825px">
            Preethi&nbsp;Bandari
          </MemberName>
          <TechName left="988px" top="1874px">
          Software&nbsp;Intern
          </TechName>
        </TeamContainer>
        

        <BlogContainer>
          <BlogMainTitle>Blog</BlogMainTitle>
          <SubBlog left="0px">
            <Group>
              <ImageLogo src={imagepath}></ImageLogo>
            </Group>
            <BlogTitle><Link to={"/blog"}>De-Risk your Products with UX Design Experts </Link></BlogTitle>
            <Time>19 Aug 2020</Time>
            <BlogName>Jaya Sagar</BlogName>
            <Department>Technical&nbsp;Department</Department>
          </SubBlog>
          <SubBlog left="850px">
            <Group>
              <ImageLogo src={imagepath}></ImageLogo>
            </Group>
            <BlogTitle><Link to={"/blog"}>De-Risk your Products with UX Design Experts </Link></BlogTitle>
            <Time>19 Aug 2020</Time>
            <BlogName>Jaya Sagar</BlogName>
            <Department>Technical&nbsp;Department</Department>
          </SubBlog>
        </BlogContainer>
      </Layout>
    );
  }
}
