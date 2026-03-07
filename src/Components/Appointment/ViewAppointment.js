import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { GrFormTrash } from 'react-icons/gr'
import '../Styles/Appointment.css'

const formatDatetime = (iso) => {
    if (!iso) return '—'
    return new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
}

function ViewAppointment() {
    const [appointmentList, setAppointments] = useState([])
    const { userObj } = useSelector((state) => state.user)

    const token = localStorage.getItem('token')
    const authHeader = { headers: { Authorization: `Bearer ${token}` } }

    const isPrivileged = userObj.email === 'admin@vj.com' || userObj.isStaff === true
    const url = isPrivileged
        ? '/api/appointments'
        : `/api/appointments/user/${userObj.email}`

    const fetchAppointments = () => {
        axios.get(url, authHeader)
            .then((res) => setAppointments(res.data.payload || []))
            .catch((err) => console.error(err))
    }

    useEffect(() => { fetchAppointments() }, [])

    const removeElement = (id) => {
        axios.delete(`/api/appointments/${id}`, authHeader)
            .then(fetchAppointments)
            .catch((err) => console.error(err))
    }

    if (!appointmentList || appointmentList.length === 0) {
        return <div className="appt-empty">No appointments found.</div>
    }

    return (
        <div className="appt-table-wrap">
            <table className="appt-table">
                <thead>
                    <tr>
                        {isPrivileged && <><th>Email</th><th>Phone</th></>}
                        <th>Patient's Name</th>
                        <th>Specialization</th>
                        <th>Date & Time</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentList.map((ele) => (
                        <tr key={ele._id}>
                            {isPrivileged && <><td>{ele.email}</td><td>{ele.phone}</td></>}
                            <td>{ele.name}</td>
                            <td style={{ textTransform: 'capitalize' }}>{ele.specialization}</td>
                            <td>{formatDatetime(ele.datetime)}</td>
                            <td>
                                <button
                                    className="appt-delete-btn"
                                    onClick={() => removeElement(ele._id)}
                                    title="Cancel appointment"
                                >
                                    <GrFormTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewAppointment