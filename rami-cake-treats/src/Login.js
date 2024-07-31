import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dummy validation for demonstration
        if (email === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
            return;
        }

        try {
            // Simulate API call
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Login successful!',
            }).then(() => {
                history.push('/'); // Redirect to home or another page on success
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
            });
        }
    };

    return (
        <div className='body'>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <div className="forget">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                      <Link path to='/resetpassword'>Forget Password</Link>  
                    </div>
                    <button type="submit" style={{color:'blue'}}>Login</button>
                    <div className="register">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;
