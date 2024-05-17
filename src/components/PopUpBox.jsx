import React from 'react'

const PopUpBox = ({ message, close }) => {
  return (
    <div className='popUpBox'>
        <div className="popUpInfo">
            <p>{message}</p>
            <button onClick={close} className='logOut'>Close</button>
        </div>
    </div>
  )
}

export default PopUpBox