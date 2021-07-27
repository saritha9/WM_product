import React from 'react';

const MainComponent = (props)=>{
const navLink =  ['Home','Products','Settings'];
    return(
         <>
           <ul className='flexWidth border2'>
               {navLink && navLink.length !== 0 ?
               navLink.map((item,i)=>(
                  <li className='pad20 ' key={i}><span className={'cursorPointer'} onClick={()=>{props.handleClick(item)}}>{item || ''}</span></li>
               )):""}
           </ul>
         </>
    )

}

export default MainComponent;