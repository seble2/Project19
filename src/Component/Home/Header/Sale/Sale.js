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
          image="https://s7d4.scene7.com/is/image/WolverineWorldWide/CATM-P724080-032919-S20-032?wid=300&hei=250&fmt=png-alpha&qlt=80,0&resMode=sharp2&op_usm=1,1,1,0"
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
          image="https://s7d4.scene7.com/is/image/WolverineWorldWide/CATU-P110241-041020-S21-032?wid=300&hei=250&fmt=png-alpha&qlt=80,0&resMode=sharp2&op_usm=1,1,1,0"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MESH
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
       80$
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
          image="https://s7d4.scene7.com/is/image/WolverineWorldWide/CATM-P72593-081219-F11-032?wid=300&hei=250&fmt=png-alpha&qlt=80,0&resMode=sharp2&op_usm=1,1,1,0"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            BOOT
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
          image="https://s7d4.scene7.com/is/image/WolverineWorldWide/CATM-P91177-052819-S20-032?wid=300&hei=250&fmt=png-alpha&qlt=80,0&resMode=sharp2&op_usm=1,1,1,0"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            RIDER
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        66$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>100$</del>
        </Typography> 

      </CardActions>
    </Card>
    </div>

      <div class="col s4">
      
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://s7d4.scene7.com/is/image/WolverineWorldWide/CATU-P110290-041020-S21-032?wid=300&hei=250&fmt=png-alpha&qlt=80,0&resMode=sharp2&op_usm=1,1,1,0"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MERGE
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        70$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>350$</del>
        </Typography> 

      </CardActions>
    </Card>
</div>
      
      <div class="col s4">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://s7d4.scene7.com/is/image/WolverineWorldWide/CATM-P723452-080318-S19-HERO?wid=300&hei=250&fmt=png-alpha&qlt=80,0&resMode=sharp2&op_usm=1,1,1,0"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CASHEW
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
      
       <del style={{color:"red"}}>250$</del>
        </Typography> 

      </CardActions>
    </Card>
    </div>
</div>


   
    
  );  
    
  }    