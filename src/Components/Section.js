
const Section = ({children, secHeading, hLevel }) =>{
    const H = `h${hLevel}`
    return(
    <section>
        <H>{secHeading}</H>
        {children}
    </section>
    )
}
export default Section