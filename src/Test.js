import React, { useState } from 'react';
import { Container, Grid, Slider, Checkbox, Card, CardContent, CardMedia, Typography, FormControlLabel, FormGroup } from '@mui/material';

function Test() {
  const [sliders, setSliders] = useState([0, 100]);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const handleSliderChange = (event, newValue) => {
    setSliders(newValue);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxes({ ...checkboxes, [event.target.name]: event.target.checked });
  };

  const items = [
    {
      id: 1,
      image: 'item1.jpg',
      title: 'Item 1',
      description: 'Description for Item 1',
    },
    {
      id: 2,
      image: 'item2.jpg',
      title: 'Item 2',
      description: 'Description for Item 2',
    },
    // Add more items as needed
  ];

  // Filtering logic based on sliders and checkboxes
  const filteredItems = items.filter((item) => {
    const { option1, option2, option3, option4, option5 } = checkboxes;
    const price = item.id; // Replace with the actual item property you want to filter by
    return (
      price >= sliders[0] &&
      price <= sliders[1] &&
      ((option1 && item.option1) ||
      (option2 && item.option2) ||
      (option3 && item.option3) ||
      (option4 && item.option4) ||
      (option5 && item.option5))
    );
  });

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div>
            <Typography variant="h6">Filters</Typography>
            <Slider
              value={sliders}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => value + '$'}
              min={0}
              max={100}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={checkboxes.option1} onChange={handleCheckboxChange} name="option1" />}
                label="Option 1"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.option2} onChange={handleCheckboxChange} name="option2" />}
                label="Option 2"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.option3} onChange={handleCheckboxChange} name="option3" />}
                label="Option 3"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.option4} onChange={handleCheckboxChange} name="option4" />}
                label="Option 4"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.option5} onChange={handleCheckboxChange} name="option5" />}
                label="Option 5"
              />
            </FormGroup>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {filteredItems.map((item) => (
              <Grid item xs={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Test;
