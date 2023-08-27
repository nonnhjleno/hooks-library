// useState.js

import React, { useState } from 'react';
import '../App.css'

const Counter = () => {
    const initialState = Math.floor(Math.random() * 10) + 1;
    const [count, setCount] = useState(initialState);
    const [isOpen, setIsOpen] = useState(true); // isOpen を使用するように修正

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <button onClick={toggle} className='m-4'>
                {isOpen ? 'Close' : 'Open'}
            </button>
            {/* isOpen クラス名を切り替えて要素を表示/非表示 */}
            <div className={isOpen ? 'isOpen' : 'isClose'}>
                <p>現在の数字は{count}です</p>
                <button onClick={() => setCount(prevState => prevState + 1)} className='mx-3'>
                    + 1
                </button>
                <button onClick={() => setCount(prevState => prevState - 1)} className='mx-3'>
                    - 1
                </button>
                <button onClick={() => setCount(0)} className='mx-3'>0</button>
                <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
            </div>

        </>
    );
};

export default Counter;
