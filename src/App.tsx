import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { HeaderThemeSwith } from "./components/ThemeSwitch"
import { Wrapper } from "./components/Wrapper"

import { dark } from "./styles/themes/darkTheme"


function App() {

  const [theme, setTheme] = useState<number>(0)
  const updateTheme = () => theme < 2 ? setTheme(prev => prev +1) : setTheme(0);

  return (
    <ThemeProvider theme={dark}>
      <Header>
        <Wrapper>
          <HeaderThemeSwith 
            theme={theme}
            updateTheme={updateTheme}
          />
        </Wrapper>
      </Header>
    </ThemeProvider>
  )
}

export default App
