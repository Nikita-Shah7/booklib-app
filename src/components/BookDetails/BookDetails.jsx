import './BookDetails.css'
import cover_not_found from '../../images/cover_not_found.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'
import { useEffect, useState } from 'react';

const URL = "https://openlibrary.org/works/";

function BookDetails() {
    const location = useLocation();
    // console.log(location.state);
    const navigate = useNavigate()
    const book = location.state;
    const [desc, setDesc] = useState('');

    const fetchDescription = async () => {
        const api_call = await fetch(`${URL}${location.state.id}.json`);
        const data = await api_call.json();
        let {description} = data;

        if(description) 
        {
            const indexOfBracket = description.indexOf("(");
            description = description.substring(0, indexOfBracket).trim();
            setDesc(description);
        }
        else 
            setDesc("N/A");
    }


    useEffect( () => {
        fetchDescription();
    },[location.state.id]);
   
    return (
        <section className='book-details'>
            <div className='container'>
                <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/")}>
                    <FaArrowLeft size={22} />
                    <span className='fs-18 fw-6'>Go Back</span>
                </button>

                <div className='book-details-content grid'>
                    <div className='book-details-img'>
                        <img src={book?.cover_img} alt="cover img" />
                    </div>
                    <div className='book-details-info'>
                        <div className='book-details-item title'>
                            <span className='fw-6 fs-24'>{book?.title}:</span>
                        </div>
                        <div className='book-details-item description'>
                            <span>{desc}.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDetails;