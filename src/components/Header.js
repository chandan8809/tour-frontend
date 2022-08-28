import React,{useState} from 'react'
import{MDBNavbar,MDBContainer,MDBIcon,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBNavbarToggler,MDBCollapse,MDBNavbarBrand} from "mdb-react-ui-kit"
import { useSelector,useDispatch } from 'react-redux'
import { setLogout } from '../redux/features/authSlice'
const Header = () => {
    const [show,setShow]=useState(false)
    const {user}=useSelector((state)=>({...state.auth}))
    const dispatch=useDispatch()
    const handleLogout=()=>{
        dispatch(setLogout())
    }

  return (
    <MDBNavbar fixed='top' expand="lg" style={{backgroundColor:"#f0e6ea"}}>
        <MDBContainer>
            <MDBNavbarBrand href='/' style={{color:"#606080",fontWeight:"600" , fontSize:"22px"}}>
                Touropedia
            </MDBNavbarBrand>
        </MDBContainer>
        <MDBNavbarToggler type='button' aria-expanded="false" aria-label='Toogle navigation' onClick={()=>setShow(!show)} style={{color:"#606080"}}>
           <MDBIcon icon="bars" fas/>
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
            <MDBNavbarNav right fullWidth={false} className="md-2 mb-lg-0">
                
                {user?.result?._id &&<>
                    <MDBIcon fas icon="user-circle" className='fa-2x' style={{ marginTop:"12px",marginRight:"3px" , fontWeight:"bold"}}/>
                    <h5 style={{marginRight:"35px", marginTop:"17px" , fontWeight:"bold"}}>{user?.result?.name.split(" ")[0]}</h5>
                </>
                }
               
            
                <MDBNavbarItem>
                    <MDBNavbarLink href='/'>
                        <p className='header-text'>Home</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>

               {user?.result?._id &&(
                <>
                <MDBNavbarItem>
                <MDBNavbarLink href='/'>
                    <p className='header-text'>AddTour</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                    <MDBNavbarLink href='/'>
                        <p className='header-text'>Dashboard</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>
                </>
                )}

                {user?.result?._id ?(
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/login' onClick={handleLogout}>
                        <p className='header-text'>Logout</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>
                ): (<MDBNavbarItem>
                    <MDBNavbarLink href='/login'>
                        <p className='header-text'>Login</p>
                    </MDBNavbarLink>
                </MDBNavbarItem>)}
                

                
               

            </MDBNavbarNav>
        </MDBCollapse>

    </MDBNavbar>
  )
}

export default Header