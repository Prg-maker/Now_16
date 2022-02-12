import styled, { css } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import {GiHamburgerMenu} from 'react-icons/gi'

const styleIconsGlobal = css`
 
`

export const Container = styled.header`

  display: none;
  @media(max-width: 1180px){
    display: unset;
    
  }
`;

export const HamburgerMenu = styled(GiHamburgerMenu)`
`



export const SearchIcon = styled(FiSearch)`
`

export const CartSellIcon = styled(BsCart2)`


`
export const UserIcon = styled(AiOutlineUser)`


`



export const Button = styled.button`

`

export const BoxIcon = styled(AiOutlineCodeSandbox)`

`

