import React from 'react'
import { useForm } from 'react-hook-form'
import './Appointmentform.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const specializations = [
    { value: 'general', label: 'General' },
    { value: 'pediatric', label: 'Pediatrician' },
    { value: 'orthopedic', label: 'Orthopedic' },
    { value: 'cardio', label: 'Cardiology' },
]

const timeSlots = []
for (let h = 8; h <= 20; h++) {
    timeSlots.push(`${String(h).padStart(2, '0')}:00`)
    if (h < 20) timeSlots.push(`${String(h).padStart(2, '0')}:30`)
}

const today = new Date().toISOString().slice(0, 10)

function Appointmentform() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { phone } = useSelector((state) => state.user)

    const onFormSubmit = (user) => {
        const { apptDate, apptTime, ...rest } = user
        const userDetails = { ...rest, datetime: new Date(`${apptDate}T${apptTime}`).toISOString(), phone }
        axios.post('/api/appointments', userDetails)
            .then(() => navigate('/appointments/view-appointments'))
            .catch(error => console.error(error))
    }

    return (
        <div className="appt-form-card">
            <h3>Book an Appointment</h3>
            <p>Find the perfect specialist for your medical needs.</p>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="form-field">
                    <label className="field-label">Patient's name</label>
                    <input
                        type="text"
                        className={`field-input ${errors.name ? 'field-input--error' : ''}`}
                        placeholder="Full name"
                        {...register('name', { required: true, minLength: 3 })}
                    />
                    {errors.name?.type === 'required' && <span className="field-error">Name is required</span>}
                    {errors.name?.type === 'minLength' && <span className="field-error">Minimum 3 characters</span>}
                </div>

                <div className="form-field">
                    <label className="field-label">Specialization</label>
                    <div className="spec-group">
                        {specializations.map(({ value, label }) => (
                            <React.Fragment key={value}>
                                <input
                                    type="radio"
                                    id={`spec-${value}`}
                                    className="spec-option"
                                    {...register('specialization', { required: true })}
                                    value={value}
                                />
                                <label htmlFor={`spec-${value}`} className="spec-label">{label}</label>
                            </React.Fragment>
                        ))}
                    </div>
                    {errors.specialization?.type === 'required' && <span className="field-error">Please select a specialization</span>}
                </div>

                <div className="form-field">
                    <label className="field-label">Appointment date</label>
                    <input
                        type="date"
                        className={`field-input ${errors.apptDate ? 'field-input--error' : ''}`}
                        min={today}
                        {...register('apptDate', { required: true })}
                    />
                    {errors.apptDate?.type === 'required' && <span className="field-error">Date is required</span>}
                </div>

                <div className="form-field">
                    <label className="field-label">Preferred time</label>
                    <select
                        className={`field-input ${errors.apptTime ? 'field-input--error' : ''}`}
                        {...register('apptTime', { required: true })}
                    >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                        ))}
                    </select>
                    {errors.apptTime?.type === 'required' && <span className="field-error">Time is required</span>}
                </div>

                <button type="submit" className="appt-submit-btn">Book Appointment</button>
            </form>
        </div>
    )
}

export default Appointmentform