import PhoneCard from './PhoneCard'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import CellTowerIcon from '@mui/icons-material/CellTower';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import PowerIcon from '@mui/icons-material/Power';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import Stack from '@mui/material/Stack';

function PhoneRow({phone}) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        // maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      elevation={3}
    >
      <Grid container spacing={2}>
        <Grid item xs={4} md={2}>
            <PhoneCard phone={phone}/>
        </Grid>
        <Grid item xs={8} md={10} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {phone.model}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {phone.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                
                  {phone.features.sort((a, b) => (a.name.name < b.name.name) ? -1 : (a.name.name > b.name.name) ? 1 : 0).map((feature, key) => (
                    <span>
                      {
                        (() => {
                          if(feature.name.name == "ram"){
                            if(feature.value_str >= 8){
                              return(
                                <Chip variant="outlined" color="success" sx={{m:0.3}} label={"RAM: " + feature.value_str} icon={<MemoryIcon />}/>
                              );  
                            } else {
                              return(
                                <Chip variant="outlined" color="error" sx={{m:0.3}} label={"RAM: " + feature.value_str} icon={<MemoryIcon />}/>
                              ); 
                            }
                            
                          }
                        })()
                      }
                      {/*{feature.name.name == "storage" &&
                        <Chip sx={{m:0.3}} label={"Storage: " + feature.value_str} icon={<StorageIcon />}/>
                      }*/}
                      {
                        (() => {
                          if(feature.name.name == "storage"){
                            if(feature.value_str >= 256){
                              return(
                                <Chip variant="outlined" color="success" sx={{m:0.3}} label={"Storage: " + feature.value_str} icon={<MemoryIcon />}/>
                              );  
                            } else {
                              return(
                                <Chip variant="outlined" color="error" sx={{m:0.3}} label={"Storage: " + feature.value_str} icon={<MemoryIcon />}/>
                              ); 
                            }
                            
                          }
                        })()
                      }
                      {/*{feature.name.name == "ip" &&
                        <Chip sx={{m:0.3}} label={"Water Resistant"} icon={<FormatColorResetIcon />}/>
                      }*/}
                      {
                        (() => {
                          if(feature.name.name == "ip"){
                            if(feature.hasFeature){
                              return(
                                <Chip variant="outlined" color="success" sx={{m:0.3}} label={"Water Resistant"} icon={<FormatColorResetIcon />}/>
                              );  
                            } else {
                              return(
                                <Chip variant="outlined" color="error" sx={{m:0.3}} label={"Water Resistant"} icon={<FormatColorResetIcon />}/>
                              ); 
                            }
                            
                          }
                        })()
                      }
                      {feature.name.name == "screen_size" &&
                        <Chip sx={{m:0.3}} label={"Screen Size: " + feature.value_str} icon={<FitScreenIcon />}/>
                      }
                      {feature.name.name == "chipset" &&
                        <Chip sx={{m:0.3}} label={"CPU: " + feature.value_str} icon={<DeveloperBoardIcon />}/>
                      }
                      {/*{feature.name.name == "network" &&
                        <Chip sx={{m:0.3}} label={"Network: " + feature.value_str} icon={<CellTowerIcon />}/>
                      }*/}
                      {/*{feature.name.name == "release_date" &&
                        <Chip sx={{m:0.3}} label={"Realeased: " + feature.value_str} icon={<CropSquareIcon />}/>
                      }*/}
                      {/*{feature.name.name == "price" &&
                        <Chip sx={{m:0.3}} label={"$: " + feature.value_str} icon={<CropSquareIcon />}/>
                      }*/}
                      {/*{feature.name.name == "n_of_sims" &&
                        <Chip sx={{m:0.3}} label={"Sim Cards: " + feature.value_str} icon={<CropSquareIcon />}/>
                      }*/}
                      {/*{feature.name.name == "os" &&
                        <Chip sx={{m:0.3}} label={"OS: " + feature.value_str} icon={<CropSquareIcon />}/>
                      }*/}
                      {/*{feature.name.name == "screen_tech" &&
                        <Chip sx={{m:0.3}} label={"Screen Tech: " + feature.value_str} icon={<CropSquareIcon />}/>
                      }*/}
                      {/*{feature.name.name == "screen_hz" &&
                        <Chip sx={{m:0.3}} label={"Screen Hz: " + feature.value_str} icon={<CropSquareIcon />}/>
                      }*/}
                      {feature.name.name == "wireless_charging" &&
                        <Chip sx={{m:0.3}} label={"Wireless Charging"} icon={<PowerIcon />}/>
                      }
                      {feature.name.name == "battery_size" &&
                        <Chip sx={{m:0.3}} label={"Battery: " + feature.value_str} icon={<Battery6BarIcon />}/>
                      }
                      {feature.name.name == "camera_px" &&
                        <Chip sx={{m:0.3}} label={"Camera: " + feature.value_str} icon={<CameraAltIcon />}/>
                      }

                    </span>
                  ))}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>



  );
}

export default PhoneRow;