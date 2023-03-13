import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { ButtonGrid } from "./components/ButtonGrid"
import { CalculatorScreen } from "./components/CalculatorScreen"
import { Header } from "./components/Header"
import { HeaderThemeSwith } from "./components/ThemeSwitch"
import { Wrapper } from "./components/Wrapper"

import { dark } from "./styles/themes/darkTheme"
import { buttonsConst } from "./Constants/consts"

function App() {

  const [theme, setTheme] = useState<number>(0)
  const [expression, setExpression] = useState('')

  const updateTheme = () => theme < 2 ? setTheme(prev => prev +1) : setTheme(0);

  function handleButtonClick(value:string) {
    setExpression((prev) => prev + value)
  }

  useEffect(() => {
    console.log(expression)
  }, [expression])


  return (
    <ThemeProvider theme={dark}>
      <Header>
        <Wrapper>
          <HeaderThemeSwith 
            theme={theme}
            updateTheme={updateTheme}
          />
          <CalculatorScreen text={'399981,96'}/>

          <ButtonGrid>
            <>
              {buttonsConst.map((i, index) => {
                return (
                  <Button 
                    key={index}
                    click={handleButtonClick}
                    text={i.text} 
                    variation={i?.variation}
                  />
                )
              })}
            </>
          </ButtonGrid>
        </Wrapper>
      </Header>
    </ThemeProvider>
  )
}

export default App
