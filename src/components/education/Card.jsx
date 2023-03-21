import React from "react";
import styled from 'styled-components'


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

    TimeLine:last-child{
        padding-bottom: 0;
    }
    
    TimeLine::before{
        content: '';
        width: 1px;
        height: 100%;
        background-color: var(--first-color);
        position: absolute;
        left: .25rem;
        top: 0;
    }

    .timeline_date{
        color: #8b88b1;
        font-size: 14px;
    }
    
    .timeline_title{
    font-size: 20px;
    }
    
    .timeline_text{
        line-height: 1.5;
    }
`