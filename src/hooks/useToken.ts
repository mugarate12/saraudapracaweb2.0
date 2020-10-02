import { useState } from 'react'

function useToken() {
  const [token] = useState(() => {
    const localStorageToken = localStorage.getItem('token')
    const sessionStorageToken = sessionStorage.getItem('token')

    if (!!localStorageToken) {
      return localStorageToken
    } else if (!!sessionStorageToken) {
      return sessionStorageToken
    } else {
      return undefined
    }
  })

  return [token]
}

export default useToken