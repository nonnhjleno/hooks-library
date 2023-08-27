import {useRef, useState} from 'react'

//値が変更されるたびにinput要素がレンダリングされる

const MemoFunc = () => {
  const inputEl = useRef(null);
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(inputEl.current.value);
  };
  console.log("レンダリング！！");
  return (
    <>
      <input ref={inputEl} type="text" className='border-2 rounded'/>
      <button onClick={handleClick} className='border-2 px-2'>set text</button>
      <p>テキスト : {text}</p>
    </>
  );
};

export default MemoFunc;