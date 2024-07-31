import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Login.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in the email field!',
            });
            return;
        }

        // Simulate API call for password reset
        fetch('http://localhost:3000/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error resetting password');
            }
            return response.json();
        })
        .then(data => {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Password reset link sent!',
            }).then(() => {
                history.push('/'); // Redirect to home or another page on success
            });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
            });
        });
    };

    return (
        <div className='body'>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Reset Password</h1>
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
                    <button type="submit" style={{color:'blue'}}>Reset</button>
                    <div className="register">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ResetPassword;
