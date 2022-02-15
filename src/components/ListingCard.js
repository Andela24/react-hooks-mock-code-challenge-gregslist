import React, {useState} from "react";

function ListingCard( {description, id, image, location, deleteItemsFromState }) {
 
const [toggleLike, setToggleLike] = useState(false)

function handleToggleChange() {
  setToggleLike(currentState => !currentState)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {toggleLike ? (
         <button onClick= {handleToggleChange} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {handleToggleChange}  className="emoji-button favorite">☆</button>
        )}
       

        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick= {() => deleteItemsFromState(id)} className="emoji-button delete">🗑</button>
        {/*() => means don't called this function until its clicked */}

      </div>
    </li>
  );
}

export default ListingCard;
