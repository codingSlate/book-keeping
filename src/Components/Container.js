import { Fragment, useState } from "react"
import Header from './Header'
import Section from "./Section"
import Footer from "./Footer"
import BookList from "./BookList"
import Form from "./Form"

let records = [
    {
      id:1,
      bookName: 'Math Book',
      authorName: 'Rohin',
      description: 'Best Math books for kids',
    },
    {
      id:2,
      bookName: 'Biology Book',
      authorName: 'Moria',
      description: 'Introductory to Biology',
    },
    {
      id:3,
      bookName: 'Yoga',
      authorName: 'Kalyan Mojie',
      description: 'The healing of Body',
    },
    {
      id:4,
      bookName: 'C++',
      authorName: 'Crafton Ford',
      description: 'Best programming practice',
    },
  ];


const Container = () => {
    const [allRecords, setAllRecords] = useState(records)
    const onAddHandler = data => {
        // console.log("received from from ", data)
        setAllRecords([...records, data])
    }
    console.log("set records  ", records)
    return (
        <Fragment>
            <Header hLevel="1" />
            <main>
                <Section secHeading="Add new Book" hLevel="2">
                    <Form onAdd={onAddHandler} />
                </Section>
                <Section secHeading="Available Books" hLevel="2">
                    <BookList records={allRecords}/>
                </Section>
            </main>
            <Footer />
        </Fragment>
    )
}
export default Container