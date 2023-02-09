import React from 'react'
import { useDispatch } from 'react-redux'
import { handleOpenDialogAdd } from '../../../redux/features/ui/uiSlice';

export const BtnAdd = () => {

  const dispatch = useDispatch();

  const handleOpen = ()=>{
    console.log('Open');
    dispatch(handleOpenDialogAdd());
  }

  return (
    <button className='icon' onClick={handleOpen}>
        <svg fill="currentColor" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.003 300.003" style={{width: '100%', height: '100%'}}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <g> <g> 
            <path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150 C300.002,67.159,232.839,0,150,0z M213.281,166.501h-48.27v50.469c-0.003,8.463-6.863,15.323-15.328,15.323 c-8.468,0-15.328-6.86-15.328-15.328v-50.464H87.37c-8.466-0.003-15.323-6.863-15.328-15.328c0-8.463,6.863-15.326,15.328-15.328 l46.984,0.003V91.057c0-8.466,6.863-15.328,15.326-15.328c8.468,0,15.331,6.863,15.328,15.328l0.003,44.787l48.265,0.005 c8.466-0.005,15.331,6.86,15.328,15.328C228.607,159.643,221.742,166.501,213.281,166.501z"></path>
            </g> </g> </g>
        </svg>
    </button>
  )
}
