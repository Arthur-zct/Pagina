import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect } from 'react'
import {LocalStorageAdd} from '../AdiconarLocal'
import Botao from '../components/button'

const Login = () => {
    const [Nome, setNome] = useState('')
    const [Senha, setSenha] = useState('')
    const [Logar, setLogar] = useState('')
    
    const Alertar = async () => {
        try {
            const Resposta = await LocalStorageAdd(Nome, Senha)
            if(Resposta === true){
                setLogar('/teste')
                alert('Conta criada.')
            }
        } catch (erro) {
            alert("Há algo de errado, verifique se você digitou tudo corretamente.")
            alert(localStorage.nome + " boa " + localStorage.senha)
        }
    }
    const Testar = () => {
        if((localStorage.senha === Senha) && (localStorage.nome === Nome)){
            setLogar('/teste')
        }
    }
    useEffect(() => {
        Testar()
    }, [Nome, Senha])
   
    console.log(localStorage)
    console.log(Logar)

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
                    <div className='buttons_container'>
                        <div onClick={Alertar}>
                            <Botao text="Login" />
                        </div>
                        <div>
                            <Link className='Log-button' to={Logar}>
                                <Botao text="Criar conta"  /> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login