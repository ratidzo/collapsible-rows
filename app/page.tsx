'use client'

import { useState } from 'react'

export default function Home() {
  
  const [items, setItems] = useState(["one", "two", "three"])

  return (
    <div className="p-20">
      <div className='flex justify-between'>
        <button className='border rounded px-2 py-1'>Remove</button>
        <button className='border rounded px-2 py-1'>Add</button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item} className='border-b'>
            {item}
          </li>
        ))}
      </ul>
    </div>

  )
}