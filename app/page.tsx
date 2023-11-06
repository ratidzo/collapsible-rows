'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

let x = 3;

export default function Home() {
  
  
  const [items, setItems] = useState([1, 2, 3])

  function addItem() {
    x++;
    setItems((items) => [...items, x])
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
        <AnimatePresence>
        {items.map((item) => (
          <motion.li key={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout 
          className='flex items-center justify-between border-b py-2'>
            <span>Item {item}</span>
            <button onClick={() => removeItem(item)}
             className='border rounded px-2 py-1
             w-8 h-8 '>
              &times;
            </button>
          </motion.li>
        ))} 
        </AnimatePresence>
      </ul>
    </div>

  )
}