import React, { useContext, useState } from 'react';
import UserContext from './UserDetails';

const Settings = () => {
    const { UserDetails,setDetails } = useContext(UserContext);
    const [details, setUserDetails] = useState({
        firstName: UserDetails.firstName,
        lastName: UserDetails.lastName
    })
    const handleChange = (e) => {
        setUserDetails({ ...details, [e.target.id]: e.target.value });
    }
    const updateDetails = () => {
        setDetails(details)
    }
    return (
        <div className='displayFlex'>
            <div className='pad20'>
                <h1>This is Settings page</h1>
            </div>
            <div className='pad20'>
                <div>First Name: <input type='text' value={details.firstName} onChange={handleChange} id={'firstName'} /></div>
                <div>Last Name: <input type='text' value={details.lastName} onChange={handleChange} id={'lastName'} /></div>
                <div className={'pad20 textRight'}>
                <button onClick={updateDetails}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;