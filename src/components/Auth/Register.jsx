import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/authStyles.css'; 

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Add your registration logic here
        console.log('Registration data:', { email, password });
        
        // Simulated API call
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 2000);
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="auth-title">Create Account</h2>
                
                <div className="auth-input-group">
                    <label className="auth-label">Email</label>
                    <input
                        type="email"
                        className="auth-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="auth-input-group">
                    <label className="auth-label">Password</label>
                    <input
                        type="password"
                        className="auth-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <div className="auth-error">{error}</div>}

                <button 
                    type="submit" 
                    className={`auth-button ${loading ? 'loading' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Creating Account...' : 'Sign Up'}
                </button>

                <div className="auth-footer-text">
                    Already have an account?{' '}
                    <a href="/login" className="auth-link">Sign In</a>
                </div>
            </form>
        </div>
    );
};

export default Register;