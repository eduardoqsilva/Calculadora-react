import React, { ChangeEvent, useEffect, useRef } from "react";
import { CalculatorScreenStyled } from "./calculatorScreen.Styled";

interface CalculatorScreenType {
  text: string
}

export function CalculatorScreen({ text }:CalculatorScreenType) {
  
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current
    if(div) {
      div.scrollLeft = div.scrollWidth - div.clientWidth
    }
  },[text])

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    const container = e.currentTarget
    container.scrollLeft += e.deltaY * 0.1
  }


  return(
    <CalculatorScreenStyled>
      <div ref={divRef} onWheel={handleScroll}>
        {text}
      </div>
    </CalculatorScreenStyled>
  )
}