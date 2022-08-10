import { WrapperStyled } from "./styles/Wrapper.styled"

import FoodElement from "./food.element"

export default function Wrapper() {
    //sDescription = Singular description
    //pDescription = Plural description
    return (
        <WrapperStyled>
            {/* <div ><div style={{ backgroundImage: `url(${background})`,}}></div></div> */}
            <FoodElement Image='apple' sDescription='apple' pDescription='apples' amountFetch={1}></FoodElement>
            <FoodElement Image='pear' sDescription='pear' pDescription='pears' amountFetch={1}></FoodElement>
            <FoodElement Image='coke' sDescription='glass' pDescription='glasses' amountFetch={1}> </FoodElement>
            <FoodElement Image='snickers' sDescription='bar' pDescription='bars' amountFetch={1}></FoodElement>
            <FoodElement Image='watermelon' sDescription='cup' pDescription='cups'amountFetch={1}> </FoodElement>
            <FoodElement Image='banana' sDescription='banana' pDescription='bananas' amountFetch={1}></FoodElement>
            <FoodElement Image='orange-juice' sDescription='glass' pDescription='glasses' amountFetch={1}></FoodElement>
            <FoodElement Image='strawberry' sDescription='cup' pDescription='cups' amountFetch={1}></FoodElement>
            <FoodElement Image='almonds' sDescription='cup' pDescription='cups' amountFetch={1}></FoodElement>
            <FoodElement Image='tortillas' sDescription='tortilla' pDescription='tortillas' amountFetch={1}></FoodElement>
            <FoodElement Image='bread' sDescription='slice' pDescription='slices' amountFetch={1}></FoodElement>
            <FoodElement Image='carrots' sDescription='cup' pDescription='cups' amountFetch={1}></FoodElement>
            <FoodElement Image='broccoli' sDescription='cup' pDescription='cups' amountFetch={1}></FoodElement>
            <FoodElement Image='vanilla-icecream' sDescription='cup ' pDescription='cups' amountFetch={1}></FoodElement>
            <FoodElement Image='mango' sDescription='cup' pDescription='cups' amountFetch={1}></FoodElement>
            <FoodElement Image='grapes' sDescription='cup' pDescription='cups' amountFetch={1}></FoodElement>
        </WrapperStyled>

    )
}