import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface DropdownProps {
  handleSignOutButtonClick: () => void
}

function Dropdown ({ handleSignOutButtonClick }: DropdownProps): JSX.Element {
  const [dropdown, setDropdown] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('user')

    if (token === null || token === '') { setIsAdmin(false); return }

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }

    axios.get('https://make-py-server.onrender.com/auth/admin', { headers })
      .then((res) => {
        if (res.status === 202) { setIsAdmin(true); return }
        setIsAdmin(false)
      })
      .catch(() => { setIsAdmin(false) })
  }, [])

  return (
    <>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-slate-50 focus:outline-none focus:ring-blue-300 rounded-lg text-center max-sm:text-base inline-flex items-center h-fit" type="button" onClick={() => { setDropdown(!dropdown) }}>Conta<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></button>
      <div id="dropdown" className={`${dropdown ? 'absolute' : 'hidden'} z-10 mt-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {isAdmin
              ? <li>
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
              : null}
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dados da conta</a>
            </li>
            <li>
              <button onClick={handleSignOutButtonClick} className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sair</button>
            </li>
          </ul>
      </div>
    </>

  )
}

export default Dropdown
