import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import '../App.css';

const CoffeeCard = ({ price, photo }) => {
  return (
<div>
  <div className='pd-t1'>
  $ PRICING $
  </div>
 
<div className='flex-1'>
    <Card className='ob' sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Coffee"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${200}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p classname="h55">
               This is a Cappuccino cup of coffee.
          </p>
        </Typography>
      </CardContent>
    </Card>

    <Card className='ob' sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Coffee"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${140}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p classname="">
               This is a Café au lait cup of coffee.
          </p>
        </Typography>
      </CardContent>
    </Card>


    <Card className='ob' sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Coffee"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${320}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p classname="">This is a white - Macchiato cup of   coffee.</p>
        </Typography>
      </CardContent>
    </Card>



    <Card className='ob' sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Coffee"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${211}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p classname=""> This is a Macchiato cup of &nbsp; coffee. </p>
        </Typography>
      </CardContent>
    </Card>
    
  </div>


 
  </div>
  );
};

export default CoffeeCard;