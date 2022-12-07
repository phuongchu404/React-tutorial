import React from 'react';
import ReactDOM from 'react-dom';

// // Header Component
// const hexaColor = () => {
//   let str = '0123456789abcdef'
//   let color = ''
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]
//   }
//   return '#' + color
// }

// const hexaColorList =() =>{
//   for (let i = 0; i < 4; i++){
//     hexaColor();
//   }
// }
// const styleHexaColor = {
//   backgroundColor: hexaColor(),
//   color: 'white',
//   textAlign: 'center'
// }
// const HexaColor = () =>(

//     <div style={styleHexaColor}>{hexaColor()}</div>
   
  
// )

// const User = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.firstName}
//         {props.lastName}
//       </h1>
//       <small>{props.country}</small>
//     </div>
//   )
// }
// // calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
// <User firstName = 'Asabeneh' lastName='Yetayeh' country = 'Finland' />

// const rootElement = document.getElementById('root')
// // we render the App component using the ReactDOM package
// ReactDOM.render(<User firstName = 'Asabeneh' lastName='Yetayeh' country = 'Finland' />, rootElement)

// const Header = (props) => {
//   console.log(props) // {welcome:'Welcome to 30 Days Of React'}
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.welcome}</h1>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   return (
//     <div className='app'>
//       <Header welcome='Welcome to 30 Days Of React' />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')

// ReactDOM.render(<App />, rootElement)
const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 2015
  const age = currentYear - birthYear // 15 years

  let status = age >= 18

  return (
    <div className='app'>
      <Status status={status} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

