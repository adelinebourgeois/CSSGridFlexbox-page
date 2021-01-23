import React from "react";
import './App.css';

import {
    Background, FirstSectionGrid,
    LayoutContainer,
    SecondSectionGrid,
    ThirdSectionGrid
} from "./components/layout/StyleForLayout";
import Navigation from "./components/navigation/Navigation";
import BackgroundLines from "./components/layout/BackgroundLines";
import Video from "./components/video/Video";
import Title from "./components/title/Title";
import Button from "./components/button/Button";
import Info from "./components/info/Info";


function App() {
  return (
    <div className="App">
        <Background>
            <LayoutContainer>
                <BackgroundLines />
                <Navigation />
                <FirstSectionGrid>
                    <Video />
                    <Title>Ready not to Stop <span className='background__blue'>Talking</span> Design ?</Title>
                    <Button underline>I want to Join now !</Button>
                    <Info background title='Agustus 8, Bengkulu'>Lorem ipsum dolor sit amet, consectetur.</Info>
                </FirstSectionGrid>
                <SecondSectionGrid>
                    <Title>Your luck if you join us now !</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum posuere, malesuada velit id, placerat lectus.</p>
                    <Button>Join now !</Button>
                </SecondSectionGrid>
                <ThirdSectionGrid>
                    <Info border title='Certificate'>Nam lectus ligula, porttitor nec nulla eu,</Info>
                    <Info border title='Material Book'>imperdiet pellentesque nisl. Curabitur porttitor leo vitae risus venenatis auctor.</Info>
                    <Info border title='Our Mission'>Aenean quam sem, condimentum condimentum lorem eu, maximus dapibus magna.</Info>
                </ThirdSectionGrid>
            </LayoutContainer>
        </Background>
    </div>
  );
}

export default App;
