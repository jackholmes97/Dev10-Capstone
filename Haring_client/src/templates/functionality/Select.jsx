import '../styles/Select.css';

export default function Select() {
    return (
        <div className='select-container'>
            <select className='select-primary'>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </select>
            <select className='select-disabled' disabled>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </select>  
        </div>
    )
}