import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Background.css'
import './SignUp.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

        // Validation
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Passwords do not match!",
            });
            return;
        }

        const userData = {
            firstName,
            lastName,
            phone,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:3000/UsersData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Sign up successful!',
                }).then(() => {
                    history.push('/'); // Redirect to home or another page after successful submission
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to sign up. Please try again.',
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred. Please try again.',
            });
        }
    };

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit} >
                    <h1>Signup</h1>
                    <div className="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <label>First Name</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <label>Last Name</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="call-outline"></ion-icon>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <label>Phone Number</label>
                    </div>
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
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label>Confirm Password</label>
                    </div>
                    <button type="submit" style={{color:'blue'}}><Link path to='login'>SignUp</Link></button>
                    <div className="register">
                        <p>Already have an account? <Link to='login'>Login</Link></p>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default SignUp;
