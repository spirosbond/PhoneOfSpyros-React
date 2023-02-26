import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import OpacityIcon from '@mui/icons-material/Opacity';
import CellTowerIcon from '@mui/icons-material/CellTower';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import PowerIcon from '@mui/icons-material/Power';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';

function Filters({drawerWidth,
                  ram_value, setRamValue, 
                  storage_value, setStorageValue, 
                  screensize_value, setScreensizeValue, 
                  wireless_charging_value, setWirelessChargingValue, 
                  water_resist_value, setWaterResistValue,
                  android_os_value, setAndroidOsValue,
                  ios_os_value, setIosOsValue}) {

  const ram_slider_change = (event, newValue) => {
    setRamValue(newValue);
  };

  const storage_slider_change = (event, newValue) => {
    setStorageValue(newValue);
  };

  const screensize_slider_change = (event, newValue) => {
    setScreensizeValue(newValue);
  };

  const handleRAMInputChange = (event) => {
    setRamValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleStorageInputChange = (event) => {
    setStorageValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleScreensizeInputChange = (event) => {
    setScreensizeValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleWirelessChargingChange = (event) => {
    setWirelessChargingValue(event.target.checked);
  };

  const handleWaterResistChange = (event) => {
    setWaterResistValue(event.target.checked);
  };

  const handleAndroidOsChange = (event) => {
    setAndroidOsValue(event.target.checked);
  };

  const handleIosOsChange = (event) => {
    setIosOsValue(event.target.checked);
  };

  return (
	// <Box sx={{ width: 200 }}>
      // <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
    <List>
      <ListItem key="RAM">

        <Box sx={{ width: drawerWidth }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>

            <Typography id="input-slider" gutterBottom>
              Ram
            </Typography>
            </Grid>
            <Grid item>
              <Input
                sx={{ width: 55}}
                disabled
                value={ram_value}
                size="small"
                onChange={handleRAMInputChange}
                // onBlur={handleBlur}
                inputProps={{
                  min:4,
                  max:10,
                  step:2,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
            </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <MemoryIcon />
            </Grid>
            <Grid item xs>
              <Slider 
                aria-label="RAM" 
                min={4} 
                max={10} 
                step={2}
                marks
                // valueLabelDisplay="on" 
                value={ram_value} 
                onChange={ram_slider_change} 
                />
            </Grid>
            
          </Grid>
        </Box>
      </ListItem>

      <ListItem key="Storage">

        <Box sx={{ width: drawerWidth }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>

            <Typography id="input-slider" gutterBottom>
              Storage
            </Typography>
            </Grid>
            <Grid item>
              <Input
                sx={{ width: 55}}
                disabled
                value={storage_value}
                size="small"
                onChange={handleStorageInputChange}
                // onBlur={handleBlur}
                inputProps={{
                  min:128,
                  max:1024,
                  step:128,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
            </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <StorageIcon />
            </Grid>
            <Grid item xs>
              <Slider 
                aria-label="Storage" 
                min={128} 
                max={1024} 
                step={null}
                marks={[
                  {
                    value: 128,
                  },
                  {
                    value: 256,
                  },
                  {
                    value: 512,
                  },
                  {
                    value: 1024,
                  },
                ]}
                // valueLabelDisplay="on" 
                value={storage_value} 
                onChange={storage_slider_change} 
                />
            </Grid>
            
          </Grid>
        </Box>
      </ListItem>

      <ListItem key="Screen">

        <Box sx={{ width: drawerWidth }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>

            <Typography id="input-slider" gutterBottom>
              Screen
            </Typography>
            </Grid>
            <Grid item>
              <Input
                sx={{ width: 55}}
                value={screensize_value}
                size="small"
                disabled
                onChange={handleScreensizeInputChange}
                // onBlur={handleBlur}
                inputProps={{
                  min:5.0,
                  max:7.0,
                  step:0.1,
                  type: 'text',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
            </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <FitScreenIcon />
            </Grid>
            <Grid item xs>
              <Slider 
                aria-label="Screensize" 
                min={5.0} 
                max={7.0} 
                step={0.1}
                marks
                // valueLabelDisplay="on" 
                value={screensize_value} 
                onChange={screensize_slider_change} 
                />
            </Grid>
            
          </Grid>
        </Box>
      </ListItem>
      <Divider />

      <ListItem key="check-boxes">

        <Box sx={{ width: drawerWidth }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>

              <FormGroup>
                <FormLabel id="os-radio-buttons-group-label">Features</FormLabel>
                <FormControlLabel control={<Checkbox checked={wireless_charging_value} onChange={handleWirelessChargingChange} defaultChecked />} label="Wireless Charging" />
                <FormControlLabel control={<Checkbox checked={water_resist_value} onChange={handleWaterResistChange} defaultChecked />} label="Water Resistant" />
                <FormControlLabel disabled control={<Checkbox />} label="5G - not supported yet" />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </ListItem>
      <Divider />

      <ListItem key="radio-buttons">

        <Box sx={{ width: drawerWidth }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>

              <FormGroup>
                <FormLabel id="os-radio-buttons-group-label">OS</FormLabel>
                <FormControlLabel control={<Checkbox checked={android_os_value} onChange={handleAndroidOsChange} defaultChecked />} label="Android" />
                <FormControlLabel control={<Checkbox checked={ios_os_value} onChange={handleIosOsChange} />} label="iOS" />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </ListItem>
    </List>

   	);
}

export default Filters;