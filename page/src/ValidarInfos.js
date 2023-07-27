const ValidarNome = (nome) => {
   return nome?.toString().includes('@') && nome?.toString().includes('.')
}

const ValidarSenha = (senha) => {
   return senha?.toString().length > 4;
}

export {
    ValidarNome, ValidarSenha,
}