import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Data from "./Data";

function Education() {
  return (
    <Container>
      <h1 className="title">
        My <span className="green">Education</span>
      </h1>
      <Resume className="resume_container grid">
          <div className="timline grid">
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
          </div>

          <div className="timline grid">
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
          </div>
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

.grid{
  display: grid;
}
  .resume_container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.875rem;
  }

  .timline {
    background-color: var(--container-color);
    padding: 1.875rem;
    border-radius: var(--border-radius);
    position: relative;
    box-shadow: var(--shadow);
  }
  .timeline_item {
    position: relative;
    padding-left: 3.125rem;
    padding-bottom: 3.125rem;
  }
  .timeline_item:last-child {
    padding-bottom: 0;
  }

  .timeline_item::before {
    content: "";
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    position: absolute;
    left: 0.25rem;
    top: 0;
  }

  .timline .icon-graduation,
  .timline .icon-briefcase {
    position: absolute;
    left: -0.4375rem;
    top: 0;
    font-size: var(--h2--font-size);
    color: var(--first-color);
    padding: 0.4375rem 0;
    background-color: var(--container-color);
  }
`;
