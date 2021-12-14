import { Fragment, useState, useEffect, useRef } from "react"
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


const Container = ({setShowApp}) => {
  const [allRecords, setAllRecords] = useState([])
  const [liveText, setLiveText] = useState(false)
  const isMounted = useRef(true)

  useEffect(()=>{
    axcios.get('/api/records').then(({data})=>{
      // console.log("Form axios", data)
      if(isMounted.current){
        setAllRecords(sortRecords(data))
      }
    })

    return ()=>{
      isMounted.current = false
    }
  }, [])
    


  const onAddHandler = data => {
    // setAllRecords(sortRecords([...allRecords, data]))
    // new Id created 
    data.id = allRecords.reduce((acc, item)=> acc > item.id ? acc : item.id, 0 ) +1
    
    axios.post('/api/records', data).then(({data}) => {
      if(isMounted.current){
        // setAllRecords(sortRecords([...allRecords, data]))
        setAllRecords(sortRecords([...allRecords, data]))
        setLiveText(`${data.bookName} Successfully Added.`)
      }
    })
    setShowApp(false)
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

// fix memory leak : cannout update react state on an unmounted object 
// use useEffect( cariable available to all renders) 
// in cleanup function of useEffect : because it executed once when component unmount 
const Wrapper =() =>{
  const [showApp, setShowApp] = useState(true)
  return showApp && <Container setShowApp={setShowApp}/>
}
export default Wrapper