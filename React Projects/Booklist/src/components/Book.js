import React, {useState} from 'react'

const booksData = [
{id: 1 , name: "Pather Pachali"},   
{id: 2 , name: "Islamic Gajal"},   
{id: 3 , name: "Hadis Samagro"},   

];

const UseReducer = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  setBooks((prevState) => {
    const newBook = {id: new Date().getTime().toString(), name: bookName }
    
    return [...prevState, newBook]
    
  })
};
  

  return (
    <div>
      <h3>Book List</h3>
      <form onSubmit = {handleSubmit}> 
        <input type="text" value={bookName} 
        onChange = {(e) => {
         setBookName(e.target.value);
        }}
        />
        <button type='submit' >Add your Book </button>
      </form>
      {books.map((book) => {
        const { id, name} = book; 
        return <li key= {id}> {name} </li>
      })}
    </div>
  );
};

export default UseReducer;
