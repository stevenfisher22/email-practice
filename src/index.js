import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Email(props) {
    return (
        <div>
            <Sender sender={props.info.email1.sender}/>
            <Subject subject={props.info.email1.subject}/>
            <Date date={props.info.email1.date}/>
            <EmailText emailText={props.info.email1.emailText}/>
        </div>
    )
}

const Sender = (props) => {
    return (
        <div>
            {props.sender}
        </div>
    )
}
const Subject = (props) => {
    return (
        <div>
            {props.subject}
        </div>
    )
}
const Date = (props) => {
    return (
        <div>
            {props.date}
        </div>
    )
}
const EmailText = (props) => {
    return (
        <div>
            {props.emailText}
        </div>
    )
}

var info = {
    email1: {
        sender: 'Steven Fisher',
        subject: 'Would you like to go to the mall later?',
        date: 'Mar 8',
        emailText: 'I guess I laid it all out there in the subject, huh?'
    }
}

ReactDOM.render(<Email info={info}/>, document.querySelector('#root'))