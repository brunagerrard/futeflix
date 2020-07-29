import React from 'react';
import './FormField.css'

function FormField({label, type, name, value, onChange}) {
    return (
        <div id='formulario'>
            <label className='linhas-formulario'>
                {label}               
            </label>
            <input
                type={type}
                name={name}
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}

export default FormField;