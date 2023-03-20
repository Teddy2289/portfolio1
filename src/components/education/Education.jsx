import React from 'react'
import styled from 'styled-components'

function Education() {
  return (
    <Container><h1 className='title'>
    My <span className="green">Education</span>
</h1></Container>
  )
}

export default Education

const Container = styled.div`
      width: 80%;
  max-width: 820px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
    h1{
        text-align: center;
        margin-bottom: 15px;
        font-size: 1.9rem;
    }
    .title{
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
    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
`