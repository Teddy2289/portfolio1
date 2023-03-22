import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Data from "./Data";
import { Slide } from "react-awesome-reveal";
import { Zoom } from 'react-awesome-reveal';


function Expe() {
  return (
    <Container id="expe">
      <Zoom>
        <h1 className="title">
          My <span className="green">Experience</span>
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque
          voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
      </Zoom>
      <Resume>
        <Slide direction="left">
          <Timline >
            {
              Data?.map((val, id) => {
                if (val.category === "job") {
                  return (
                    <Card
                      key={id}
                      icon={val.icon}
                      title={val.title}
                      year={val.year}
                      desc={val.desc}
                    />
                  );
                }
              })
            }
          </Timline>
        </Slide>
        <Slide direction="right">
          <Timline>
            {
              Data?.map((val, id) => {
                if (val.category === "stage") {
                  return (
                    <Card
                      key={id}
                      icon={val.icon}
                      title={val.title}
                      year={val.year}
                      desc={val.desc}
                    />
                  );
                }
              })
            }
          </Timline>
        </Slide>
      </Resume>
    </Container>
  );
}

export default Expe;

const Container = styled.div`
  width: 80%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 3rem 0;
  height: 49vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 840px) {
    width: 90%;
  }
    h1{
        text-align: center;
        margin-bottom: 15px;
        font-size: 1.9rem;
    }
    p{
      width: 32rem;
      margin: 0px auto;
      padding: 1rem 0px;
      font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
  .title {
    position: relative;
  }
  .title::after {
    content: "";
    display: block;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 44%;
    transform: translateX(0%);
    bottom: -11px;
    width: 119px;
  }
`;
const Resume = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.875rem;
  @media (max-width: 840px) {
    width: 83%;
    display:block;
  }
`;

const Timline = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.875rem;
    border-radius: 15px;
    position: relative;
    @media (max-width: 840px) {
      width: 121%;
    margin: 14px auto;
    height: 50vh;
    }

    .icon-graduation,
 .icon-briefcase{
    position: absolute;
    left:-0.4375rem;
    top: 0;
    font-size: var(--h2--font-size);
    color: var(--first-color);
    padding:0.4375rem 0;
    background-color: var(--container-color);}
  
`