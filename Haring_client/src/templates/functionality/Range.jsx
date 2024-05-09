import '../styling/Range.css';

export default function Range() {    
    return (
        <div className='range-container'>
            <input type='range' className='range-primary'/>
            <input type='range' className='range-disabled' disabled/>
        </div>
    )
}