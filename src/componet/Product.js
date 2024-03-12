import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard() {
    return (
        <div>
            <div className='flex'>
                    <span id='hk' >PRODUCTS</span>           
                    <span id='hk1'><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png" alt="" /></span>           
                    <span id='hk2' >Coffee is a beloved beverage enjoyed by people worldwide for its rich flavor and stimulating effects.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Originating from the roasted seeds of the Coffea plant </span>           
            </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem' , 	paddingTop:'50px' , paddingLeft:'5px'}}>

       
        <Card sx={{ maxWidth: 380, maxHeight: 420 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              display="block"
              image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Americano
              </Typography>
              <Typography variant="body2" color="text.secondary">
              An Americano is a type of coffee made by adding boiled water to a shot of espresso. It is called an "Americano" because it is similar to the kind of coffee typically served in the United States
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        

        <Card sx={{ maxWidth: 380, maxHeight: 420 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              display="block"
              image="https://images.unsplash.com/photo-1426260193283-c4daed7c2024?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Espresso
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Espresso is brewed by machine, forcing a small amount of nearly boiling water and steam – about 86 to 95 °C (187 to 203 °F) – under pressure through finely ground and compacted coffee
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>



        <Card sx={{ maxWidth: 380, maxHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              display="block"
              image="https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Cortado
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Cortado is a Spanish beverage made by pouring a small amount of espresso in a small glass cup, then cutting it with an equal amount of steamed milk in order to neutralize the bitterness
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
      </div>
      </div>
    );
  }
  