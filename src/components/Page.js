import React, {useState, useEffect, useRef} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Banner from './Banner';
import Copyright from './Copyright';
import cards from '../config/cards';
import ShoeCanvas from './ShoeCanvas';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardButton: {
    margin: '10px auto',
    padding: '10px 50px',
    border: '1px solid #3f51b5',
    fontWeight: 'bold'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



const Page = () => {

  const [displayShoeCanvas, setDisplayShoeCanvas] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState()
  const cardsContainer = useRef(null)

  const newClasses = useStyles()

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    cardsContainer.current.scrollIntoView({behavior: 'smooth'})
  }

  const handleSelectedProduct = (e) => {
    console.log(e)
    setDisplayShoeCanvas(!displayShoeCanvas)
    setSelectedProduct(e)
  }

  const handleClose = () => {
    setDisplayShoeCanvas(false)
  }

  return (
    <>
      {
        displayShoeCanvas
        ? <ShoeCanvas handleClose={handleClose} selectedProduct={selectedProduct} />
        :
        <>
          <CssBaseline />
          <AppBar position="fixed" id="header">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Sneaker store 
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <Banner classesInfo={newClasses} handleSmoothScroll={(e) => handleSmoothScroll(e)} />
            <Container className={newClasses.cardGrid} maxWidth="md" ref={cardsContainer}>
              <Typography variant="h2" color="inherit" style={{textAlign:'center', margin: '50px 0'}} noWrap>
                Products
              </Typography>
              <Grid 
                container 
                spacing={4}              
                >
                {cards.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card className={newClasses.card}>
                      <CardMedia
                        className={newClasses.cardMedia}
                        image={card.image}
                        title="Item image"
                      />
                      <CardContent className={newClasses.cardContent}>
                        <Typography gutterBottom variant="h5" component="h4">
                          {card.name}
                        </Typography>
                        <Typography>
                          {card.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button 
                          className={newClasses.cardButton}
                          size="small" 
                          color="primary"
                          onClick={() => handleSelectedProduct(card.name)}
                          >
                          Customize
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          <footer className={newClasses.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Galaxy Shoe Store
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Find your perfect kick
            </Typography>
            <Copyright />
          </footer>
        </>
      }

    </>
  )
}

export default Page