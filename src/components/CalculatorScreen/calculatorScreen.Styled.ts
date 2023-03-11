import styled from "styled-components";

export const CalculatorScreenStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.screenColors[0]};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: end;
  padding: 1rem;

  font-family: 'Popins', sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.screenColors[1]};
  font-size: 3rem;

  & div {
    max-width: 100%;
    max-height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    user-select: none;
    scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
  }
`