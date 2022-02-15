
import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { itemsArray, deleteItemsFromState }) {

  //iretate through array of objects and transfor to an array of components
const cardComponents = itemsArray.map(item => <ListingCard key={item.id} {...item} deleteItemsFromState= {deleteItemsFromState}/>)

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {cardComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
