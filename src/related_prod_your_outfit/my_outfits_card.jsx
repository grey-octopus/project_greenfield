import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 160
  },
  media: {
    height: 140
  }
});

const MyOutfitsCard = ({ id, category, name, price, photoUrl }) => {
  const classes = useStyles();
  return (
    <Card className={(classes.card, "card")}>
      <CardActionArea>
        <CardMedia className={classes.media} image={photoUrl} title={id} />
        <CardContent>
          <Typography
            gutterBottom
            color="textSecondary"
            component="p"
            style={{ fontSize: "10px" }}
          >
            {category}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ fontSize: "11px", fontWeight: "700" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontSize: "11px" }}
          >
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          stars
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyOutfitsCard;
