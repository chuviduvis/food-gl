import { ButtonImageContainerStyled, ButtonStyled, ImageStyled } from "./styles/Button.image.styled";

export default function  ButtonImageContainer({ Image, sDescription, amountFetch, dispatch, state }) {
    const newDescription = Image===sDescription? '' : sDescription
    const Body = `{ "ingredients":[ "${amountFetch} ${newDescription} ${Image}" ] }`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: `${Body}`
    };

    const FetchData =()=>{
        if (state.GLfetch === 0){
            fetch(`https://food-gl.vercel.app/${Image}`, options)
            .then(response => {
                
                return response.json()})
            .then(response => {
                console.log(response)
                const glycemicLoad = response.ingredients[0].glycemicLoad
                const glycemicIndex = response.ingredients[0].glycemicIndex
                
                const data ={
                    type : 'fetchData',
                    payload : {
                        GLfetch : glycemicLoad,
                        GI : glycemicIndex
            
                    }}
                dispatch(data)
            })
            .catch(err => console.error(err, ));
        }
        else {
            const data = {
                type: 'showInfo'
            }
            dispatch(data)
        }
        
    
    }
   
 
    
    return (
        <ButtonImageContainerStyled>
            <ImageStyled Image={Image}></ImageStyled>
            <ButtonStyled color="#F5E8E4" onClick={FetchData}>data</ButtonStyled>
        </ButtonImageContainerStyled>

    )
}


