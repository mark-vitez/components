import Accordion from "../components/accordion/accordion"

function AccordionPage() {
    const items = [
        {
            header: "First header",
            content: "Ex tempor velit esse anim cillum sunt. Ea do consectetur qui ex esse aliquip ullamco eu pariatur cillum reprehenderit adipisicing. Cillum do ut id ad consectetur quis officia aliquip voluptate excepteur incididunt nisi. Veniam laborum fugiat labore nulla."
        },
        {
            header: "Second header",
            content: "Qui amet eu quis velit magna velit sunt tempor. In adipisicing exercitation qui mollit exercitation sunt consequat aliqua est nostrud. Labore ad ad nostrud excepteur labore deserunt quis proident et. Officia aute in aliquip cillum deserunt magna ut ad ut Lorem amet elit."

        }]
    return (
        <div>
            <Accordion items={ items } />
        </div>
    )
}


export default AccordionPage