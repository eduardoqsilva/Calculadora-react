import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Wrapper } from "./components/Wrapper"

import { dark } from "./styles/themes/darkTheme"


function App() {

  return (
    <ThemeProvider theme={dark}>
      <Header>
        <Wrapper>
          
        </Wrapper>
      </Header>
    </ThemeProvider>
  )
}

export default App
