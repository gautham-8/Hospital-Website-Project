import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {userLogin} from '../slices/userSlice'
import Footer from './Footer'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //get user state from redux
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
    let dispatch = useDispatch();

    const navigate = useNavigate();
    const onFormSubmit = (userCredentialsObject) => {
        // console.log("OK OK")
        dispatch(userLogin(userCredentialsObject));
    };
    return (
    <div className="">
        <div className="card cols col-lg-5 col-md-8 col-10 mx-auto m-5">
            <div className="container mb-2">
                <p className="display-6 text-center">Login</p>
                <Form onSubmit={handleSubmit(onFormSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email",{required:true})}/>
                        {errors.email && (<p className="text-danger">*Required field</p>)}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password", { required: true })}/>
                        {errors.password?.type==='required'&& <p className="text-danger">* Required field</p>}
                    </Form.Group>

                    <Button style={{ backgroundColor: "rgb(1, 95, 130)"}} variant="primary" type="submit" className="d-block mx-auto">
                        Login
                    </Button>

                    
                    <Form.Label className=" d-flex align-items-center">
                        Don't have an account? 
                        <Button onClick={()=>navigate('/signup')} variant="link">Signup</Button>
                    </Form.Label>

                </Form>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Login