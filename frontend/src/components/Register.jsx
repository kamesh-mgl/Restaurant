import { useState } from "react";
import "../css/register.css";
import instance from "../functional/axios";
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    async function handleRegister(e) {
        e.preventDefault();
        console.log(formData);
        try {
            // await instance.post("/register", formData)
            alert("Registered successfully")
            navigate("/login");
        } catch (error) {
            alert("Something went wrong, try again")
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>Create Account</h2>

                <form onSubmit={handleRegister}>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />

                    <label>Password</label>
                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                        />
                        <span
                            className="eye"
                            onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>

                    <label>Confirm Password</label>
                    <div className="password-field">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                        />
                        <span
                            className="eye"
                            onClick={() =>
                                setShowConfirmPassword(prev => !prev)
                            }
                        >
                            {showConfirmPassword ? "🙈" : "👁️"}
                        </span>
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
