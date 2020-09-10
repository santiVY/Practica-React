const express = require('express')
const app = express()
app.use(express.json())
//urlencoded es para cuando llegue parametros por las rutas se puedan leer bien
app.use(express.urlencoded({ extended: false }))
const port = 3001

//Routes
const experienciesRoutes = require('./routes/experiences')
const bookingRoutes = require('./routes/booking')

app.use('/experiences', experienciesRoutes)
app.use('/booking', bookingRoutes)

/* Sample endpoints:
    - localhost:3000/experiences/
    - localhost:3000/experiences/top5
    - localhost:3000/experiences/detail/1..n
*/

app.listen(port, () => {
    console.log(`Se inicia el servidor en el puerto ${port}`)
})
