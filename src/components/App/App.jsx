import { useEffect, useState } from 'react';
import { fetchImages } from '../../api';
import css from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = topic => {
    setSearchTerm(`${topic}/${Date.now()}`);
    setPage(1);
    setImages([]);
  };
  useEffect(() => {
    if (searchTerm === '') {
      return;
    }

    async function getData() {
      try {
        const data = await fetchImages(searchTerm.split('/')[0], page);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        console.error('Error fetching images:', error);
        return [];
      }
    }

    getData();
  }, [page, searchTerm]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />

      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}

export default App;

/*
import toast, { Toaster } from 'react-hot-toast';



// Коли відбувається http запит?
//   1) Зміна терміну пошуку searchTerm (сабміт форми)
//   2) Зміна номеру групи page (Клnuік по load more)

export default function App() {
   
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    
   

    

    const handleLoadMoreClick = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        
        async function getData() {
            try {
                setError(false);
                setIsLoading(true);
                
                
            } catch {
                setError(true);
                toast.error('Please reload there was an error!!!!');
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [page, searchTerm]);

    return (
        

            {error && <b>Whoops there was an error plz reload...</b>}

            

            {isLoading && <b>Loading data, please wait...</b>}

             {articles.length > 0 && !isLoading && (
                <button onClick={handleLoadMoreClick}>
                    Load more articles {page}
                </button>
            )}
            <Toaster position="top-right" />
       
    );
}*/
