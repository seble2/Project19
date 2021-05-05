import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (

    <div class="row">
     <div class="col s4">
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0009/9555/7491/products/AceQuad-Green_2000x.jpg?v=1602575681"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ACE QUAD
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        90$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>250$</del>
        </Typography> 

      </CardActions>
    </Card>
    </div>

      <div class="col s4">
      
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0009/9555/7491/products/Integrate20-Monument_2000x.jpg?v=1597731196"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            INTEGRATE20
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        50$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>150$</del>
        </Typography> 

      </CardActions>
    </Card>
</div>
      
      <div class="col s4">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0009/9555/7491/products/Opine---Dark-biege_2000x.jpg?v=1594295612"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            OPINE
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        100$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>200$</del>
        </Typography> 

      </CardActions>
    </Card>
    
    </div>

    <div class="col s4">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0009/9555/7491/products/009099441-Uxbridge-TAN_2000x.JPG?v=1568356388"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            UXBRIDGE
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        157$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>260$</del>
        </Typography> 

      </CardActions>
    </Card>
</div>

<div class="col s4">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0009/9555/7491/products/Intruder-White_2000x.jpg?v=1616132960"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            INTRUDER
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        200$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>400$</del>
        </Typography> 

      </CardActions>
    </Card>

</div>

<div class="col s4">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0009/9555/7491/products/RaiderSport-Cloudburst-Black_2000x.jpg?v=1597649831"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            RIDER SPORT
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        150$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>200$</del>
        </Typography> 

      </CardActions>
    </Card>
</div>
</div>
    
  );  
    
  }    
    

