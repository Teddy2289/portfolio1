import React from "react";
import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Education from "./components/education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Projets from "./components/Projets/Projets";
import Service from "./components/Service/Service";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent/>
      </Banner>
      <Education/>
      <Service/>
      <Experience/>
      <Projets/>
     <BannerFooter>
     <Footer/>
     </BannerFooter>
    </Container>
  );
}

export default App;
const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const BannerFooter = styled.div`
 background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 50vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;
