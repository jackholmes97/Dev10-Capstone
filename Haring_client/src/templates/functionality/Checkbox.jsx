import '../styling/Checkbox.css'

export default function Checkbox() {
    return (
        <div className='checkbox-container'>
            <input type='checkbox' className='checkbox-primary'/>
            <input type='checkbox' className='checkbox-secondary'/>
            <input type='checkbox' className='checkbox-disabled' disabled/>
        </div>
    )
}