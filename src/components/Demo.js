import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [num, setNum] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const prime = useMemo(() => findPrime(num), [num]);
    return (
        <div className={
            'border border-black m-4 w-96 p-2 ' + (isDarkTheme && 'bg-slate-400')}
        >

            <div className='my-2'>
                <button className='bg-cyan-300 rounded-lg p-2'
                    onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>
            </div>
            <div className=''>
                <input
                    className='border border-black w-full p-1'
                    type='number'
                    placeholder='Write a number'
                    value={num}
                    onChange={e => setNum(e.target.value)}
                />
            </div>

            <div className='my-2'>
                <h1 className='font-bold text-xl'>
                    nth Prime: {prime}
                </h1>
            </div>
        </div>
    )
}

export default Demo