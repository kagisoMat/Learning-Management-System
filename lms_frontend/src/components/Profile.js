import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: null,
        studentNo: '',
        idNumber: '',
        about: '',
        overallGrade: '',
        contact: '',
    });

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission logic
        alert('Profile updated!');
        navigate('/dashboard'); // Redirect to dashboard after saving
    };

    // Handle form reset and navigate back to dashboard
    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            profilePicture: null,
            studentNo: '',
            idNumber: '',
            about: '',
            overallGrade: '',
            contact: '',
        });
        document.getElementById('profile-picture').value = ''; // Reset file input

        navigate('/dashboard'); // Navigate back to dashboard
    };

    // Styles
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#101828',
            color: 'white',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        profileContainer: {
            width: '600px',
            backgroundColor: '#1D1D2B',
            padding: '20px',
            borderRadius: '10px',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #333',
            paddingBottom: '20px',
        },
        picture: {
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            marginRight: '20px',
        },
        info: {
            color: '#ffffff',
        },
        form: {
            marginTop: '20px',
        },
        label: {
            display: 'block',
            margin: '10px 0 5px',
            color: '#9A9A9A',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #333',
            borderRadius: '5px',
            backgroundColor: '#2C2C3D',
            color: '#ffffff',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            border: '1px solid #333',
            borderRadius: '5px',
            backgroundColor: '#2C2C3D',
            color: '#ffffff',
            resize: 'vertical',
        },
        button: {
            padding: '10px 20px',
            marginTop: '20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        submitButton: {
            backgroundColor: '#4A5FE1',
            color: 'white',
        },
        resetButton: {
            backgroundColor: '#555',
            color: 'white',
            marginLeft: '10px',
        },
    };

    // Profile picture preview logic
    const profilePicturePreview = formData.profilePicture ? (
        <img
            src={URL.createObjectURL(formData.profilePicture)}
            alt="Profile Preview"
            style={styles.picture}
        />
    ) : (
        <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={styles.picture}
        />
    );

    return (
        <div style={styles.container}>
            <div style={styles.profileContainer}>
                <div style={styles.header}>
                    {profilePicturePreview}
                    <div style={styles.info}>
                        <h2>{formData.firstName || 'First Name'} {formData.lastName || 'Last Name'}</h2>
                        <p>{formData.email || 'Email Address'}</p>
                    </div>
                </div>

                <div style={styles.form}>
                    <h3 style={styles.info}>Personal Info</h3>
                    <form onSubmit={handleSubmit}>
                        {/* First Name */}
                        <label style={styles.label} htmlFor="first-name">First Name</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />

                        {/* Last Name */}
                        <label style={styles.label} htmlFor="last-name">Last Name</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />

                        {/* Email */}
                        <label style={styles.label} htmlFor="email">Email Address</label>
                        <input
                            style={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        {/* Student No. */}
                        <label style={styles.label} htmlFor="student-no">Student No.</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="student-no"
                            name="studentNo"
                            value={formData.studentNo}
                            onChange={handleChange}
                            required
                        />

                        {/* ID Number */}
                        <label style={styles.label} htmlFor="id-number">ID Number</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="id-number"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            required
                        />

                        {/* About */}
                        <label style={styles.label} htmlFor="about">About</label>
                        <textarea
                            style={styles.textarea}
                            id="about"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            rows="4"
                        />

                        {/* Overall Grade */}
                        <label style={styles.label} htmlFor="overall-grade">Overall Grade</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="overall-grade"
                            name="overallGrade"
                            value={formData.overallGrade}
                            onChange={handleChange}
                        />

                        {/* Contact */}
                        <label style={styles.label} htmlFor="contact">Contact</label>
                        <input
                            style={styles.input}
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                        />

                        {/* Profile Picture */}
                        <label style={styles.label} htmlFor="profile-picture">Profile Picture</label>
                        <input
                            style={styles.input}
                            type="file"
                            id="profile-picture"
                            name="profilePicture"
                            accept="image/*"
                            onChange={handleChange}
                        />

                        {/* Buttons */}
                        <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>Save Changes</button>
                        <button type="button" style={{ ...styles.button, ...styles.resetButton }} onClick={handleReset}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
