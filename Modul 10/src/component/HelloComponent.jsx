import React from 'react';
import './HelloComponent.css';

const HelloComponent = () => {
    return <div>
        <h3>Form Login</h3>
        <form>
            <h2>Tugas Pertemuan ketiga</h2>
            <div className="container">
                <label><b>Username</b></label>
                <input className="text-input" placeholder="Enter Username" name="fname" />
                <label><b>Password</b></label>
                <input className="text-input" placeholder="Enter Password" name="lname" />
                <button type="submit">Login</button>
                <input type="checkbox" defaultChecked />Remember me
            </div>
            <div className="container" style={{ backgroundColor: 'red' }}>
                <button type="button" className="cancelbtn">Cancel</button>
            </div>
        </form>
    </div>
}
// export untuk bisa digunakan dimana saja
export default HelloComponent;