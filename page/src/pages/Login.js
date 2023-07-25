import React from 'react'
import { Link } from 'react-router-dom'
import Botao from '../components/button'

const Login = () => {
  return (
    <div className='Login-section'>
        <div className='L-conteudo'>
            <div className='image'>
                {/* imagem */}
            </div> 
            <div className="Login-register">
                <div>
                    <input type="text" placeholder="Username" defaultValue="User1"/>
                    <input type="password" placeholder="password" defaultValue="1234"/>
                    <div>
                        <Link className='Log-button' to="/teste">
                          <Botao text="sign in" /> 
                        </Link>
                        <Link className='Log-button'>
                            <Botao text='sign up' />
                        </Link>
                    </div>
                    <button>Forgot Password?</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login