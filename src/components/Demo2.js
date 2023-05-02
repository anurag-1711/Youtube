import React, { useRef, useState } from 'react'

const Demo2 = () => {
    let x = 0;

    const [y, setY] = useState(0);

    const ref = useRef(0);

    return (
        <div className='border border-black w-96 m-4 p-2'>
            <div>
                <button className='bg-cyan-200 p-2 m-2'
                    onClick={() => {
                        x += 1;
                        console.log('x -- ' + x);
                    }}
                >
                    Increase x
                </button>
                <span className='font-bold text-xl m-2 p-2'>
                    Let {'-> ' + x}
                </span>
            </div>

            <div>
                <button className='bg-cyan-200 p-2 m-2'
                    onClick={() => {
                        setY(y + 1);
                    }}
                >
                    Increase y
                </button>
                <span className='font-bold text-xl m-2 p-2'>
                    State {'-> ' + y}
                </span>
            </div>

            <div>
                <button className='bg-cyan-200 p-2 m-2'
                    onClick={() => {
                        ref.current += 1
                    }}
                >
                    Increase ref
                </button>
                <span className='font-bold text-xl m-2 p-2'>
                    Ref {'-> ' + ref.current}
                </span>
            </div>
        </div>
    )
}

export default Demo2