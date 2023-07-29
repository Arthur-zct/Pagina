const LocalStorageAdd = (a,b) => {
    if(a,b) {
        localStorage.setItem("nome", a)
        localStorage.setItem("senha", b)
        return true
    } else {
        return false
    }
}
export {LocalStorageAdd} ;