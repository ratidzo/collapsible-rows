'use client'

import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
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

      <table className='mt-8 w-full'>
        <thead>
          <tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
          </tr>
        </thead>
        <tbody className='relative'>
          <AnimatePresence>
          {items.map((item) => (
            <TR key={item} item={item} removeItem={removeItem} />
          ))}
          </AnimatePresence>
        </tbody>
      </table>

      {/* <ul className='mt-8 border rounded 
         p-8 overflow-hidden'>
        <AnimatePresence initial={false} >
        {items.map((item) => (
          <motion.li 
            key={item}
            initial={{ opacity: 0 , height: 0}}
            animate={{ opacity: 1 , height: "auto"}}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              height: { duration: 0.4}
             }}
          >
           <div className='flex items-center justify-between
           py-2 border-b'>
             <span>Item {item}</span>
             <button onClick={() => removeItem(item)}
             className='border rounded
             w-8 h-8 '>
              &times;
            </button>
           </div>
          </motion.li>
        ))} 
        </AnimatePresence>
      </ul> */}

      {/* <div className='mt-8'>
        <p>
          *Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam provident facilis optio excepturi. Rem, nemo ducimus. Ullam placeat assumenda incidunt cumque, quaerat ea perspiciatis atque cum dolore natus quidem!
        </p>
      </div> */}
    </div>

  )
}

function TR({ item, removeItem }) {
  let isPresent = useIsPresent()
  return (
    <motion.tr
            key={item}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0
            }}
            transition={{ opacity: {duration: .2} }}
            style={{
              position: isPresent ? "relative" : "absolute",
              display: isPresent ? "table-row" : "flex",
              alignItems: isPresent ? "": "center"
            }}
            className="w-full flex"
            >
              <td className='w-1/3'>1: item {item}</td>
              <td className='w-1/3'>2: item {item}</td>
              <td className='w-1/3 text-center'>
                <button onClick={() => removeItem(item)} className='w-8 h-8 border rounded'>
                  &times;
                </button>
              </td>
            </motion.tr>
  )
}