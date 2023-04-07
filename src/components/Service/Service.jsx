import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

function Service() {
  return (
    <Container id="service">
      <Zoom>
        <h1 className="title">
          My <span className="green">services</span>
        </h1>
        <h1>What I Do</h1>
      </Zoom>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"ui/ux designer"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"graphic designer"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"web designer"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
      </Cards>
    </Container>
  );
}

export default Service;
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  height:100vh;
  @media (max-width: 840px) {
    width: 90%;
    margin-top: 192px;
    padding: 1rem;
  }

  .title {
    text-align: center;
    margin-bottom: 15px;
    padding-top: 1rem;
    @media (max-width: 840px) {
      text-align: center;
      margin-bottom: -4px;
      padding-top: 4rem;
    }
  }
  h1 {
    text-align: center;
    margin-bottom: 15px;
    padding-top: 1rem;
    @media (max-width: 840px) {
      text-align: center;
      margin-bottom: 0px;
      padding-top: 1rem;
      margin-top: -16px;
    }
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
