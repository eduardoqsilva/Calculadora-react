import { WrapperThemeStyled } from "./themeSwitch.styled";

interface ThemeSwithType {
  
}

export function ThemeSwith({}) {
  return (
    <WrapperThemeStyled>
      <h2>calc</h2>
      <div className="wrapper">
       <div className="swithWrapper">
         <span>theme</span>
         <div className="swith">
           <span>1 2 3</span>
           <button></button>
         </div>
       </div>

      </div>
    </WrapperThemeStyled>
  )
}