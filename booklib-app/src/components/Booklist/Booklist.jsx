import './Booklist.css';
import cover_not_found from '../../images/cover_not_found.jpg'
import Book from '../Booklist/Book';
import { Context } from '../../context';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const API_URL_IMG = "https://covers.openlibrary.org/b/id/"

function BookList() {
    const {resultItem, books} = useContext(Context);

    const booksWithCovers = books.map( (book) => {
        return{
            ...book,
            // removing /works/ to get only id
            id: (book.id).replace("/works/", ""),
            cover_img: book.cover_id ? `${API_URL_IMG}${book.cover_id}-L.jpg` : cover_not_found,
        };
    });

    return (
        <section className='booklist'>
            <div className='container'>
                <div className='section-title'>
                    <b className='heading'>{resultItem}</b>
                    <Link to={'cart'}>
                        <FaShoppingCart className='text-purple' size={25} />
                    </Link>
                </div>
                <div className='booklist-content grid'>
                    {
                        booksWithCovers.map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList;