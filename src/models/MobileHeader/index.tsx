import { Container  , SearchIcon , CartSellIcon , BoxIcon , UserIcon , Button , HamburgerMenu} from './styles'
import Logo from '../../assets/logo.png'



export function MobileHeader(){
  return(
    <Container>


      <img src={Logo} alt="Logo now 16" />

      <div className='left'>

     

        


        <div className='icons'>
          <SearchIcon/>
          <CartSellIcon/>
          <UserIcon/> 

          

          <Button>
            <BoxIcon/>try on ar
          </Button>

          <div className='buttonsLinks'>
          <HamburgerMenu/>
          </div>
        </div>

      
      </div>
    </Container>
  )
}