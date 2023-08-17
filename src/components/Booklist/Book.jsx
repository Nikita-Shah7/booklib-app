import './Booklist.css';
import { Link } from 'react-router-dom';


function Book(book) {
    // console.log(book.id);
    // console.log(book.cover_img);
    return (
        <div className='book-item flex flex-column flex-sb'>
            <Link to={`/book/${book.id}`} state={book}>
                <div className='book-item-img'>
                    <img src={book.cover_img} alt="cover" />
                </div>
                <div className='book-item-info text-center'>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{book.title}</span>
                    </div>

                    <div className='book-item-info-item author fs-15'>
                        <span className='text-capitalize fw-7'>Author: </span>
                        <span>{book.author ? book.author.join(", ") : "N/A"}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Book;