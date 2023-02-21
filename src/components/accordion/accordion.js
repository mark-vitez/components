import { useState, useEffect } from "react";
import AccordionSection from "./accordionSection";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);


    const expandSection = (expandWithIndex) => {
        setExpandedIndex(expandWithIndex)
    }

    const renderedItems = items.map((item, index) => {
        return (
            <div key={ index }>
                <AccordionSection content={ item.content } index={ index }
                    header={ item.header } expanded={ expandedIndex === index }
                    expandSection={ expandSection }
                />
            </div>
        )
    })

    return (
        <div>
            { renderedItems }
        </div>
    )
}


export default Accordion;