import React from 'react'
import Lua from '../img/lua.jpg'

const Login = () => {
  return (
    <section className='Login-section'>
        <div className='L-conteudo'>
            <div className='image'>
                {/* imagem */}
            </div> 
            <div class="Login-register">
                <div>
                    <input type="text" placeholder="Username" value="User1"/>
                    <input type="password" placeholder="password" value="1234"/>
                    <div>
                        <button>Sign in</button>
                        <button>Sign up</button>
                    </div>
                    <button>Forgot Password?</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login