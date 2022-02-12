
import  {DesktopHeader}  from './models/DesktopHeader'
import  {MobileHeader}  from './models/MobileHeader'
import  {Main}  from './models/Main'
import {GlobalStyle} from './styles/App'

function App() {

  return (
    <>
      <GlobalStyle/>


      <DesktopHeader/>
      <MobileHeader/>


      <div>
        <Main/>
      </div>

      
    </>  
  )
}

export default App
