import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { ButtonGrid } from "./components/ButtonGrid"
import { CalculatorScreen } from "./components/CalculatorScreen"
import { Header } from "./components/Header"
import { HeaderThemeSwith } from "./components/ThemeSwitch"
import { Wrapper } from "./components/Wrapper"
import { evaluate } from "mathjs"

import { dark } from "./styles/themes/darkTheme"
import { buttonsConst } from "./Constants"

function App() {

  const [theme, setTheme] = useState<number>(0)
  const [expression, setExpression] = useState('')

  const updateTheme = () => theme < 2 ? setTheme(prev => prev +1) : setTheme(0);


  function result() {
    return (evaluate(expression).toString())
  }
  function handleButtonClick(value:string) {
    const text = value[0].replace('x', '*')
    console.log(text)
    switch(text) {
      case '=':
        setExpression(result())
        break
      case 'D':
        setExpression((prev) => prev.substring(0, prev.length-1))
        break
      case 'R':
        setExpression('')
        break
      default:
        setExpression((prev) => prev + text)
    }
  }

  // useEffect(() => {
  //   console.log(expression)
  // }, [expression])


  return (
    <ThemeProvider theme={dark}>
      <Header>
        <Wrapper>
          <HeaderThemeSwith 
            theme={theme}
            updateTheme={updateTheme}
          />
          <CalculatorScreen text={expression}/>

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
