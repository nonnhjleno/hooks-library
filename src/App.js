import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShowCodes from './components/ShowCodes';

import Counter from './components/useState'
import EffectFunc from './components/useEffect';
import ContextFunc from './components/useContext';
import CallbackFunc from './components/useCallback';

//useReducerを作っって、適用してください

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
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="useState()" {...a11yProps(0)} sx={{width: '200px'}}/>
          <Tab label="useEffect()" {...a11yProps(1)} sx={{width: '200px'}}/>
          <Tab label="useContext()" {...a11yProps(2)} sx={{width: '200px'}}/>
          <Tab label="useCallback()" {...a11yProps(3)} sx={{width: '200px'}}/>
        </Tabs>
      </Box>
      {/* タブパネルの内容 */}
      <CustomTabPanel value={value} index={0}>
        <Counter />
        <ShowCodes filename="useState.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EffectFunc />
        <ShowCodes filename="useEffect.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ContextFunc />
        <ShowCodes filename="useContext.jsx"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CallbackFunc />
        <ShowCodes filename="useCallback.jsx"/>
      </CustomTabPanel>
    </Box>
  );
}
