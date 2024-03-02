import React from 'react';

interface PopupProps{
    onClose:()=> void
}
const Popup: React.FC<PopupProps> = ({onClose}) =>{
    return(
        <div className="fixed inset-0 flex items-center">

        </div>
    )
}

export default Popup