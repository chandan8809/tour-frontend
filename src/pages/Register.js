import React,{useEffect,useState} from 'react'
import { MDBCard,MDBCardBody,MDBInput,MDBCardFooter,MDBValidation,MDBBtn,MDBIcon,MDBSpinner, MDBValidationItem} from "mdb-react-ui-kit"
import { Link,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import {toast} from "react-toastify"
import { register } from '../redux/features/authSlice'

const initialState={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
}

const Register = () => {
    const [formValue, setFormValue]=useState(initialState)
    const {loading,error}=useSelector((state)=>({...state.auth}))
    const {email, password,firstName,lastName,confirmPassword}=formValue
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
       e.preventDefault()
       if(password!=confirmPassword){
        return toast.error("password should match")
       }
       if(email && password && firstName && lastName && confirmPassword){
        dispatch(register({formValue,navigate,toast}))
       }
    }
    const onInputChange=(e)=>{
        const {name,value}=e.target
        setFormValue({...formValue,[name]:value})
    }
    useEffect(()=>{
       error && toast.error(error)
    },[error])

  return (
    <div style={{margin:"auto",padding:"25px",maxWidth:"450px",alignContent:"center",marginTop:"120px"}}>
        <MDBCard alignment='center'>
            <MDBIcon fas icon="user-circle" className='fa-2x'/>
            <h5>Sign Up</h5>
            <MDBCardBody>
                <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>
                   <div className='col-md-6'>
                    <MDBValidationItem feedback='Please provide first Name' invalid className='col-md-12'>
                        <MDBInput label="First Name" type="text" value={firstName} name="firstName" onChange={onInputChange} required />
                    </MDBValidationItem>
                    </div>
                   <div className='col-md-6'>
                    <MDBValidationItem feedback='Please provide Last Name' invalid className='col-md-12'>
                        <MDBInput label="Last Name" type="text" value={lastName} name="lastName" onChange={onInputChange} required />
                    </MDBValidationItem>
                    </div>
                    <div className='col-md-12'>
                    <MDBValidationItem feedback='Please provide username.' invalid className='col-md-12'>
                        <MDBInput label="Email" type="email" value={email} name="email" onChange={onInputChange} required />
                    </MDBValidationItem>
                    </div>
                    <div className='col-md-12'>
                    <MDBValidationItem feedback='Please provide password.' invalid className='col-md-12'>
                        <MDBInput label="Password" type="password" value={password} name="password" onChange={onInputChange} required />
                    </MDBValidationItem>
                    </div>
                    <div className='col-md-12'>
                    <MDBValidationItem feedback='Please provide Confirm password.' invalid className='col-md-12'>
                        <MDBInput label="Password Confirm" type="password" value={confirmPassword} name="confirmPassword" onChange={onInputChange} required />
                    </MDBValidationItem>
                    </div>
                    <div className='col-md-12'>
                        <MDBBtn style={{width:"100%"}} className="mt-2">
                            {loading && (
                                <MDBSpinner size='sm' role="status" tag="span" className='me-2'/>
                            )}
                            Register
                        </MDBBtn>

                    </div>
                </MDBValidation>
            </MDBCardBody>

            <MDBCardFooter>
                <Link to="/login">
                <p>Alredy have an account ? Sign In</p>
                </Link>
            </MDBCardFooter>

        </MDBCard>
    </div>
  )
}

export default Register