// import React from 'react';
// import PropTypes from 'prop-types';
import Button from './Button'

// const Header = (props) => {
//     console.log(props)
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }


//title = props.title -> {title} = props
//id = req.params.id -> {id} = req.params
//equivalently:
const Header = ({ title, onAdd, isFormOpen }) => { //deconstruct way

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            color={isFormOpen ? 'red' : 'green'}
            text={isFormOpen ? 'Close' : 'Open'}
            onClick={onAdd} />
        </header>
    ) 
}

//default value:
Header.defaultProps = {
    title: 'Learn React!!'
}

// Header.propTypes = {
//     title: propTypes.string.isRequired,
// }

//inline CSS style:
// const Header = ({ title }) => { //deconstruct way
//     return (
//         <header>
//             <h1 style={headingStyle}>{title}</h1>
//         </header>
//     )
// }

//CSS in JS:
// const headingStyle = {color: 'red', backgroundColor: 'black'}

//reuseable component:
// const Header = ({ title }) => { //deconstruct way
//     return (
//         <header className="header">
//             <h1>{title}</h1>
//             <Button color='green' text='Hello'/>
//             <Button color='lightBlue' text='Hello2'/>
//             <Button color='navy' text='Hello3'/>
//         </header>
//     ) 
// }









export default Header;