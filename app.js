const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();


const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")

//Middleware

app.use(morgan('dev'))
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});





//Tour ROute Handlers , Controllers








//Tour Routes


app.use('/api/v1/tours', tourRouter)

//User Routes


app.use('/api/v1/users', userRouter)


module.exports = app