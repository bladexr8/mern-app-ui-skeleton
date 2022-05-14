import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../../assets/images/unicornbike.jpeg'
import {Link} from 'react-router-dom'

// Material-UI styles
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 400
  }
})) 

const Home = () => {
  console.log('***Rendering Home Component...');
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
      <CardMedia className={classes.media} image={unicornbikeImg} title='Unicorn Bicycle' />
      <CardContent>
        <Typography variant="body2" component='p'>
          Welcome to the MERN Skeleton Page
        </Typography>
      </CardContent>
    </Card>
    <Link to="/users">Users</Link><br />
    <Link to="/signup">Sign Up</Link>
    </div>
    
  );
  
}

export default Home;
