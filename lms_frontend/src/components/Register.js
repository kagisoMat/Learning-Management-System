import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const response = await fetch('http://localhost:5000/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const result = await response.json();
        alert(result.message);

        if (response.ok) {
            navigate('/login');
        }
    };

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#101828',
        color: 'white',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const formStyle = {
        backgroundColor: '#1D1D2B',
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
    };

    const labelStyle = {
        display: 'block',
        margin: '10px 0 5px',
        color: '#9A9A9A',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #333',
        borderRadius: '5px',
        backgroundColor: '#2C2C3D',
        color: '#ffffff',
    };

    const buttonStyle = {
        padding: '10px 20px',
        marginTop: '20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#4A5FE1',
        color: 'white',
        width: '100%',
    };

    const headerStyle = {
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <header>
                    <h1 style={headerStyle}>Admin Registration</h1>
                </header>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={labelStyle} htmlFor="username">Username:</label>
                        <input
                            style={inputStyle}
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label style={labelStyle} htmlFor="email">Email:</label>
                        <input
                            style={inputStyle}
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label style={labelStyle} htmlFor="password">Password:</label>
                        <input
                            style={inputStyle}
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label style={labelStyle} htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            style={inputStyle}
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button style={buttonStyle} type="submit">Register</button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <p>Already have an account? <a href="/login" style={{ color: '#4A5FE1' }}>Login here</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
