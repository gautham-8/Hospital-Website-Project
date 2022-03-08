import React from 'react'
import {useForm} from 'react-hook-form'
import '../Appointment/Appointmentform.css'

function Appointmentform() {
    const {register,handleSubmit,formState:{errors}} = useForm()

    const onFormSubmit = (userdata) => {
        console.log(userdata)
        window.alert("Successfully registered an apppointment for:\n"+userdata.name+"\n"+userdata.email+"\n"+userdata.mobile);
    }
    return (
        <div className="row mt-2 mx-auto">
            <div className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
                <form onSubmit = {handleSubmit(onFormSubmit)}>
                    <div>
                        <label htmlFor="name">Patient's name:</label>
                        <input type="text" id="name" className="form-control" {...register("name",{required:true,minLength:3})} />
                        {errors.name?.type==='required'&& <p className="text-danger">* Required field</p>}
                        {errors.name?.type === 'minLength' && <p className='text-danger'>* Min length should be 3</p>}
                    </div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" {...register("email")}/>
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="text" name="mobile" id="mobile" className="form-control" {...register("mobile",{required:true})}/>
                    {errors.mobile?.type === "required" && <p className="text-danger">* Required field</p>}
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
    )
}

export default Appointmentform