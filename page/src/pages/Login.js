import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ValidarNome, ValidarSenha } from '../ValidarInfos'
import Botao from '../components/button'

const Login = () => {

    const [Loading, setLoading] = useState()
    const [Form, setForm] = useState([])

    const HandleSubmit = async () => {
        try {
            setLoading(true)
            alert('logado')
            setLoading(false)
        }
        catch(erro) {
            alert('Algo deu errado' + erro)
        }
    }

    const HandleChange = (a) => {
        //console.log("Digitando.. ", a.target.name, a.target.value)
        setForm({...Form, [a.target.name] : a.target.value})
        //console.log('form ' + Form.nome + Form.senha)
    }

    const Validar = () => {
        return ValidarNome(Form.nome) && ValidarSenha(Form.senha) 
    }

    console.log('formulario valido?' + Validar())

  return (
    <div className='Login-section'>
        <div className='L-conteudo'>
            <div className='image'>
                {/* imagem */}
            </div> 
            <div className="Login-register">
                <div>
                    <input name='nome' type="text" placeholder="Username" onChange={HandleChange}/>
                    <input name='senha' type="password" placeholder="password" onChange={HandleChange}/>
                    <div>
                        <Link className='Log-button' to="/teste">
                          <Botao type='submit' text="sign in" onClick={HandleSubmit} disabled={Loading === true || !Validar()} /> 
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