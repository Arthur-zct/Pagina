import React from 'react'

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
                        <button>Sign in</button>
                        <button>Sign up</button>
                    </div>
                    <button>Forgot Password?</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login