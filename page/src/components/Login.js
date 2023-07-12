import React from 'react'
import Lua from '../img/lua.jpg'

const Login = () => {
  return (
    <section className='Login-section'>
        <div className='L-conteudo'>
            <div>
                <img src={Lua} alt=""/>
            </div> 
            <div class="Login-register">
                <div>
                    <input type="text" placeholder="User"/>
                    <input type="text" placeholder="password"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login