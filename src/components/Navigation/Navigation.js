import React from 'react';

const Navigation = ({onRouteChanged}) => {
    return (
        <nav className='flex justify-end'>
            <p onClick={()=>onRouteChanged('signin')} className='f3 shadow pointer mr4 washed-yellow'>Sign Out</p>
        </nav>
    );
}

export default Navigation;