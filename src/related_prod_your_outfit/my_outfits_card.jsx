import React from "react";
import {
  addItemToOutfit,
  removeItemFromOutfit
} from "./actions/your_outfit_actions.js";
import { useParams } from "react-router-dom";
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

const addItem = (item, dispatch) => {
  dispatch(addItemToOutfit(item));
};

const removeItem = (id, dispatch) => {
  dispatch(removeItemFromOutfit(id));
};

const MyOutfitsCard = ({ id, category, name, price, photoUrl, dispatch }) => {
  const item = { id, category, name, price, photoUrl };
  console.log("ITEM", item);
  const classes = useStyles();
  const { prodId } = useParams();
  return (
    <div
      className="relatedProducts card"
      style={{ width: "150px", height: "auto", border: "1px solid black" }}
    >
      <p>
        <img src={photoUrl} height="100px"></img>
        {category}
        <br />
        {name}
        <br />
        {price}
      </p>
    </div>
    // <Card className={(classes.card, "card")}>
    //   <CardActionArea>
    //     <CardMedia className={classes.media} image={photoUrl} title={id} />
    //     <CardContent>
    //       <Typography
    //         gutterBottom
    //         color="textSecondary"
    //         component="p"
    //         style={{ fontSize: "10px" }}
    //       >
    //         {category}
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         component="p"
    //         style={{ fontSize: "11px", fontWeight: "700" }}
    //       >
    //         {name}
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         color="textSecondary"
    //         component="p"
    //         style={{ fontSize: "11px" }}
    //       >
    //         ${price}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       stars
    //     </Button>
    //     <button onClick={removeItem(prodId, dispatch)}></button>
    //   </CardActions>
    // </Card>
  );
};

export default MyOutfitsCard;
