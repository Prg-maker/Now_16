import styled from "styled-components";
import {AiOutlineArrowRight} from 'react-icons/ai' 

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .left{
    z-index: 1;
    position: relative;
    right: 100px;
    display: flex;
    flex-direction: column;
  }

  .right{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 300px;
    >img:nth-child(1){
      position: absolute;
      width: 500px;
    }


    >img:nth-child(2){
      position: relative;
     left: 450px;
      
    }
  
  }
  
`

export const TextHard = styled.h1`
  font-weight: normal;
  font-size: 75px;
  position: absolute;
  bottom: 30px;
` 
export const TextMedium = styled.h2`
  position: relative;
  top: 100px;
  padding: 20px 30px 30px 10px;
  background-color: white;
  font-size: 21px;
  font-weight: normal;
  font-family: Work Sans;

  >p{
    display: flex;
    justify-content: end;
    
    padding-top: 20px;
    cursor: pointer;
  }
`

export const ArrowLeft = styled(AiOutlineArrowRight)`
  margin-right: 10px;
`