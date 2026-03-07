import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../Slices/userSlice'
import Footer from './Footer'
import './Styles/forms.css'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) navigate('/');
    }, [isSuccess]);

    const onFormSubmit = (userCredentialsObject) => {
        dispatch(userLogin(userCredentialsObject));
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">Welcome back</h2>
                    <p className="auth-subtitle">Sign in to your account</p>
                </div>

                {isError && (
                    <div className="auth-alert">
                        {errMsg || 'Invalid email or password.'}
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
                        <label className="field-label">Password</label>
                        <input
                            type="password"
                            className={`field-input ${errors.password ? 'field-input--error' : ''}`}
                            placeholder="Enter your password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span className="field-error">Password is required</span>}
                    </div>

                    <button type="submit" className="auth-btn" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <p className="auth-footer-text">
                    Don't have an account?{' '}
                    <button className="auth-link-btn" onClick={() => navigate('/sign-up')}>
                        Sign up
                    </button>
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Login