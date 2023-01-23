import React from 'react'
import "../Modal/Modal.css"

const Modal = () => {
  return (
    <>
    <div className='modal-register'>
        <div className="-logo-register">AMATERASU</div>
        <div className="logo-h1">Регистрация</div>
        <div className="inp-descr">USERNAME</div>
        <input className="inp email" placeholder='username'>

        </input>
        <div className="inp-descr">ПАРОЛЬ</div>
        <input className="inp email" placeholder='password'>

</input>
<div className="inp-descr">ПОДТВЕРДИТЕ ПАРОЛЬ</div>
        <input className="inp email" placeholder=''>

</input>


<button className='register-btn' type='submit'>Регистрация</button>
    



    </div>
    
    
    
    </>
  )
}

export default Modal