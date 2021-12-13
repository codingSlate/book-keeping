import { Fragment, useState } from "react"
import Header from './Header'
import Section from "./Section"
import Footer from "./Footer"
import BookList from "./BookList"
import Form from "./Form"

const Container = () => {
    const [records, setRecords] = useState([])
    const onAddHandler = data => {
        // console.log("received from from ", data)
        setRecords([...records, data])
    }
    // console.log("set records  ", records)
    return (
        <Fragment>
            <Header hLevel="1" />
            <main>
                <Section secHeading="Add new Book" hLevel="2">
                    <Form onAdd={onAddHandler} />
                </Section>
                <Section secHeading="Available Books" hLevel="2">
                    <BookList />
                </Section>
            </main>
            <Footer />
        </Fragment>
    )
}
export default Container