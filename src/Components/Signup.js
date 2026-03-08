import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Footer from './Footer'
import './Styles/forms.css'

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { role } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const isAdmin = role === 'admin';

    const onFormSubmit = (user) => {
        setSubmitError('');
        axios.post('/api/users', user)
            .then(() => {
                setSubmitSuccess(true);
                if (!isAdmin) setTimeout(() => navigate('/login'), 1500);
            })
            .catch((error) => setSubmitError(error.response?.data?.message || 'Registration failed. Please try again.'));
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">{isAdmin ? 'Add Staff Member' : 'Create account'}</h2>
                    <p className="auth-subtitle">
                        {isAdmin ? 'Register a new staff member' : 'Join VJ Hospitals today'}
                    </p>
                </div>

                {submitError && <div className="auth-alert">{submitError}</div>}
                {submitSuccess && (
                    <div className="auth-alert" style={{ background: '#f0fdf4', borderColor: '#86efac', color: '#16a34a' }}>
                        {isAdmin ? 'Staff member added successfully!' : 'Account created! Redirecting to login...'}
                    </div>
                )}

                <form onSubmit={handleSubmit(onFormSubmit)} className="auth-form">
                    <div className="form-field">
                        <label className="field-label">Email address</label>
                        <input
                            type="email"
                            className={`field-input ${errors.email ? 'field-input--error' : ''}`}
                            placeholder="you@example.com"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="field-error">Email is required</span>}
                    </div>

                    <div className="form-field">
                        <label className="field-label">Phone number</label>
                        <input
                            type="text"
                            className={`field-input ${errors.phone ? 'field-input--error' : ''}`}
                            placeholder="+91 00000 00000"
                            {...register('phone', { required: true })}
                        />
                        {errors.phone && <span className="field-error">Phone is required</span>}
                    </div>

                    <div className="form-field">
                        <label className="field-label">Password</label>
                        <input
                            type="password"
                            className={`field-input ${errors.password ? 'field-input--error' : ''}`}
                            placeholder="Create a password (min. 8 characters)"
                            {...register('password', { required: true, minLength: 8 })}
                        />
                        {errors.password?.type === 'required' && <span className="field-error">Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className="field-error">Password must be at least 8 characters</span>}
                    </div>

                    <div className="form-field">
                        <label className="field-label">City</label>
                        <input
                            type="text"
                            className={`field-input ${errors.city ? 'field-input--error' : ''}`}
                            placeholder="Your city"
                            {...register('city', { required: true })}
                        />
                        {errors.city && <span className="field-error">City is required</span>}
                    </div>

                    <button type="submit" className="auth-btn">
                        {isAdmin ? 'Add Staff Member' : 'Create Account'}
                    </button>
                </form>

                {!isAdmin && (
                    <p className="auth-footer-text">
                        Already have an account?{' '}
                        <button className="auth-link-btn" onClick={() => navigate('/login')}>
                            Sign in
                        </button>
                    </p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Signup
