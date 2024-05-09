import '../styling/Alerts.css';
import '../styling/Button.css';
export default function Alerts() {
    return (
        <div className="alert-container">
            {/* Primary Alert */}
            <a className='btn-text' href="#popup1">Primary</a>
            <div id="popup1" className="alert-overlay">
                <div className="alert-popup">
                    <h2>PRIMARY</h2>
                    <a className="alert-close" href="#">&times;</a>
                    <div className="content">Primary Alert Details</div>
                </div>
            </div>
            {/* Danger Alert */}
            <a className='btn-text' style={{color:"red"}} href="#popup2">Danger</a>
            <div id="popup2" className="alert-overlay">
                <div className="alert-popup" style={{color: "white",
                                                     backgroundColor: 'red',
                                                     border: '2px solid white',
                                                     boxShadow: '15px 15px 0px rgb(255, 0, 0, 0.5)'}}>
                    <h2>ERROR</h2>
                    <a className="alert-close" style={{color: "white"}} href="#">&times;</a>
                    <div className="content">Error Alert Details</div>
                </div>
            </div>
            {/* Success Alert */}
            <a className='btn-text' style={{color:"green"}} href="#popup3">Success</a>
            <div id="popup3" className="alert-overlay">
                <div className="alert-popup" style={{backgroundColor: "green",
                                                     color : "white", 
                                                     border: '2px solid white',
                                                     boxShadow: '15px 15px 0px rgb(0, 128, 0, 0.5)'}}>
                    <h2>SUCCESS</h2>
                    <a className="alert-close" style={{color: "white"}} href="#">&times;</a>
                    <div className="content">Success Alert Details</div>
                </div>
            </div>
            {/* Warning Alert */}
            <a className='btn-text' style={{color:"black"}} href="#popup4">Warning!</a>
            <div id="popup4" className="alert-overlay">
                <div className="alert-popup" style={{color: "black",
                                                     border: '2px solid black',
                                                     backgroundColor: 'yellow',
                                                     boxShadow: '15px 15px 0px rgb(255, 235, 0, 0.5)'}}>
                    <h2>WARNING</h2>
                    <a className="alert-close" style={{color: "black"}} href="#">&times;</a>
                    <div className="content">Warning Alert Details</div>
                </div>
            </div> 
        </div>
    )

}