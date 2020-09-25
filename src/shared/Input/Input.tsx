import React from 'react'
import './Input.css'

declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input: React.FC<InputProps> = (props) => (
    <div className='AppInput'>
        <label>
            <span>{props.label}</span>
        </label>
        <input 
          type="text"
          {...props}
        />
    </div>
)

export default Input