import React from "react";

import {
    BackgroundGrid, FirstSectionGrid,
    SecondSectionGrid,
    ThirdSectionGrid
} from "./components/layout/StyleForLayout";
import Navigation from "./components/navigation/Navigation";
import BackgroundLines from "./components/layout/BackgroundLines";
import Video from "./components/video/Video";
import Info from "./components/ui/info/Info";
import SecondInfo from "./components/secondInfo/SecondInfo";
import BackgroundBlue from "./components/ui/backgroundBlue/BackgroundBlue";
import {FirstSectionTitle, SecondSectionTitle} from "./components/ui/title/StyleForTitle";
import {FirstSectionButton, SecondSectionButton} from "./components/ui/button/StyleForButton";


function App() {
  return (
    <div className="App">
        <BackgroundGrid>
            <BackgroundLines />
            <Navigation />
            <FirstSectionGrid>
                <Video background />
                <FirstSectionTitle>Ready not to Stop <BackgroundBlue>Talking</BackgroundBlue> Design ?</FirstSectionTitle>
                <FirstSectionButton underline padding='0 3rem'>I want to <span className='bold'>Join now !</span></FirstSectionButton>
                <div className='firstSectionGrid__a'>
                    <a href='#'>Check the schedule !</a>
                </div>
                <Info title='Agustus 8, Bengkulu'>Lorem ipsum dolor sit amet, consectetur.</Info>
            </FirstSectionGrid>
            <SecondSectionGrid>
                <SecondSectionTitle>Your luck if you join us now !</SecondSectionTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ipsum posuere, malesuada velit id, placerat lectus.</p>
                <SecondSectionButton>Join now !</SecondSectionButton>
            </SecondSectionGrid>
            <ThirdSectionGrid>
                <SecondInfo border title='Certificate'>Nam lectus ligula, porttitor nec nulla eu,</SecondInfo>
                <SecondInfo border title='Material Book'>imperdiet pellentesque nisl. Curabitur porttitor leo vitae risus venenatis auctor.</SecondInfo>
                <SecondInfo border title='Our mission'>Aenean quam sem, condimentum condimentum lorem eu.</SecondInfo>
            </ThirdSectionGrid>
        </BackgroundGrid>
    </div>
  );
}

export default App;
