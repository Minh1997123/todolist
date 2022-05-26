import axios from "axios";
import React, { useEffect } from "react";
import Item from "./component/Item/item";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYgteEuD7Mja5pV3WCmTk55wZvdo_PCxk",
  authDomain: "to-do-list-b5146.firebaseapp.com",
  projectId: "to-do-list-b5146",
  storageBucket: "to-do-list-b5146.appspot.com",
  messagingSenderId: "1040686027617",
  appId: "1:1040686027617:web:cb17e7f2ab3bbc2b9b2b20",
  measurementId: "G-33H4VJWF6X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function App() {
  const [value, setValue] = React.useState("");
  const [listItems, setListItems] = React.useState([]);
  const url = "http://localhost:3000/todo";
  useEffect(() => {
    axios.get(url).then((data) => setListItems((list) => data.data));
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      querySnapshot.forEach((doc) => {
        setListItems((oldArray) => [...oldArray, doc.data()]);
        console.log(listItems);
      });
    };
    getData();
  }, []);

  function addItem(event) {
    if (value) {
      setListItems((list) => [
        ...list,
        { content: value, done: false, id: listItems.length },
      ]);
      setValue("");
    } else {
      axios.delete(url + "/" + 1).then((res) => console.log(res));
    }
  }
  const handleDelete = (value) => {
    axios.delete(url + "/" + value);
    const newList = listItems.filter((item, index) => index !== value);
    setListItems(newList);
  };
  const handlChange = (index, event) => {
    if (event.target.type === "checkbox") {
      listItems[index].done = event.target.checked;
    } else {
      listItems[index].content = event.target.value;
    }
  };
  return (
    <div>
      <div>To Do List</div>
      <div>
        <input
          value={value}
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          autoFocus
        />
        <button onClick={addItem}>ADD</button>
      </div>
      <div>
        {listItems.map((item, index) => {
          return (
            <Item
              item={item.content}
              key={item.content + index}
              onDelete={() => handleDelete(index)}
              onChange={(event) => handlChange(index, event)}
              checked={item.done}
              url={url}
              index={index}
            />
          );
        })}
      </div>
      <button onClick={() => console.log(listItems)}>test</button>
    </div>
  );
}

export default App;
