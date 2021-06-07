import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import CustomizedDialogs from '../components/model/module';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    moduleId:2,
    name:"Quebec",
    img:"https://ca.belocum.com/images/modulelogo/icon_qc.png",
    isModel:true,
  },
  {
    moduleId:5,
    name:"Rest Of Canada",
    img:"https://ca.belocum.com/images/modulelogo/icon_roc.png",
    isModel:true,
  }
];

export default function Pharmacy() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState('');

  const modelContent = () => {

    return(
      <Typography variant="h6" align="center" gutterBottom>
      </Typography>
    );
  };
 
  const handleOpen = (name) => {
    setIsOpen(!isOpen);
    setModelTitle(name);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <CustomizedDialogs modeltitle={modelTitle} modelcontent={modelContent} isDialogOpened={isOpen} handleCloseDialog={() => setIsOpen(false)}>
        
      </CustomizedDialogs>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Belocum
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Where are you from?
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card.moduleId} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea onClick={() => (card.isModel) ? handleOpen(card.name) : '' } href= { (!card.isModel) ? 'pharmacy' : '' }>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.img}
                      title={card.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}