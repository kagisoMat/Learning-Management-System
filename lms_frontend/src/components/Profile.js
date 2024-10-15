import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, such as sending data to the backend
        alert('Profile updated!');
        navigate('/dashboard'); // Redirect after update
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            profilePicture: null,
        });
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

    const profileContainerStyle = {
        width: '600px',
        backgroundColor: '#1D1D2B',
        padding: '20px',
        borderRadius: '10px',
    };

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #333',
        paddingBottom: '20px',
    };

    const pictureStyle = {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        marginRight: '20px',
    };

    const infoStyle = {
        color: '#ffffff',
    };

    const formStyle = {
        marginTop: '20px',
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
    };

    const submitButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#4A5FE1',
        color: 'white',
    };

    const resetButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#555',
        color: 'white',
    };

    const profilePicturePreview = formData.profilePicture ? (
        <img
            src={URL.createObjectURL(formData.profilePicture)}
            alt="Profile Preview"
            style={pictureStyle}
        />
    ) : (
        <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={pictureStyle}
        />
    );

    return (
        <div style={containerStyle}>
            <div style={profileContainerStyle}>
                <div style={headerStyle}>
                    {profilePicturePreview}
                    <div style={infoStyle}>
                        <h2>{formData.firstName} {formData.lastName}</h2>
                        <p>{formData.email}</p>
                    </div>
                </div>

                <div style={formStyle}>
                    <h3 style={infoStyle}>Personal info</h3>
                    <form onSubmit={handleSubmit}>
                        <label style={labelStyle} htmlFor="first-name">First name</label>
                        <input
                            style={inputStyle}
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />

                        <label style={labelStyle} htmlFor="last-name">Last name</label>
                        <input
                            style={inputStyle}
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />

                        <label style={labelStyle} htmlFor="email">Email address</label>
                        <input
                            style={inputStyle}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label style={labelStyle} htmlFor="profile-picture">Profile picture</label>
                        <input
                            style={inputStyle}
                            type="file"
                            id="profile-picture"
                            name="profilePicture"
                            accept="image/*"
                            onChange={handleChange}
                        />

                        <button type="submit" style={submitButtonStyle}>Save changes</button>
                        <button type="button" style={resetButtonStyle} onClick={handleReset}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;
