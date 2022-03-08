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
    // return (
    //     <div className="row">
    //         <div className="col-sm-7 col-11 mx-auto">
    //             <form onSubmit={handleSubmit(onFormSubmit)}>
    //                 <div className="mb-2">
    //                     <label htmlFor="pn">Patient's name</label>
                        // <input type="text" id="pn" className="form-control" {...register("username",{required:true,minLength:4})} />
                        // {errors.username?.type==='required'&& <p className="text-danger">Required field</p>}
                        // {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
    //                 </div>
    //                 <div className="mb-2">
    //                     <label htmlFor="dob">Date of Birth</label>
    //                     <input type="date" id="dob" className="form-control" {...register("dob",{required:true})} />
    //                     {errors.dob?.type==='required'&& <p className="text-danger">DOB must be entered</p>}
    //                 </div>
    //                 <div className="mb-2">
    //                     <label htmlFor="email">Email</label>
    //                     <input type="email" id="email" className="form-control" {...register("email",{required:true})}/>
    //                     {errors.email?.type==='required'&& <p className="text-danger">Email must be entered</p>}
    //                 </div>
    //                 <div className="mb-2">
    //                     <label htmlFor="gender">Gender</label>
    //                     <div className="form-check">
    //                         <input type="radio" id="male" className="form-check-input" {...register("gender",{required:true})} value="male" />
    //                         <label htmlFor="male">Male</label>
    //                     </div>
    //                     <div className="form-check">
    //                         <input type="radio" id="female" className="form-check-input" {...register("gender",{required:true})} value="female" />
    //                         <label htmlFor="female" className="form-check-label">Female</label>
    //                     </div>
    //                     {errors.gender?.type==="required" && <p className="text-danger">Gender is required</p>}
    //                 </div>
    //                 <div className="mb-2">
    //                     <label htmlFor="skills">Select your skills</label>
    //                     <div className="form-check">
    //                         <input type="checkbox" id="html" className="form-check-input" {...register("skills")} value = "html"/> 
    //                         <label htmlFor="html">Html</label>
    //                     </div>
    //                     <div className="form-check">
    //                         <input type="checkbox" id="css" className="form-check-input" {...register("skills")} value = "css"/> 
    //                         <label htmlFor="css">Css</label>
    //                     </div>
    //                     <div className="form-check">
    //                         <input type="checkbox" id="javascript" className="form-check-input" {...register("skills")} value = "javascript"/> 
    //                         <label htmlFor="javascript">Javascript</label>
    //                     </div>
    //                 </div>
    //                 <div className="mb-2">
    //                     <label htmlFor="branch">Choose your branch</label>
    //                     <select id="branch" className="form-select" {...register("branch")}>
    //                         <option value="cse">CSE</option>
    //                         <option value="it">IT</option>
    //                         <option value="ece">ECE</option>
    //                     </select>
    //                 </div>
    //                 <div className="mb-2">
    //                     <label htmlFor="description">Description</label>
    //                     <textarea id="feedback" rows="3" className="form-control" {...register("feedback")}></textarea>
    //                 </div>
    //                 <button type="submit" className="btn btn-success w-100">Register!</button>
    //             </form>
    //         </div>
    //     </div>
    //)
}

export default Appointmentform