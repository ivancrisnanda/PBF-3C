import React from 'react';
import './Login.css';

const HelloComponent = () => {
    return (
        <center>
            <h1>Form Login</h1>
            <div className="card">
                <div className="judul">Tugas Pertemuan</div>
                <div className="judul">Tiga</div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <label><b>Username</b></label>
                    <label> <input type="text" placeholder="masukkan username"></input></label>
                </div>
                <br></br>
                <div>
                    <label><b>Password</b></label>
                    <label> <input type="text" placeholder="masukkan username"></input></label>
                </div>
                <div style={{ padding: 10 }}>
                    <button className="btn">Login</button>
                </div>
                <div>
                    <label><input type="checkbox"></input></label>
                    <label>Remember Me</label>
                </div>
                <br></br><br></br>
                <div>
                    <button className="btn-cancel">Cancel</button>
                </div>
            </div>
        </center>

    )

}

export default HelloComponent;