// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


function PhoneCard({phone}) {
  return (
		<ImageListItem key='Pixel 7'>
          <img
            src={phone.image}
            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt=''
            loading="lazy"
          />
          <ImageListItemBar
            title={phone.model}
            subtitle={"by " + phone.brand.name}
            position="below"

            // actionIcon={
            //   <IconButton
            //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            //     aria-label={`info about 'Pixel 7'`}
            //   >
            //     <InfoIcon />
            //   </IconButton>
            // }
          />
        </ImageListItem>
      );
}

export default PhoneCard;
