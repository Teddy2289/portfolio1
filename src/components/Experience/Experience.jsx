import React from 'react'
import styled from 'styled-components'
import laravel from './../../assets/laravel.png'
import reactjs from './../../assets/reactjs.png'
import vuejs from './../../assets/vuejs.png'
import php from './../../assets/php.png'
import { Slide } from "react-awesome-reveal";
import { Zoom } from 'react-awesome-reveal';
function Experience() {
    return (
        <Container id="skils">
            <div className="wrapper-kils" >
            <Zoom>
            <h1>
                My <span className="green">Skils</span>
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
        voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
            </Zoom>
            <Slide direction="left">
                <Div>
                    <Column>
                        <Image src={laravel} alt="example image" />
                        <Title>laravel</Title>
                    </Column>
                    <Column>
                        <ProgressBar>
                            <Progress percent={70} color={"#fa523d"}  />
                        </ProgressBar>
                        <span>70%</span>
                    </Column>
                </Div>
            </Slide>
        
            <Slide direction='left'>
                <Div>
                    <Column>
                        <Image src={php} alt="example image" />
                        <Title>PHP</Title>
                    </Column>
                    <Column>
                        <ProgressBar>
                            <Progress percent={80} color={"#3765af"} />
                        </ProgressBar>
                        <span>80%</span>
                    </Column>
                </Div>
            </Slide>

            <Slide direction='right'>
                <Div>
                    <Column>
                        <Image src={reactjs} alt="example image" />
                        <Title>Reactjs</Title>
                    </Column>
                    <Column>
                        <ProgressBar>
                            <Progress percent={60} color={"#4DD0ED"} />
                        </ProgressBar>
                        <span>60%</span>
                    </Column>
                </Div>
            </Slide>
            <Slide direction='left'>
                <Div>
                    <Column>
                        <Image src={vuejs} alt="example image" />
                        <Title>Vuejs</Title>
                    </Column>
                    <Column>
                        <ProgressBar>
                            <Progress percent={40} color={"#40b782"} />
                        </ProgressBar>
                        <span>40%</span>
                    </Column>
                </Div>
            </Slide>

            </div>
        </Container>
    )
}

export default Experience
const Div = styled.div`
  margin-left: 20px;
   margin-right: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 840px) {
    width: 70%;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 70px;
  @media (max-width: 840px) {
    width: 40%;
  }
`;

const Image = styled.img`
  max-width: 50%;
  @media (max-width: 840px) {
    width: 40%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
`;

const ProgressBar = styled.div`
  width: 400px;
  height: 10px;
  background-color: #ddd;
  border-radius: 10px;
`;

const Progress = styled.div`
  height: 100%;
  background-color:${(props) => props.color};
  border-radius: 10px;
  width: ${(props) => props.percent}%;
`;






const Container = styled.div`
  width: 80%;
  max-width: 820px;
  margin: 0 auto;
  padding: 3rem 0;
  height: 100vh;
  display: flex;
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
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
`