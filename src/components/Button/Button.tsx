import React from 'react'
import './Button.css'

declare interface ButtonProps {
    onClick?: () => void
    appendIcon?: JSX.Element
}

const Button: React.FC<ButtonProps> = ({ onClick, appendIcon, children }) => (
    <button className='AppButton' onClick={onClick}>
        {children || 'nameless button'}
        {appendIcon}
    </button>
)

export default Button