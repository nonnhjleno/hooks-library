import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Redirect from './components/Redirect';

import Counter from './components/useState'
import EffectFunc from './components/useEffect';
import ContextFunc from './components/useContext';
import CallbackFunc from './components/useCallback';
import MemoFunc from './components/useMemo';
import RefFunc from './components/useRef';
import ReducerFunc from './components/useReducer';
import FormFunc from './components/useForm';

// カスタムタブパネルコンポーネント
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index} // valueとindexが異なる場合、このタブパネルは非表示
      id={`simple-tabpanel-${index}`} // タブパネルの一意のID
      aria-labelledby={`simple-tab-${index}`} // タブに関連付けられたラベルのID
      {...other} // 他の属性やプロップスを渡す（必要に応じて）
    >
      {/* 現在のタブが表示されている場合に内容を表示 */}
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography> {/* タブパネルの内容 */}
        </Box>
      )}
    </div>
  );
}

// タブのアクセシビリティプロパティを生成するヘルパー関数
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// メインのタブコンポーネント
export default function BasicTabs() {
  const [value, setValue] = useState(0);

  // タブが切り替えられたときのハンドラー
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* タブのセットアップ */}
        <Tabs variant="scrollable" scrollButtons value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="useState()" {...a11yProps(0)} sx={{width: '200px'}}/>
          <Tab label="useEffect()" {...a11yProps(1)} sx={{width: '200px'}}/>
          <Tab label="useContext()" {...a11yProps(2)} sx={{width: '200px'}}/>
          <Tab label="useCallback()" {...a11yProps(3)} sx={{width: '200px'}}/>
          <Tab label="useMemo()" {...a11yProps(4)} sx={{width: '200px'}}/>
          <Tab label="useRef()" {...a11yProps(5)} sx={{width: '200px'}}/>
          <Tab label="useReducer()" {...a11yProps(6)} sx={{width: '200px'}}/>
          <Tab label="useForm()" {...a11yProps(7)} sx={{width: '200px'}}/>
        </Tabs>
      </Box>
      {/* タブパネルの内容 */}
      <CustomTabPanel value={value} index={0}>
        <Counter />
        <Redirect filename="useState.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EffectFunc />
        <Redirect filename="useEffect.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ContextFunc />
        <Redirect filename="useContext.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CallbackFunc />
        <Redirect filename="useCallback.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <MemoFunc />
        <Redirect filename="useMemo.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <RefFunc />
        <Redirect filename="useRef.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <ReducerFunc />
        <Redirect filename="useRef.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <FormFunc />
        <Redirect filename="useForm.jsx"/>
      </CustomTabPanel>
    </Box>
  );
}
