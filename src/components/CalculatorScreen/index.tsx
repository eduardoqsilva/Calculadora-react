import { CalculatorScreenStyled } from "./calculatorScreen.Styled";

interface CalculatorScreenType {
  text: string
}

export function CalculatorScreen({ text }:CalculatorScreenType) {


  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    const container = e.currentTarget
    container.scrollLeft += e.deltaY * 0.1
  }

  return(
    <CalculatorScreenStyled>
      <div onWheel={handleScroll}>
        {text}
      </div>
    </CalculatorScreenStyled>
  )
}