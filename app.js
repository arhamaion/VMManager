const express = require('express')
const app = express()
const port = 5522
app.use((req, res, next)=>{
  console.log("Received Hit");
  next();
})
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})