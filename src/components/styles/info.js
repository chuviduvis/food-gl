import { useReducer } from "react"

import { InfoStyled, ButtonStyled, ButtonContainer } from "./Info.image.styled"


export default function Info({GLFetch, GI, amountFetch, sDescription, pDescription, imageDispatcher}){

 
    function reducer(state, action){   
        if (action === 'increase') {
            const AmountUpdated = state.Amount+1
            const GLUpdated = AmountUpdated * state.GL
            return {
                Amount: AmountUpdated,
                GL : state.GL,
                GLUpdated: GLUpdated.toFixed(2),
            }}

        else if(action === 'decrease'){
            if (state.Amount === 0){
                return state
            }
            const AmountUpdated = state.Amount-1
            const GLUpdated = AmountUpdated * state.GL
                return {
                Amount: AmountUpdated,
                GL : state.GL,
                GLUpdated: GLUpdated.toFixed(2),
            }
        }

    }
    const initialState = {
        Amount : amountFetch,
        GL : GLFetch,
        GLUpdated : GLFetch

    }
    const [state, amountDispatch] = useReducer(reducer, initialState)
    

    
    let description = ''
    if (state.Amount > 1 || state.Amount === 0){
        description = pDescription
    }else if(state.Amount === 1){
        description = sDescription
    }



    const dispatchImage = ()=>{
        const newAction = {
            type: 'showImage'
        }
        imageDispatcher(newAction)
    }
  

    return(
        <InfoStyled GL={state.GLUpdated}>

            <ButtonStyled fontsize='1em' style={{ marginTop: '20px'}} onClick={dispatchImage}>Image</ButtonStyled>

            
            <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-between',
                width: '100%',
                backgroundColor: 'F5E8C7',
                position: 'relative'}}><p> {state.Amount} {description}</p>
                <ButtonContainer> 
                    <ButtonStyled width='40px'  height='20px' fontsize='1.5em' onClick={()=> {
                        amountDispatch('increase')
                    }}>+</ButtonStyled> 

                    <ButtonStyled width='40px' height='20px' fontsize='1.5em' onClick={()=> {
                        amountDispatch('decrease')
                    }}>-</ButtonStyled> 
                </ButtonContainer>
            </div>
   
          

            <p style={{marginBottom: '10px', marginTop: '0px'}}>GI: {GI}</p>
            <p style={{marginBottom: '10px', marginTop: '0px'}}>GL: {state.GLUpdated}</p>
          

    


            {state.GLUpdated >= 10? <p style={{margin: '0 20px 0 0', paddingLeft: '0px'}} >Be carefull to eat more!</p> :
            <p style={{margin: '0 20px 0 0'}}>You can eat a little bit more!</p>}

        </InfoStyled>
      
    )
}