import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed) {
        return <div>
            <AccordionTitle title = {props.titleValue} />
            {/*<AccordionBody />*/}
        </div>
    } else {
        return <div>
            <AccordionTitle title = {props.titleValue} />
            <AccordionBody />
        </div>
    }
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3>{props.title}</h3>
    )
}

const AccordionBody = () => {
    console.log('Accordion body rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion
