import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {


    useEffect(() => {
        const scriptModule = document.createElement('script');
        scriptModule.type = 'module';
        scriptModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
        document.body.appendChild(scriptModule);

        const scriptNoModule = document.createElement('script');
        scriptNoModule.setAttribute('nomodule', '');
        scriptNoModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
        document.body.appendChild(scriptNoModule);
    }, []);
    return (
        <div className='body'>
        <section>
            <form>
                <h1>Login</h1>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="forget">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="PAS">Forget Password</a>
                </div>
                <button>Log in</button>
                <div className="register">
                <p>Don't have an account? <Link path to="/SignUp">Register</Link></p>
                </div>
            </form>
        </section>
        </div>
    );
}

export default Login;


