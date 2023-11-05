'use client'

import { useState } from 'react'

export default function Home() {
  
  const [items, setItems] = useState([1, 2, 3])

  function addItem() {
    setItems((items) => [...items, items.length + 1])
  }

  return (
    <div className="p-20 text-lg">
      <div className='flex justify-between'>
        <button className='border rounded px-2 py-1'>Remove</button>
        <button onClick={addItem} className='border rounded px-2 py-1'>Add</button>
      </div>

      <ul className='mt-8'>
        {items.map((item) => (
          <li key={item} className='border-b'>
            Item {item}
          </li>
        ))}
      </ul>
    </div>

  )
}