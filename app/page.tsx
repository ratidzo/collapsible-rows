'use client'

import { useState } from 'react'

export default function Home() {
  
  const [items, setItems] = useState([1, 2, 3])

  function addItem() {
    setItems((items) => [...items, items.length + 1])
  }

  function removeItem(item: any) {
    setItems((items) => items.filter((i) => i !== item))
  }

  

  return (
    <div className="p-20 text-lg ">
      <div className='flex justify-between'>

        <button onClick={addItem} className='border rounded px-2 py-1'>Add</button>
      </div>

      <ul className='mt-8'>
        {items.map((item) => (
          <li key={item} className='flex items-center justify-between border-b py-2'>
            <span>Item {item}</span>
            <button onClick={() => removeItem(item)}
             className='border rounded px-2 py-1
             w-8 h-8 '>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>

  )
}