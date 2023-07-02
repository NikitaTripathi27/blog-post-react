import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Button
} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Blog = (props) => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader title={props.card.title} />
      <CardMedia component="img" image={props.card.image} height="240" />
      <CardContent sx={{height: '7rem'}}>
        <Typography variant="subtitle1" sx={{color: 'orange'}}>{props.card.author}</Typography>
        <Typography variant="h5">{props.card.brief}</Typography>
        <Typography variant="body2">{props.card.content.substring(0, 100)}</Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={1}>
          <Grid item sm={8}>
            <Button variant='outlined'>comments</Button>
          </Grid>
          <Grid item sm={2}>
            <Button startIcon={<ThumbUpIcon />} color='success' />
          </Grid>
          <Grid item sm={2}>
          <Button startIcon={<ThumbDownIcon />} color='error' />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Blog;
