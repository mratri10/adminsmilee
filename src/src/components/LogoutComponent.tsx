import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export const LogoutComponent =()=>{
    const [showPopUp, setShowPopup] = useState(false)
    const {logout} = useAuth()
    return(
        <div>      
        {showPopUp?<>
        <div className='absolute inset-0 flex items-center justify-center bg-slate-700 opacity-50'/>
        <div className='absolute inset-0 flex justify-center items-center'>
            <div className='p-4 drop-shadow-md bg-white rounded flex flex-col'>
                <span>Apa Anda Yakin Ingin Keluar</span>
                <div className='flex flex-row'>
                    {TextButton({text: "Iya", className:'bg-green-600', onpress:()=>{setShowPopup(!showPopUp); logout()}})}
                    <div className='w-3'/>
                    {TextButton({text: "Tidak", className:'bg-red-600', onpress:()=>{setShowPopup(!showPopUp)}})}
                </div>
            </div>
        </div>
        </>:null}

            
            <button onClick={() => setShowPopup(!showPopUp)}>
                <span className='font-bold text-cyan-200'>Keluar</span>
            </button>
        </div>
    )
}

interface ITexTButton {
    text:string,
    className?:string,
    onpress?:()=>void
}
const TextButton =({text, className,onpress}:ITexTButton)=>{
    return (
        <button className={'flex flex-grow p-1 text-center text-white justify-center mt-4 rounded '+className} onClick={onpress}>
            <p>{text}</p>
        </button>
    )
}