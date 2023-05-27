import React from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

interface PaginationProps {
  lastIndex: number
}

function Pagination ({ lastIndex }: PaginationProps): JSX.Element {
  const pageArray = Object.keys(new Array(lastIndex).fill(null)).map(Number)

  return (
    <nav aria-label="Page navigation" className='max-h-16'>
      <ul className="inline-flex items-center gap-10 border-t border-slate-300 my-6">
        <li>
          <button className="px-3 py-3 ml-0 text-slate-600 hover:border-slate-400 hover:border-t-2">
            <span className="sr-only">Previous</span>
            <BiLeftArrowAlt size={25}/>
          </button>
        </li>
        <ul className='flex'>
          {pageArray.map((pageNumber) => {
            return (
            <li key={pageNumber + 1}>
              <button className="px-3 -mt-1 py-3 text-slate-800 hover:border-slate-400 hover:border-t-2 border-t-2 border-slate-600">{pageNumber + 1}</button>
            </li>
            )
          })}
        </ul>
        <li>
          <button className="px-3 py-3 text-slate-600 hover:text-slate-800 hover:border-t-2 hover:border-slate-400">
            <span className="sr-only">Next</span>
            <BiRightArrowAlt size={25}/>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
