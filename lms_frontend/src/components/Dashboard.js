// src/components/Dashboard.js
import React from 'react';
import './styles.css'; // Ensure you import the styles for the dashboard

function Dashboard() {
    return (
        <div className="container">
            <header>
                <h1>Students</h1>
                <p>Manage your Students accounts and their account permissions here.</p>
            </header>

            <div className="stats">
                <div className="stat">
                    <h2>Total Students</h2>
                    <p className="value">2,420</p>
                    <p className="percentage">+20%</p>
                </div>
                <div className="stat">
                    <h2>Students</h2>
                    <p className="value">1,210</p>
                    <p className="percentage">+15%</p>
                </div>
                <div className="stat">
                    <h2>Active now</h2>
                    <p className="value">316</p>
                </div>
            </div>

            <div className="actions">
                <button className="add-student">Add Student</button>
                <button className="register-student">Register New Student</button>
                <input type="text" placeholder="Search student number" className="search-bar" />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Student No.</th>
                        <th>ID Number</th>
                        <th>About</th>
                        <th>Overall Grade</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="olivia.jpg" alt="Avatar" />
                            Olivia Rhye
                        </td>
                        <td>5765890-879 - B</td>
                        <td>908808 78887 090</td>
                        <td>Content curating app</td>
                        <td className="grade">86%</td>
                        <td>+27 062 7998 900</td>
                        <td><button className="edit">Edit</button></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="olivia.jpg" alt="Avatar" />
                            Lindy Kumalo
                        </td>
                        <td>8865890-879 - C</td>
                        <td>878098 78978 900</td>
                        <td>Design software</td>
                        <td className="grade">66%</td>
                        <td>+27 062 7998 789</td>
                        <td><button className="edit">Edit</button></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
