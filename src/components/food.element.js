import { useReducer } from "react";

import { FoodElementStyled } from "./styles/Food.element.styled";

import ButtonImageContainer from "./image.button"
import InfoImageContainer from "./info.button";

export default function FoodElement ({ amountFetch, Image, sDescription, pDescription }){
    function reducer(state, action) {
        if (action.type === 'fetchData'){
            const newState ={
            GLfetch : action.payload.GLfetch,
            GI : action.payload.GI,
            IsButtonImageContainer : !state.IsButtonImageContainer,
            IsInfoImageContainer : !state.IsInfoImageContainer
            }
       
            return newState
        }
        else if (action.type === 'showImage'){
            const newState = {
                GLfetch : state.GLfetch,
                GI : state.GI,
                IsButtonImageContainer : !state.IsButtonImageContainer,
                IsInfoImageContainer : !state.IsInfoImageContainer,
            }
     
            return newState
        }
        else if (action.type === 'showInfo'){
            const newState = {
                GLfetch : state.GLfetch,
                GI : state.GI,
                IsButtonImageContainer : !state.IsButtonImageContainer,
                IsInfoImageContainer : !state.IsInfoImageContainer,
            }
         
            return newState
        }
        

    }

    const initialState = {
        GLfetch : 0,
        GI : 0,
        IsButtonImageContainer : true,
        IsInfoImageContainer : false,
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <FoodElementStyled>
            {state.IsButtonImageContainer && <ButtonImageContainer Image={Image} sDescription={sDescription} amountFetch={amountFetch} dispatch={dispatch} state={state}></ButtonImageContainer>}
            {state.IsInfoImageContainer && <InfoImageContainer GLFetch={state.GLfetch} GI={state.GI} amountFetch={amountFetch} sDescription={sDescription} pDescription={pDescription} imageDispatcher={dispatch}></InfoImageContainer>}
        </FoodElementStyled>

    )
}