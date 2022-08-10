import { InfoImageContainerStyled } from "./styles/Info.image.styled";

import Info from "./styles/info";

export default function InfoImageContainer({ GLFetch, GI, amountFetch, sDescription, pDescription, imageDispatcher}){
    return(

        <InfoImageContainerStyled>

            <Info GLFetch={GLFetch} GI={GI} amountFetch={amountFetch} sDescription={sDescription} pDescription={pDescription} imageDispatcher={imageDispatcher}>
            </Info>
            
        </InfoImageContainerStyled>
      
    )
}