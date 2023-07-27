const Validaremail = (email) => {
   return email?.toString().includes('@') && email?.toString().includes('.')
}

const ValidarSenha = (senha) => {
   return senha?.toString().length > 4;
}

export {
    Validaremail, ValidarSenha,
}