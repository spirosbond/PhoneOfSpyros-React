import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (

	<Paper sx={{ position: 'fixed', bottom: 0, left: '30%', right: '30%' }} elevation={5}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Budget" icon={<AttachMoneyIcon />} />
        <BottomNavigationAction label="Flagship" icon={<AttachMoneyIcon />} icon={<AttachMoneyIcon />} />
          {/*<BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />*/}
        </BottomNavigation>
     </Paper>

	);
}

export default BottomNav;