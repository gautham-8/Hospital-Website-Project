import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Footer from './Footer'
import {useSelector} from "react-redux";

function Signup() {
    const {register,handleSubmit,formState:{errors}} = useForm()
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);

    const onFormSubmit = (user) => {
        let staffStatus;
        console.log(userObj);
        if(userObj.email != null) staffStatus = true;
        else staffStatus = false;

        let staffObj = {
            isStaff: staffStatus
        }
        let userData = Object.assign(user,staffObj);
        console.log(userData)
        axios.post('http://localhost:4000/user-api/create-user',userData)
        .then(response => {
            console.log(response)
        })
        .catch(error => alert(error))
    }

    return (
        <div className="">
            <div className="card cols col-lg-5 col-md-8 col-10 mx-auto m-5">
                <div className="container mb-2">
                    <p className="display-6 text-center">Signup</p>
                    <Form onSubmit = {handleSubmit(onFormSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register("email",{required:true})}/>
                            {errors.email && (<p className="text-danger">*Required field</p>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Phone number" {...register("phone",{required:true})} />
                            {errors.phone?.type==='required'&& <p className="text-danger">* Required field</p>}
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("password",{required:true})}/>
                            {errors.password?.type==='required'&& <p className="text-danger">* Required field</p>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" {...register("city",{required:true})}/>
                            {errors.city?.type==='required'&& <p className="text-danger">* Required field</p>}
                        </Form.Group>
    
                        <Button style={{ backgroundColor: "rgb(1, 95, 130)"}} variant="primary" type="submit" className="d-block mx-auto">
                            Signup
                        </Button>

                    </Form>
                </div>
            </div>
            <Footer />
        </div>
        )
}

export default Signup