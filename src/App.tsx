import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div>
            <input type = 'text' />
            <input checked = {true} value = {'yo'} type = {'password'} />
            <PageTitle title = {'This is App component'} />
            <PageTitle title = {'My Friends'} />
            Article 1
            <Rating value = {3} />
            <Accordion titleValue = 'Menu' collapsed={false}/>
            <Accordion titleValue = 'Users' collapsed={false}/>
            <Rating value = {0} />
            <Rating value = {1} />
            <Rating value = {2} />
            <Rating value = {3} />
            <Rating value = {4} />
            <Rating value = {5} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1> {props.title}</h1>
}


export default App;
