// install before making own server
// $ npm install express body-parser --save 
// to run 
// $ node server

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

app.listen(port, () => console.log(`Listening my own server ${port}`))
