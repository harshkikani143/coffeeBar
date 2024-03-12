import React from 'react';
import { Card, CardMedia, CardContent, } from '@mui/material';

const MyCard = () => {
  return (
    <div>
            <div className='pd-t'>
            OUR TEAM
            </div>
              
          <div className='flewss '>
            
          <Card className='boder' sx={{ maxWidth: 345 }}>
            <CardMedia 
            paddingtop="10opx"
              component="img"
              height="350"
              image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-1.jpg"
              alt="My Image" 
            />
            <CardContent>
              <h2>TIMOTHY OLIVER</h2>
              <p>Barista</p>
            </CardContent>
            
          </Card>

          <Card className='boder' sx={{ maxWidth: 345 }}>
            <CardMedia
            paddingtop="10opx"
              component="img"
              height="350"
              image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-2.jpg"
              alt="My Image" 
            />
            <CardContent>
              <h2>VINCENT DUNCAN</h2>
              <p>Barista</p>
            </CardContent>
            
          </Card>

          <Card className='boder' sx={{ maxWidth: 345 }}>
            <CardMedia
            paddingtop="10opx"
              component="img"
              height="350"
              image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-3.jpg"
              alt="My Image" 
            />
            <CardContent>
              <h2>MARIA RICHARDS</h2>
              <p>Baker</p>
            </CardContent>
            
          </Card>

          <Card className='boder' sx={{ maxWidth: 345 }}>
            <CardMedia
            paddingtop="10opx"
              component="img"
              height="350"
              image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-4.jpg"
              alt="My Image" 
            />
            <CardContent>
              <h2>RALPH ELLIOTT</h2>
              <p>Manager</p>
            </CardContent>
            
          </Card>

          <Card className='boder' sx={{ maxWidth: 345 }}>
            <CardMedia 
            paddingtop="10opx"
              component="img"
              height="350"
              image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-5.jpg"
              alt="My Image" 
            />
            <CardContent>
              <h2>HELEN BAILEY</h2>
              <p>Owner</p>
            </CardContent>
            
          </Card>

          <Card className='boder' sx={{ maxWidth: 345 }}>
            <CardMedia
            paddingtop="10opx"
              component="img"
              height="350"
              image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/our-team-6.jpg"
              alt="My Image" 
            />
            <CardContent>
              <h2>HARRY DANIELS</h2>
              <p>Baker</p>
            </CardContent>
            
          </Card>

          </div>
            </div>
  );
};

export default MyCard;