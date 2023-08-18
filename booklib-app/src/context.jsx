import React, { createContext, useContext, useEffect, useState } from "react";
const API_URL = "http://openlibrary.org/search.json?title=";


export const Context = createContext()

const ContextProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('the lost world...');
    const [resultItem, setResultItem] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
            const api_call = await fetch(`${API_URL}${searchTerm}`);
            const data = await api_call.json();
            // console.log(data)
            const docs = data.docs.slice(0,20)
            // console.log(docs[0])
            if(docs)
            {
                const newBooks = docs.map( (book) => {
                    const {key, author_name, cover_i, title,} = book;
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        title: title
                    }
                });
                
                setBooks(newBooks);
                // console.log(books)
                
                if(newBooks.length > 1)
                    setResultItem("Your Search Result");
                else 
                    setResultItem("No Search Result Found!");
            }
            else
            {
                setBooks([]);
                setResultItem("No Search Result Found!");
            }
    }

    useEffect( () => {
        fetchBooks();
    },[searchTerm]);

    return(
        <Context.Provider value={{searchTerm,setSearchTerm,resultItem,setResultItem,books,loading}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider};