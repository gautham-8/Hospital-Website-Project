import React from 'react'
import {useForm} from 'react-hook-form'
import './Appointmentform.css';
import '../Styles/Appointment.css'
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useResolvedPath } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function Appointmentform() {
    const {register,handleSubmit,formState:{errors}} = useForm()

    const navigate = useNavigate();

    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);

    const onFormSubmit = (user) => {
        window.alert("Successfully registered an apppointment");
        const userEmail = {
            email: userObj.email,
            phone: userObj.phone
        };
        const userDetails = Object.assign(user,userEmail)
        axios.post('http://localhost:4000/appointment-api/book-appointment',userDetails)
        .then(response => {
            // console.log(response)
            navigate('/Appointment/view-appointments')
        })
        .catch(error => alert(error))
    }
    return (
        <div className="background-clr pt-3">
            <div className="row mx-auto">
                <div className="cols col-lg-2"></div>
                <div className="cols col-lg-8">  
                    <div className="row pb-4">
                        <div className="col-lg-10 col-md-8 mx-auto">
                            <form onSubmit = {handleSubmit(onFormSubmit)} className="form-shadow">
                            <img className="doctor-image mt-2" src="https://thumbs.dreamstime.com/b/group-hospital-doctors-over-health-care-clinic-background-89857953.jpg" alt=""/>
                            <p className="text-center fonter p-1">Book an appointment with your doctor who is the perfect match for your medical needs.</p>
                                <div>
                                    <label htmlFor="name">Patient's name:</label>
                                    <input type="text" id="name" className="form-control" {...register("name",{required:true,minLength:3})} />
                                    {errors.name?.type==='required'&& <p className="text-danger">* Required field</p>}
                                    {errors.name?.type === 'minLength' && <p className='text-danger'>* Min length should be 3</p>}
                                </div>
                                <label htmlFor="doc">Doctor specialization:</label>
                                    <div className="form-check">
                                        <input type="radio" id="doc" className="form-check-input" {...register("doc")} value = "general"/> 
                                        <label htmlFor="gen">General doctor</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="doc" className="form-check-input" {...register("doc")} value = "pediatric"/> 
                                        <label htmlFor="ped">Pediatrician</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="doc" className="form-check-input" {...register("doc")} value = "orthopedic"/> 
                                        <label htmlFor="ortho">Orthopedic</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="doc" className="form-check-input" {...register("doc")} value = "cardio"/> 
                                        <label htmlFor="cardio">Cardiology</label>
                                    </div>
                                <label htmlFor="date">Appointment date:  </label>
                                <input type="date" id="date" className="form-control" {...register("date")}/>
                                <label htmlFor="time">Appointment time:  </label>
                                <select name="time" id="time" className="form-select" {...register("time")}>
                                    <option value='Any' >Any time is okay</option>
                                    <option value="19:00" >19:00</option>
                                    <option value="19:30" >19:30</option>
                                    <option value="20:00" >20:00</option>
                                </select>
                                <button size="lg" style={{ backgroundColor: "rgb(1, 95, 130)",display: "block"}} type="submit" className="btn btn-secondary w-50 mx-auto mt-2">Book!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Appointmentform