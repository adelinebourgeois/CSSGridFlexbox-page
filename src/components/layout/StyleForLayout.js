import styled from 'styled-components';
import {colors, size} from "../../utilities/variables";

export const Background = styled.div`
    background: linear-gradient(to right, ${colors.white} 50%, ${colors.greyBackground} 50%);
    height: 100vh;
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
    background: #babbbf;
`
export const FirstSectionGrid = styled.section`
    display: grid;
    grid: 1fr/ 55% 25% 20% 1fr;
    grid-template-rows: 198px 90px 98px;
    padding-bottom: 130px;
`
export const SecondSectionGrid = styled(FirstSectionGrid)`
    grid-template-rows: 70px 40px;
    padding-bottom: 67px;
`

export const ThirdSectionGrid = styled(FirstSectionGrid)`
    grid-template-rows: auto;
    padding-bottom: 0;
`