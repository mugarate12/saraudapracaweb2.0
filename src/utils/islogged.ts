import { useHistory } from 'react-router-dom'

const IsLogged = () => {
  const history = useHistory()

  const localStorageToken = localStorage.getItem('token')
  const sessionStorageToken = sessionStorage.getItem('token')

  if (!localStorageToken && !sessionStorageToken) {
    history.push('/')
  }
}

export default IsLogged
