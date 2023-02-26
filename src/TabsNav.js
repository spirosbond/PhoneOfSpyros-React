import * as React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TabsNav() {
	const [value, setValue] = React.useState(0);

	  const handleChange = (event, newValue) => {
	    setValue(newValue);
	  };
  return (
  	<Paper sx={{
        zindex:'10',
    	}}
    	elevation={0}>
	<Tabs sx={{
			backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
			}} 
          centered value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab icon={<><AttachMoneyIcon/><AttachMoneyIcon/></>} iconPosition="start" label="Flagship" href="/drafts" />
        <LinkTab icon={<AttachMoneyIcon/>} iconPosition="start" label="Budget" href="/drafts" />
    </Tabs>
    </Paper>

  	);
}

export default TabsNav;