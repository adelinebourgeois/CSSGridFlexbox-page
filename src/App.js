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
import SecondInfo from "./components/secondInfo/SecondInfo";


function App() {
  return (
    <div className="App">
        <Background>
            <BackgroundLines />
            <LayoutContainer>
                <Navigation />
                <FirstSectionGrid>
                    <div className='video__background' />
                    <Video />
                    <div className='firstSectionGrid__title'>
                        <Title>Ready not to Stop <span className='background__blue'>Talking</span> Design ?</Title>
                    </div>
                    <div className='firstSectionGrid__button'>
                        <Button underline>I want to <span className='bold'>Join now !</span></Button>
                    </div>
                    <div className='firstSectionGrid__a'>
                        <a href='#'>Check the schedule !</a>
                    </div>
                    <div className='firstSectionGrid__info'>
                        <Info title='Agustus 8, Bengkulu'>Lorem ipsum dolor sit amet, consectetur.</Info>
                    </div>
                </FirstSectionGrid>
                <SecondSectionGrid>
                    <div className='secondSectionGrid__title'>
                        <Title>Your luck if you join us now !</Title>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum posuere, malesuada velit id, placerat lectus.</p>
                    <div className='secondSectionGrid__button'>
                        <Button>Join now !</Button>
                    </div>
                </SecondSectionGrid>
                <ThirdSectionGrid>
                    <SecondInfo border title='Certificate'>Nam lectus ligula, porttitor nec nulla eu,</SecondInfo>
                    <SecondInfo border title='Material Book'>imperdiet pellentesque nisl. Curabitur porttitor leo vitae risus venenatis auctor.</SecondInfo>
                    <SecondInfo border title='Our mission'>Aenean quam sem, condimentum condimentum lorem eu.</SecondInfo>
                </ThirdSectionGrid>
            </LayoutContainer>
        </Background>
    </div>
  );
}

export default App;
