import React from 'react'
import { Link } from 'react-router-dom'
import Botao from '../components/button'
import { useState } from 'react'
import {LocalStorageAdd} from '../AdiconarLocal'

const Login = () => {
    const [Nome, setNome] = useState('')
    const [Senha, setSenha] = useState('')
    const [Logar, setLogar] = useState('')
    
    const Alertar = async () => {
        try {
            const Resposta = await LocalStorageAdd(Nome, Senha)
            if(Resposta === true){
                setLogar('/teste')
                alert('logado')
            }
        } catch (erro) {
            alert("Há algo de errado, verifique se você digitou tudo corretamente.")
            alert(localStorage.nome + " boa " + localStorage.senha)
        }
    }

  return (
    <div className='Login-section'>
        <div className='L-conteudo'>
            <div className='image'>
                {/* imagem */}
            </div> 
            <div className="Login-register">
                <div>
                    <input type="text" placeholder="Username" onChange={(e)=>setNome(e.target.value)}/>
                    <input type="password" placeholder="password" onChange={(e)=>setSenha(e.target.value)}/>
                    <div>
                        <Link className='Log-button' onClick={Alertar} to={Logar}>
                          <Botao text="sign in"  /> 
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