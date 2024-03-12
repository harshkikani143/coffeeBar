import React from 'react'

// import Grid from "@mui/material/Grid";
// import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CardActionArea  from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CardHeader from '@mui/material/CardHeader';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import { red } from '@mui/material/colors';
// import { styled } from '@emotion/styled';
import '../App.css';



const Home = () => {

  
    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

  return (
        <div>

          

          {/* slider */}
            <div>
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D:" alt="" srcset=""  width={1350} height={600} />
            </div>

          {/*product*/}
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


            {/* price */}         
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


            {/* team */}
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


  
          {/* about */}
          <div>
                <div className='pd-t1'>
                    ABOUT US
                </div>
          <div className='w-1140'>
                            
            <div className='round'>
                <div className='w-570' >
                    <p>Cool Down With The New Cold Brew At Roastery Coffee House</p>
                    <pre className='text'>The hint of wine, coupled with the kick of coffee not only makes their cold brew  <br />amazing to sip as-is. You can also tweak the concoction according to taste with <br />scoops of ice cream, slabs of chocolate, or anything that makes you treasure <br />your coffee more<br /><br /></pre>
                    <pre className='text'>
                    Lockdowns and restrictions made it pertinent for  brands to offer coffee that <br />could bebrewed at home, consumers meanwhile found it convenient to brew  <br />their favourite coffee at home 
                        Roastery Coffee was established with the  goal<br />to create great and consistent coffee and share it with as many people as possible<br/><br/><br/>
                        Once they bought the beans or ground coffee, they faced issues on how to brew <br /> hence we started online brewing classes
                    </pre>
                    
                </div>
                <div className='w-570' id='photo'><img src='https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img></div>
            </div>
        </div> 
         </div>
         
         {/* REVIEW */}
         {/* <div >
        <div className='pd-t'>
            THEY ALL LOVE OUR COFFEE
        </div>

        <div className='d-flex'>

        
                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        h
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="HARSH KIKANI"
                    subheader="September 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="260"
                    image="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Evaluated as espresso. Richly chocolaty, floral-toned. Chocolate fudge, pomegranate, narcissus, tangerine zest, gently scorched cedar in aroma and small cup. Tannic, syrupy mouthfeel; crisply chocolaty finish. In cappuccino format, both dark chocolate and narcissus are amplified, backed by tart pomegranate.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>


                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Renish mulsaniya"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="260"
                    image="https://images.unsplash.com/photo-1522210338192-67c5905429d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Elegantly floral, vibrantly fruit-forward. Wisteria, bergamot, frankincense, mangosteen, black and cherry in aroma and cup. Juicy, high-toned and acidity; plush, creamy mouthfeel. Long, lingering, flavor-saturated finish This impressive paella is a perfect party dish and a fun meal to cook that a together.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>



                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        J
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="jena patel"
                    subheader="octomber 11, 2023"
                />
                <CardMedia
                    component="img"
                    display="inline-block"
                    height="260"
                    image="https://images.unsplash.com/photo-1527678357412-ef45dfbd9ecc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    ind tasting 6 exotic and rare types of coffee – and mixing it up with two great classics: Lavazza and illy.

So if you want to impress your family, friends or neighbours (or just want to spoil yourself) with a coffee experience beyond the ordinary, you have come to the right place.
Since a lot of us are so passionate.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
             </div>
          </div> */}


          {/* FOOTER */}
          {/* <div className='flex-1'>
          <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </link>
            <link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </link>
            <link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <link color="inherit" href="https://your-website.com/">
              Your Website
            </link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>    
          </div> */}

         


</div>
    );
};



export default Home;