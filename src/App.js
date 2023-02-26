import PhoneCard from './PhoneCard'
import ListItemPhone from './ListItemPhone'
import PhoneRow from './PhoneRow'
import BottomNav from './BottomNav'
import TabsNav from './TabsNav'
import Filters from './Filters'
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [ram_value, setRamValue] = useState(8);
  const [storage_value, setStorageValue] = useState(256);
  const [screensize_value, setScreensizeValue] = useState([5.2,6.3]);
  const [wireless_charging_value, setWirelessChargingValue] = useState(true);
  const [water_resist_value, setWaterResistValue] = useState(true);
  const [android_os_value, setAndroidOsValue] = useState(true);
  const [ios_os_value, setIosOsValue] = useState(false);
  const [phones, setPhones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/advisor/phones_top_flagship", {
                params: {
                  ram:ram_value,
                  storage:storage_value,
                  screen_size:screensize_value[0] + "," + screensize_value[1],
                  wireless_charging:wireless_charging_value,
                  ip:water_resist_value,
                  os:(android_os_value ? "android" : "" ) + (android_os_value && ios_os_value ? "," : "") + (ios_os_value ? "ios" : "" )
                }
              }
            )
          
      .then((response) => {
        setPhones(response.data);
        setError(null);
      })
      .catch(setError);
    }, [ram_value, 
        storage_value, 
        screensize_value, 
        wireless_charging_value, 
        water_resist_value,
        android_os_value,
        ios_os_value]);
    
    if (error) return <p>An error occurred</p>

  return (
    <Box sx={{ 
          flexGrow: 1,
           }}>
      
      {/*<Container maxWidth="md">*/}
        <Box sx={{ display: 'flex' }}>
          <Sidebar  ram_value={ram_value} setRamValue={setRamValue} 
                    storage_value={storage_value} setStorageValue={setStorageValue}
                    screensize_value={screensize_value} setScreensizeValue={setScreensizeValue}
                    wireless_charging_value={wireless_charging_value} setWirelessChargingValue={setWirelessChargingValue}
                    water_resist_value={water_resist_value} setWaterResistValue={setWaterResistValue}
                    android_os_value={android_os_value} setAndroidOsValue={setAndroidOsValue}
                    ios_os_value={ios_os_value} setIosOsValue={setIosOsValue}
                    />
          <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, pr: 4 ,pl: 4 }}
          >
            {/*<TabsNav />*/}
            {/*<Filters  ram_value={ram_value} setRamValue={setRamValue} 
                      storage_value={storage_value} setStorageValue={setStorageValue}
                      screensize_value={screensize_value} setScreensizeValue={setScreensizeValue}

                      />*/}
            <Grid container spacing={2}>
              {phones.map((phone, key) => (
                <Grid item xs={12}>
                  <PhoneRow phone={phone}/>  
                </Grid>
              ))}
            </Grid>
            {/*<BottomNav/>*/}
          </Box>
        </Box>
      {/*</Container>*/}
    </Box>
   );
}

export default App;
