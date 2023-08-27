import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledButtonGroup = styled(ButtonGroup)({
  '& > *': {
    m: 1,
  },
});

const EffectFunc = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    lastName: '',
    firstName: '',
  });

  // useEffectの第二引数にcountを指定すると、countの値が変更された時だけ副作用関数を実行する。
  useEffect(() => {
    document.title = `${count}回クリックされました`;
  }, [count]);

  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <StyledButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
        <Button onClick={() => setCount(0)}>リセット</Button>
      </StyledButtonGroup>
      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form noValidate autoComplete="off">
        <TextField
          placeholder="姓"
          value={name.lastName}
          onChange={(e) => {
            setName((prevName) => ({ ...prevName, lastName: e.target.value }));
          }}
        />
        <TextField
          placeholder="名"
          value={name.firstName}
          onChange={(e) => {
            setName((prevName) => ({ ...prevName, firstName: e.target.value }));
          }}
        />
      </form>
    </>
  );
};

export default EffectFunc;
