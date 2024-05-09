import '../styling/InputField.css';

export default function InputField() {
    return (
        <div className='input-field-container'>
            <input className="input-field-primary" type="text" placeholder="Primary Input Field" />
            <input className="input-field-password" type="password" placeholder="Password Input Field" />
            <input className="input-field-disabled" type="text" placeholder="Disabled Input Field" disabled/>
            <input className='input-field-error' type='text' placeholder='Error Input Field'/>
        </div>
    )
}