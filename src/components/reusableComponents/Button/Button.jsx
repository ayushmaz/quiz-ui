import React from 'react';
import './button.css';
import rightIcon from '../../../assets/Icons/right-arrow.svg';

const Button = ({ onClick, children, showRightIcon = false, ...props }) => {
    return (
        <button className='upraised-button' onClick={onClick} {...props}>
            {children}
            {showRightIcon && <img className='right-icon' src={rightIcon} alt='right icon' />}
        </button>
    );
};

export default Button;