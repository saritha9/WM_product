import React, { useState } from 'react';
import Home from './Home';
import NavBar from './NavBar'
import UserDetailsContext from './UserDetails';
import Product from './Product';
import Settings from './Settings';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';


const MainComponent = () => {
    const [UserDetails, setDetails] = useState({ firstName: 'John', lastName: 'Bond' });
    const value = { UserDetails, setDetails };
    const [active, setActive] = useState('Home')
    const handleClick = (id) => {
        setActive(id)
    }
    return (
        <UserDetailsContext.Provider value={value}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" onClick={() => handleClick('Home')}>
                    Home
  </Link>
                <Typography color="textPrimary">{active}</Typography>
            </Breadcrumbs>
            <div className='displayFlex'>
                <NavBar handleClick={handleClick} />
                {active === 'Home' ? <Home />
                    : active === 'Products' ? <Product /> : <Settings />}
            </div>
        </UserDetailsContext.Provider>
    )

}

export default MainComponent;