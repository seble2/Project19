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
    maxWidth: 400,
  },
  media: {
    height: 390,
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
          image="https://calvinklein.scene7.com/is/image/CalvinKlein/46409942_010_main?wid=730&hei=961&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          CalvinKlein
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        135$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>179$</del>
        </Typography> 

      </CardActions>
    </Card>
    </div>

      <div class="col s4">
      
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://michaelkors.scene7.com/is/image/MichaelKors/30S0GAYB6L-2610_1?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           MICHAEL KORS
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        250$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>500$</del>
        </Typography> 

      </CardActions>
    </Card>
</div>
      
      <div class="col s4">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mcmmm/mcmmm3046413711/mcmmm3046413711_q6_2-0._UX357_QL90_.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           MCM
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
      
       <del style={{color:"red"}}>700$</del>
        </Typography> 

      </CardActions>
    </Card>
    </div>
    <div class="col s4">
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhZAiIPNSiNoL7tMfJNCAftSreMPy8k5-lw&usqp=CAU"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            LUVATON
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        300$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>900$</del>
        </Typography> 

      </CardActions>
    </Card>
    </div>

      <div class="col s4">
      
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn2.jomashop.com/media/catalog/product/cache/76ca28a553ae7feaf63d5d8d3b95ff3e/p/r/prada-ladies-black-leather-backpack---small---1bz051noo2bbe_f0002.jpg?width=546&height=546"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            PRADA
          </Typography>
         {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
        1000$
        </Typography> 
        <Typography gutterBottom variant="h5" component="h2">
      
       <del style={{color:"red"}}>1950$</del>
        </Typography> 

      </CardActions>
    </Card>
</div>
      
      <div class="col s4">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:335/output=quality:90/compress/https://cdn.fs.grailed.com/api/file/fFkhY66T9aLXUmNsgkYt"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gucci
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