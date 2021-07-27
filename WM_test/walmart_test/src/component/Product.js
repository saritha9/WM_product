import React,{useContext} from 'react';
import UserContext from './UserDetails';

const Product = ()=>{
   const {UserDetails} = useContext(UserContext);
    return(
        <div className='displayFlex'>
        <div className='pad20'>
            <h1>This is Product page</h1>
        </div>
        <div className='pad20'>
            <div>First Name: {UserDetails.firstName}</div>
         <div>Last Name: {UserDetails.lastName}</div>
        </div>
        </div>
    )
}

export default Product;