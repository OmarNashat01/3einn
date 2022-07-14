import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const Layout = () => {
  return (
    <div >
       <div >
                <Link to='/products'>
                <p>shop now </p>
                <ArrowRightAltIcon fontSize="large"/>
                </Link> 
       </div>
        
    </div>
  )
}

export default Layout