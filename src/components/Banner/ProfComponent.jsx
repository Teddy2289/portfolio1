import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import profif from "./../../assets/profil.png";
import { Slide } from "react-awesome-reveal";

function ProfComponent() {
  return (
    <Container>
      <Text>
        <h4>
          Hello <span className="green"> I'm</span>
        </h4>
        <Slide>
          <h1>Teddy Rinah</h1>
        </Slide>
        <Slide>
          <h3>Developper</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            vitae porro sequi tempore natus vero, rem nostrum molestiae
            laboriosam numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta vitae porro sequi tempore natus vero, rem
            nostrum molestiae laboriosam numquam.
          </p>
        </Slide>
        <button>Let's talk</button>
        <Social>
          <p>Check out my</p>
          <div className="social-icon">
            <span>
              <Link to="#">
                <AiOutlineInstagram />
              </Link>
            </span>
            <span>
              <Link to="https://www.linkedin.com/in/teddy-rinah-ralaivao-nomenjanahary-00b3081ba/" target="_blank" >
                <AiFillLinkedin />
              </Link>
            </span>
            <span>
              <Link to="https://web.facebook.com/teddyrinner.ralaivao/" target="_blank">
                <AiFillFacebook />
              </Link>
            </span>
          </div>
        </Social>
      </Text>
      <Profil>
        <Slide direction="right">
          <img src={profif} alt="profil" />
        </Slide>
      </Profil>
    </Container>
  );
}

export default ProfComponent;
const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  flex: 1;
  h4 {
    font-size: 3rem;
    padding: 1rem 0;
    font-weight: 500;
  }

  h1 {
    font-size: 4rem;
    color: #4dd0ed;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #4dd0ed;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }
  .social-icon {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #4dd0ed;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Profil = styled.div`
  img {
    width: 41rem;
    border-radius: 0px 0px 50% 50%;
    object-fit: cover;
    filter: drop-shadow(rgba(1, 190, 190, 0.435) 0px 10px 10px);
    transition: transform 400ms ease-in-out 0s;
    height: 37rem;
    @media (max-width: 790px) {
      width: 27rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;
