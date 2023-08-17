import './SearchBar.css'
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa'
import { useContext } from 'react';
import { Context } from '../../context';
import ContextProvider from '../../context';


function SearchBar() {

  const { searchTerm, setSearchTerm, setResultItem } = useContext(Context);
  const searchText = useRef('')
  // console.log(searchTerm)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchTerm.replace(/[^\w\s]/gi,""))
    if(searchTerm.length == 0)
    {
      setSearchTerm("the lost world");
      setResultItem("Please Enter Something ...");
      searchText.current.value = ''
    }
  }

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input name='search' type="text" className='form-control' placeholder='The Lost World ...' onChange={(e) => setSearchTerm(e.target.value)} ref = {searchText} />
                <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                  <FaSearch className='text-purple' size={32} />
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;