import React from 'react';
import ReactDOM  from 'react-dom';
import styles from "./css/index.css";

const header = (
    <div className = 'header'>
        <h1>SUBSCRIBE</h1>
    </div>
    
)
const notification = (
    <div className = 'notification'>
        <h2>Sign up with your email address to receive news and update</h2>
    </div>
)
const inputForm =(
    <div className = 'input-form'>
        <form>
            <input type="text" placeholder='first name' className='input-info'/>
            <input type="text" placeholder='last name' className='input-info'/>
            <input type="text" placeholder='email' className='input-info'/>
            <button type='submit' className='button-submit'>Subcribe</button>
        </form>
    </div>
)
const app =(
    <div className='app' style={styles}>
        {header}
        {notification}
        {inputForm}
    </div>
)
const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement);