import styled from 'styled-components';
import {colors, size} from "../../utilities/variables";

export const Background = styled.div`
    background: linear-gradient(to right, ${colors.white} 50%, ${colors.greyBackground} 50%);
`

export const LayoutContainer = styled.div`
    max-width: ${size.layoutWidthMax};
    margin: 0 auto;
`

export const StyledBackgroundLines = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 10px;
    pointer-events: none;
}
`

export const BackgroundLinesContainer = styled.div`
    display: grid;
    grid: 1fr/ 55% 25% 20% 1fr;
    position: relative;
    max-width: ${size.layoutWidthMax};
    height: 100%;
    margin: 0 auto;
`

export const VerticalLine = styled.div`
    width: 1px;
    background: ${colors.lines};
`
export const FirstSectionGrid = styled.section`
    display: grid;
    grid: 1fr/ 50% 33% 17% 1fr;
    grid-template-rows: 199px 87px 94px;
    padding-bottom: 130px;
    position: relative;
    & div.video__background {
        background-color: ${colors.greyLight};
        width: 157px;
        position: absolute;
        height: 157px;
        left: -25px;
        top: 10px;
    }
    & .firstSectionGrid__title {
        padding-left: 40px;
        width: 95%;
        grid-column: 2 / span 2;
    }
    & .firstSectionGrid__button {
        grid-column: 3;
        & button {
            padding: 27px 30px;
        }
    }
    & .firstSectionGrid__a {
        grid-row: 3;
        grid-column: 1;
        align-items: center;
        display: grid;
        justify-content: flex-start;
        padding-left: 34px;
        width: 30%;
        & a {
          color: ${colors.blue};
          font-weight: 600;
          font-size: 1.4rem;
        }
    }    
    & .firstSectionGrid__info {
        grid-row: 3;
        grid-column: 2;
        & div {
         padding: 16px 30px;
        }
    }
`
export const SecondSectionGrid = styled(FirstSectionGrid)`
    grid-template-rows: 40px 40px;
    grid-template-columns: 29% 1fr;
    grid-column-gap: 203px;
    padding-bottom: 67px;
    grid-row-gap: 30px;
    & .secondSectionGrid__title {
        grid-row: 1 / span 2;
        & h2 {
            font-size: 3rem;
        }
    }
    & .secondSectionGrid__button {
        width: 110px;
        & button {
            padding: 10px;
        }
    }
    & > p {
        font-size: 1.2rem;
        text-align: start;
    }        
`

export const ThirdSectionGrid = styled(FirstSectionGrid)`
    grid-template-rows: auto;
    grid: 1fr/ 50% 30% 1fr;
    padding-bottom: 18px;
    & div p {
        padding-left: 15px;
        width: 65%;
    }
`