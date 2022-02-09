import React from 'react';

import Logo from '../../assets/logo.png'

import { Container , ButtonLink  , SearchIcon , CartSellIcon , BoxIcon , UserIcon , Button} from './styles'

export function Header(){
  return(
    <Container>

      <img src={Logo} alt="Logo now 16" />

      <div className='left'>

        <div className='buttonsLinks'>
          <ButtonLink >Girls</ButtonLink>
          <ButtonLink >Boys</ButtonLink>
          <ButtonLink >Everyone</ButtonLink>
          <ButtonLink>Accessories</ButtonLink>
        </div>



        <div className='icons'>
          <SearchIcon/>
          <CartSellIcon/>
          <UserIcon/> 
          <Button>
            <BoxIcon/>try on ar
          </Button>
        </div>
       
      </div>

    </Container>
  )
}

