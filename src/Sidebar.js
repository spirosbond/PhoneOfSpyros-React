import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import Filters from './Filters'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 350;

function Sidebar({
                  ram_value, setRamValue, 
                  storage_value, setStorageValue, 
                  screensize_value, setScreensizeValue, 
                  wireless_charging_value, setWirelessChargingValue, 
                  water_resist_value, setWaterResistValue,
                  android_os_value, setAndroidOsValue,
                  ios_os_value, setIosOsValue}) {
  
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const drawer = (
    <div>
      <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          <PsychologyAltIcon/>
        </IconButton>

        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            According to Spiros
        </Typography>
      </Toolbar>
      <Divider />
      <Filters  drawerWidth={drawerWidth}
                ram_value={ram_value} setRamValue={setRamValue} 
                storage_value={storage_value} setStorageValue={setStorageValue}
                screensize_value={screensize_value} setScreensizeValue={setScreensizeValue}
                wireless_charging_value={wireless_charging_value} setWirelessChargingValue={setWirelessChargingValue}
                water_resist_value={water_resist_value} setWaterResistValue={setWaterResistValue}
                android_os_value={android_os_value} setAndroidOsValue={setAndroidOsValue}
                ios_os_value={ios_os_value} setIosOsValue={setIosOsValue}
      />
      <Divider />
     </div>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
		// <Drawer
	  //       sx={{
	  //         width: drawerWidth,
	  //         flexShrink: 0,
	  //         '& .MuiDrawer-paper': {
	  //           width: drawerWidth,
	  //           boxSizing: 'border-box',
	  //           background: "#dcedc8"
	  //         },
	  //       }}
	  //       variant="permanent"
	  //       anchor="left"
	  //     >
    //      {drawer}

        
    //   </Drawer>

      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: 'none' },
          top: 'auto', bottom: 0,
          background: "#dcedc8",
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="black">
            Filters - According to Spiros
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="filters drawer"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "#dcedc8", },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "#dcedc8", },
          }}
          open
        >
          {drawer}
        </Drawer>
        </Box>
      </Box>
  	);
}

export default Sidebar