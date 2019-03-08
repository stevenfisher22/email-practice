import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Email(props) {
    return (
        <div className="email">
            <Sender sender={props.info.email2.sender}/>
            <Subject subject={props.info.email2.subject}/>
            <Date date={props.info.email2.date}/>
            <EmailText emailText={props.info.email2.emailText}/>
        </div>
    )
}

const Sender = (props) => {
    return (
        <div className="sender">
            {props.sender}
        </div>
    )
}
const Subject = (props) => {
    return (
        <div className="subject">
            Subject: {props.subject}
        </div>
    )
}
const Date = (props) => {
    return (
        <div className="date">
            {props.date}
        </div>
    )
}
const EmailText = (props) => {
    return (
        <div className="email-text">
            {props.emailText}
        </div>
    )
}

var info = {
    email1: {
        sender: 'Steven Fisher',
        subject: 'Mall later?',
        date: 'Mar 8',
        emailText: 'I guess I laid it all out there in the subject, huh?'
    },
    email2: {
        sender: 'Savannah Fisher',
        subject: 'Walk later?',
        date: 'Mar 9',
        emailText: 'Bark! Bark, bark. Bark. Whine. Bark?'
    }
}

ReactDOM.render(<Email info={info}/>, document.querySelector('#root'))