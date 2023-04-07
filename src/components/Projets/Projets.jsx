import React from 'react'
import SliderComp from './Slider';
import styled from 'styled-components'
import { Zoom } from 'react-awesome-reveal';
function Projets() {
  return (
    <Container id='portfolio'>
    <Zoom>
      <h1 className="title">Recent<span className="green">Projects</span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
            voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
    </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  )
}

export default Projets

const Container = styled.div`
  width: 80%;
  max-width: 968px;
  margin: 0 auto;
  padding: 3rem 0;
  height: 100vh;
  justify-content: center;
  align-items: center;
    @media(max-width: 840px){
        width: 90%;
        margin-top: 197px;
        height: 100vh;
    }
    h1 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.9rem;
    margin-top: 54px;
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
const Slide = styled.div``