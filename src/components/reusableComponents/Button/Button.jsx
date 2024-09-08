import React from 'react';
import './button.css';
import rightIcon from '../../../assets/Icons/right-arrow.svg';

const Button = ({ onClick, children, showRightIcon = false, loading = false, disabled= false, ...props }) => {
    return (
        <button className={`upraised-button ${disabled && 'disabled'} ${loading && 'loading'}`} onClick={onClick} {...props}>
            {children}
            {showRightIcon && <img className='right-icon' src={rightIcon} alt='right icon' />}
            {loading && <div className='loader'></div>}
        </button>
    );
};

export default Button;