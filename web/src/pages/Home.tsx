import React from 'react'
import Header from '../components/Header'

function Home (): JSX.Element {
  return (
    <div className='w-full'>
      <Header />
      <div className="w-full bg-red-100">
        <div className="h-auto m-auto overflow-hidden relative w-auto">
            <ul className="flex w-full animate-scroll">
                <li className="">
                  <img src='https://plus.unsplash.com/premium_photo-1665218521956-15c58d33b6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' />
                </li>
                <li className="">
                  <img src='https://plus.unsplash.com/premium_photo-1665218521956-15c58d33b6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' />
                  </li>
                <li className="">
                  <img src='https://plus.unsplash.com/premium_photo-1665218521956-15c58d33b6fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' />
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
