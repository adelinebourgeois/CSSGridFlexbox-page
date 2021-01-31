import styled from 'styled-components';
import {colors, size} from "../../utilities/variables";

export const BackgroundGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(4, min-content);
    grid-template-columns: [margin-start] minmax(6rem, 1fr) [margin-end center-start] repeat(${size.layoutCol}, [col-start] minmax(min-content, 14rem) [col-end]) [center-end margin-start] minmax(6rem, 1fr) [margin-end];
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 32%;
      right: 0;
      background: ${colors.greyBackground};
      z-index:-1;
  }
`

export const StyledBackgroundLines = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}
`

export const BackgroundLinesContainer = styled.div`
    display: grid;
    grid-column: center-start/center-end;
    grid-row: 1/ -1;
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;
`

export const VerticalLine = styled.div`
    grid-row: 1/ -1;
    width: 1px;
    background: ${colors.lines};
`

export const FirstSectionGrid = styled.section`
    display: grid;
    grid-column: center-start / center-end;
    grid-template-rows: minmax(min-content, 20rem) repeat(2, minmax(min-content, 8.8rem));
    grid-template-columns: minmax(22rem, 1fr) 1fr 12rem;
    grid-row: 2;
    margin-bottom: 13rem;
    position: relative;
    & .firstSectionGrid__a {
        grid-row: 3;
        grid-column: 1;
        align-items: center;
        display: flex;
        padding-left: 3.4rem;
        & a {
          color: ${colors.blue};
          font-weight: 600;
          font-size: 1.4rem;
        }
    }
`

export const SecondSectionGrid = styled(FirstSectionGrid)`
    grid-template-rows: repeat(2, minmax(min-content, 4rem));
    grid-template-columns: minmax(min-content, 20rem) 1fr;
    grid-column-gap: 11%;
    grid-row: 3;
    margin-bottom: 6.7rem;
    grid-row-gap: 3rem;
    & > p {
        font-size: 1.2rem;
    }        
`

export const ThirdSectionGrid = styled(FirstSectionGrid)`
    grid-template-columns: repeat(auto-fit, minmax(22rem,1fr));
    grid-row-gap: 6rem;
    grid-template-rows: auto;
    margin-bottom: 1.8rem;
    grid-row: 4;
`