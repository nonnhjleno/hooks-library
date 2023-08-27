import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* タブパネルの内容 */}
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
