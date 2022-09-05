import React, { useEffect } from 'react'
import { MDBCard,MDBCardBody,MDBInput,MDBCardFooter,MDBValidation,MDBBtn,MDBIcon,MDBSpinner, MDBValidationItem} from "mdb-react-ui-kit"
import { Link,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { getTourByUser } from '../redux/features/tourSlice'


const Dashboard = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const {userTours,loading}=useSelector((state)=>({...state.tour}))
    const userId=user?.result?._id
    const dispatch=useDispatch()

    useEffect(()=>{
        if(userId){
            dispatch(getTourByUser(userId))
        }
    },[userId])
  return (
    <div style={{margin:"auto" ,padding:"120px", maxWidth:"900px", alignContent:"center"}}>
        <h4 className='text-center'>Bash:{user?.result?.name}</h4>
    </div>
  )
}

export default Dashboard