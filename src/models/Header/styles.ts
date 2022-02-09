import styled, { css } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const styleIconsGlobal = css`
  cursor: pointer;
  margin-right: 18px;
`

export const Container = styled.header`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 150px;

  .left{
    display: flex;
    align-items: center;
    padding-top: 10px;
  }

  .buttonsLinks{
    margin-right:50px;
  }

 
`;

export const ButtonLink = styled.button`
  background: none;
  border:none;
  margin-left: 50px;
  font-size: 18px;
  cursor:pointer;
`;



export const SearchIcon = styled(FiSearch)`
  ${styleIconsGlobal}
`

export const CartSellIcon = styled(BsCart2)`
  ${styleIconsGlobal}


`
export const UserIcon = styled(AiOutlineUser)`
  ${styleIconsGlobal}


`



export const Button = styled.button`
  padding: 10px  20px ;
  background: #000;
  color:#fff;
  border: none;
  border-radius:36px ;
  cursor: pointer;

  &:hover{
    filter: brightness(0.8);
  }
`

export const BoxIcon = styled(AiOutlineCodeSandbox)`
  margin-right: 10px ;
  font-size:20px;
  position:relative;
  top:3px;
`

