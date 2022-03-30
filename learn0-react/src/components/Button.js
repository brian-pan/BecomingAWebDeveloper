import PropTypes from 'prop-types'

const Button = ({color, text, handleClick}) => { //deconstruct way
    return (
        <button onClick={handleClick} style={{backgroundColor: color}} className="btn">
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'Steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    handleClick: PropTypes.string,
}

export default Button;