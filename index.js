const PORT = 3000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const  bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json())

app.post('https://food-gl.vercel.app/*', (request, res) => {

    const Body =  JSON.stringify(request.body)
    const options = {
        method: 'POST',
        body: `${Body}`
    };


    fetch(`https://api.spoonacular.com/food/ingredients/glycemicLoad?apiKey=${process.env.REACT_APP_FOOD_API_KEY}`, options)
    .then(response => response.json())
    .then (response => res.json(response))
    .catch(err => console.error(err,));
})


app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))
