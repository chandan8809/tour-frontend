import React from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBCardGroup, MDBBtn, MDBIcon} from "mdb-react-ui-kit"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { likeTour } from '../redux/features/tourSlice'

const CardTour = ({imageFile,description,title,tags,_id,name}) => {
  const {user}=useSelector((state)=>({...state.auth}))
  const userId=user?.result?._id || user?.result?.googleId;
  const dispatch=useDispatch()
    const excerpt=(str)=>{
        if(str.length>45){
            str=str.substring(0,45)+"..."
        }
        return str
    }
    const Likes=()=>{
      return(
        <>
        <MDBIcon far icon="thumbs-up"/>
        &nbsp;Like
        </>
      )
    }

    const handleLike=()=>{
      dispatch(likeTour({_id}))
    }
  return (
    <MDBCardGroup>
        <MDBCard className='h-100 mt-2 d-sm-flex' style={{maxWidth:"20rem"}}>
            <MDBCardImage src={imageFile} alt={title} position="top" style={{maxWidth:"100%", height:"180px"}} />
            <div className='top-left'>{name}</div>

            <span className='text-start tag-card' style={{padding:"10px 10px 0px 10px"}}>{tags.map((tag)=>(<Link to={`/tours/tag/${tag}`}>#{tag} </Link>))} 
            <MDBBtn style={{float:"right"}} tag="a" color='none' onClick={handleLike}>
              <Likes/>
            </MDBBtn>
            </span>
           <MDBCardBody>
            <MDBCardTitle className='text-start'>{title}</MDBCardTitle>
            <MDBCardText className='text-start'>{excerpt(description)}
              <Link to={`/tour/${_id}`}>
                Read More
              </Link>
            </MDBCardText>
           </MDBCardBody>

        </MDBCard>
    </MDBCardGroup>
  )
}

export default CardTour