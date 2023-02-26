import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import OpacityIcon from '@mui/icons-material/Opacity';
import CellTowerIcon from '@mui/icons-material/CellTower';

import PhoneCard from './PhoneCard'


function ListItemPhone() {
  return (
	<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PhoneCard/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
         
            <React.Fragment>

              <Chip label="RAM" color="success" icon={<MemoryIcon />}/>
              <Chip label="Storage" color="success" icon={<StorageIcon />}/>
              <Chip label="CPU" color="error" icon={<DeveloperBoardIcon />}/>
              <Chip label="Battery" color="success" icon={<Battery6BarIcon />}/>
              <Chip label="Network" color="success" icon={<CellTowerIcon />}/>
              <Chip label="IP" color="error" icon={<OpacityIcon />}/>
            </React.Fragment>

          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PhoneCard/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  	 );
}

export default ListItemPhone;