import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../overview/components/StarRating';
import ActionButton from './comparison_button.jsx';
const placeHolderImage = '/img/image-placeholder.png';
const RelatedProductsCard = ({
  id,
  category,
  name,
  price,
  photoUrl,
  rating,
  features
}) => {
  return (
    <div className="relatedProducts card">
      <ActionButton
        id={id}
        key={id + 'actionbutton'}
        features={features}
        relatedProdName={name}
      />
      <div
        style={{
          backgroundImage: `url(${photoUrl || placeHolderImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          minWidth: '100%',
          height: '300px'
        }}
      ></div>
      <br></br>
      <div className="cardTextContainer">
        <Link to={`/product_details/${id}`}>
          <div className="cardText" style={{ wordBreak: 'all' }}>
            <div className="category">{category}</div>

            <strong className="productTitle">{name}</strong>
            <div className="price">${price}</div>

            {Number.isNaN(Number(rating)) || rating == 0 ? (
              <div>"No Reviews"</div>
            ) : (
              <StarRating averageRating={rating} />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RelatedProductsCard;
