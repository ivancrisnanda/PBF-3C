import React from 'react';
import './login.css'


class login extends React.Component {
    render() {
        return (
            <div>
                <p></p>
                <h2 className='center'>Form Login</h2>
                <form className='box_login' >
                    <h2 className='center'>Tugas Pertemuan Ketiga</h2>

                    <div className='center' className=''>
                        <label>Username : </label>
                        <input className='textfield' placeholder=' masukkan username' type='text' />
                        <label>Password :</label>
                        <input className='textfield' placeholder=' masukkan password' type='text' />
                    </div>
                    <p></p>
                    <div className='center'>
                        <button type='submit' className='login'>Login</button>
                        <input type="checkbox" />
                        <label >Remember Me  </label>
                    </div>

                    <p></p>
                    <div className='center'>
                        <button className='cancel'>Cancel</button>
                    </div>

                </form>
            </div>
        );
    }

}


export default login;