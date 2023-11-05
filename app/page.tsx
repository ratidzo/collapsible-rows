'use client'

import { useState } from 'react'

export default function Home() {
  
  const [items, setItems] = useState(["one", "two", "three"])

  return (
    <div className="p-20">
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