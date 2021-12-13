import { Fragment } from "react"
import Header from './Header'
import Section from "./Section"
import Footer from "./Footer"

const Container = () =>{
    return(
    <Fragment>
       <Header hLevel="1"/>
        <main>
            <Section secHeading="Fill the form" hLevel="2"/>
            <Section secHeading="Available Records" hLevel="2"/>
        </main>
        <Footer/>
    </Fragment>
    )
}
export default Container