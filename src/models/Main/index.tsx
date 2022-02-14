import {Container , TextHard , TextMedium} from './style'

import PersonImg from '../../assets/Rectangle 2.png'
import Person2Img from '../../assets/Rectangle 3.png'

export function Main(){
  return(
    <Container>
        <div className="left">
          <TextHard>New generation shop experiences for you</TextHard>
          <TextMedium>Bringing fashion back to its original and classic form</TextMedium>
        </div>

        <div className="right">
          <img src={PersonImg} alt="Imagem de pessoa" />
          <img src={Person2Img} alt="Imagem de pessoa" />
        </div>
    </Container>
  )
}