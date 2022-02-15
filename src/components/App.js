import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //setting up state to get date and change the main array

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then(itemsArray => setItemsArray(itemsArray))
  }, [])

  //fitler thru array and return every item that has an ID that's not equal to whatever item passed
  function deleteItemsFromState (itemId) {
    const newStateArray = itemsArray.filter(item => item.id !== itemId)
    setItemsArray(newStateArray)
  }
  

// filitering through each item and get a new array(all filter cares about is true or false)
  const filteredItems = itemsArray.filter(item => item.description.includes(searchTerm))
//includes() is method on strings an always returns true or false

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <ListingsContainer deleteItemsFromState= {deleteItemsFromState} itemsArray={filteredItems} />
     </div>
  );
}

export default App;
