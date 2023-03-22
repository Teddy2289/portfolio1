import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <TimeLine>
      <i className={props.icon}></i>
      <span className="timeline_date">{props.year}</span>
      <h3 className="timeline_title">{props.title}</h3>
      <p className="timeline_text">{props.desc}</p>
    </TimeLine>
  );
}

export default Card;

const TimeLine = styled.div`
  position: relative;
  padding-left: 3.125rem;
  padding-bottom: 3.125rem;
  @media (max-width: 840px) {
    width: 90%;
    position: relative;
    padding-left: 3.125rem;
    padding-bottom: 0.125rem;
}
`;