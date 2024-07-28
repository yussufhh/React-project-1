import React from 'react';
import { useEffect } from 'react';
import './SignUp.css';

const SignUp = () => {

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
                <h1>Signup</h1>
                <div className="inputbox">
                    <ion-icon name="person-outline"></ion-icon>
                    <input type="text" required />
                    <label>First Name</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="person-outline"></ion-icon>
                    <input type="text" required />
                    <label>Last Name</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <input type="text" required />
                    <label>Username</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="call-outline"></ion-icon>
                    <input type="tel" required />
                    <label>Phone Number</label>
                </div>
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
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label>Confirm Password</label>
                </div>
                <button>Sign up</button>
                <div className="register">
                    <p>Already have an account? <a href="PASS">Login</a></p>
                </div>
            </form>
        </section>
        </div>
    );
}

export default SignUp;
