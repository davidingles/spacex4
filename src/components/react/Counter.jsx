import { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <p>Count: {count}</p>
            <button class="border-red-400 border-2 p-4" onClick={() => setCount(count + 1)}>+</button>
            <button class="border-red-400 border-2 p-4" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}