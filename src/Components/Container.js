import { Fragment, useState, useEffect } from "react"
import Header from './Header'
import Section from "./Section"
import Footer from "./Footer"
import BookList from "./BookList"
import Form from "./Form"
import axcios from 'axios'
import axios from "axios"

// let recordsData = [
//   {
//     id: 1,
//     bookName: 'Math Book',
//     authorName: 'Rohin',
//     description: 'Best Math books for kids',
//   },
//   {
//     id: 2,
//     bookName: 'Biology Book',
//     authorName: 'Moria',
//     description: 'Introductory to Biology',
//   },
//   {
//     id: 3,
//     bookName: 'Yoga',
//     authorName: 'Kalyan Mojie',
//     description: 'The healing of Body',
//   },
//   {
//     id: 4,
//     bookName: 'C++',
//     authorName: 'Crafton Ford',
//     description: 'Best programming practice',
//   },
// ];

const sortRecords = rec => rec.sort((a, b) => {
  if (a.bookName < b.bookName) { return -1 }
  if (a.bookName > b.bookName) { return 1 }
  return 0
})


const Container = () => {
  const [allRecords, setAllRecords] = useState([])
  const [liveText, setLiveText] = useState(false)

  useEffect(()=>{
    axcios.get('/api/records').then(({data})=>{
      // console.log("Form axios", data)
      setAllRecords(sortRecords(data))
    })
  }, [])
    


  const onAddHandler = data => {
    // setAllRecords(sortRecords([...allRecords, data]))
    // new Id created 
    data.id = allRecords.reduce((acc, item)=> acc > item.id ? acc : item.id, 0 ) +1
    
    axios.post('/api/records', data).then(({data}) => {
      // setAllRecords(sortRecords([...allRecords, data]))
      setAllRecords(sortRecords([...allRecords, data]))
      setLiveText(`${data.bookName} Successfully Added.`)
    })
  }

  return (
    <Fragment>
      <Header hLevel="1" />
      <main>
        <Section secHeading="Add new Book" hLevel="2">
          <Form onAdd={onAddHandler} />
        </Section>
        <Section secHeading={`${allRecords.length} Books Available`} hLevel="2">
          <BookList records={allRecords} />
        </Section>
        <div
          className="visually-hidden"
          aria-live="polite"
          aria-atomic="true">
          {liveText}
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}
export default Container