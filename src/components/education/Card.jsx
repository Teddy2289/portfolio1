import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <TimeLine className="timeline_item">
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
  padding-left: 1.125rem;
  padding-bottom: 0.125rem;
  @media (max-width: 840px) {
    width: 90%;
    position: relative;
    padding-left: 3.125rem;
    padding-bottom: 0.125rem;
  }

.timeline_item:last-child{
    padding-bottom: 0;
}

.timeline_item::before{
    content: '';
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    position: absolute;
    left: .25rem;
    top: 0;
}

.timline .icon-graduation,
.timline .icon-briefcase{
    position: absolute;
    left:-0.4375rem;
    top: 0;
    font-size: var(--h2--font-size);
    color: var(--first-color);
    padding:0.4375rem 0;
    background-color: var(--container-color);
}
.timeline_date{
    color: #8b88b1;
    font-size: var(--small-font-size);
}

.timeline_title{
font-size: var(--h3--font-size);
}

.timeline_text{
    line-height: 1.5;
}
`;

