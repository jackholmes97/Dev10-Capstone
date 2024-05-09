import '../styling/Button.css'
export default function Button() {
    return  ( 
        <div className="btn-container">
            <button className="btn-primary">Primary</button>
            <button className="btn-secondary">Secondary</button>
            <button className="btn-rounded">Click Me</button>
            <button className="btn-disabled">Click Me</button>
        </div>
    )};