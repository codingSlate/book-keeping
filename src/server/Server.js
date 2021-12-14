// install before making own server
// $ npm install express body-parser --save 
// to run 
// $ node server
// in package.json added 
// "proxy": "http://localhost:5000"

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
const port = 5000

let recordsData = [
    {
      id: 1,
      bookName: 'Math Book',
      authorName: 'Rohin',
      description: 'Best Math books for kids',
    },
    {
      id: 2,
      bookName: 'Biology Book',
      authorName: 'Moria',
      description: 'Introductory to Biology',
    },
    {
      id: 3,
      bookName: 'Yoga',
      authorName: 'Kalyan Mojie',
      description: 'The healing of Body',
    },
    {
      id: 4,
      bookName: 'C++',
      authorName: 'Crafton Ford',
      description: 'Best programming practice',
    },
  ];

// get request 
app.get('/api/records', (req, res) =>{
    res.send(recordsData)
})

// post request 
app.post('/api/records', (req, res) =>{
 const newRecord = {
   id: recordsData.reduce((acc, item) => { item.id > acc ? item.id: acc }, 0) + 1 , //  this line can be ommitted  
   ...req.body
 }
 
 recordsData.push(newRecord)
 res.send(newRecord)
})

app.listen(port, () => console.log(`Listening my own server ${port}`))
