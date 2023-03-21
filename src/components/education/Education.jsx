import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Data from "./Data";
import {FaGraduationCap} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'


function Education() {
  return (
    <Container>
      <h1 className="title">
        My <span className="green">Education</span>
      </h1>
      <Resume>
          <Timline >
            {Data.map((val, id) => {
              if (val.category === "education") {
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
            })}
          </Timline>

          <Timline>
            {Data.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
            })}
          </Timline>
        </Resume>
    </Container>
  );
}

export default Education;

const Container = styled.div`

  padding-left: 15px;
  padding-right: 15px;
  margin:0 auto;
  width: 80%;
  max-width: 820px;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 1.9rem;
  }
  .title {
    position: relative;
  }
  .title::after {
    content: "";
    display: block;
    height: 7px;
    background-color: white;
    position: absolute;
    left: 41%;
    transform: translateX(0%);
    bottom: -11px;
    width: 153px;
  }
  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
const Resume = styled.div`


  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.875rem;
`;

const Timline = styled.div`
   background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.875rem;
    border-radius: 15px;
    position: relative;
`