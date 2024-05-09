import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import SelectedBooks from './components/SelectedBooks';
import ReviewsPage from './components/ReviewsPage';

function App() {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchLibraryData();
    fetchReviews();
  }, []);

  const fetchLibraryData = () => {
    fetch('http://localhost:3001/library')
      .then(response => response.json())
      .then(data => {
        setSelectedBooks(data);
      })
      .catch(error => {
        console.error('Error fetching library data:', error);
      });
  };

  const fetchReviews = () => {
    fetch('http://localhost:3001/reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };

  const addToLibrary = (book) => {
    fetch('http://localhost:3001/library', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Book added to library:', data);
        fetchLibraryData(); // Update library data after adding
      })
      .catch(error => {
        console.error('Error adding book to library:', error);
      });
  };

  const removeFromLibrary = (bookId) => {
    fetch(`http://localhost:3001/library/${bookId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Book removed from library:', data);
        fetchLibraryData(); 
      })
      .catch(error => {
        console.error('Error removing book from library:', error);
      });
  };

  const handleSearch = (query) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Unknown Author',
          image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150',
          publisher: item.volumeInfo.publisher ? item.volumeInfo.publisher : 'Unknown Publisher',
          publishedDate: item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : 'Unknown Date'
        }));

        setSelectedBooks(books);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SearchBar onSearch={handleSearch} />
                <SelectedBooks
                  selectedBooks={selectedBooks}
                  addToLibrary={addToLibrary}
                  removeFromLibrary={removeFromLibrary}
                />
              </div>
            }
          />
          <Route
            path="/library"
            element={<SelectedBooks
              selectedBooks={selectedBooks}
              addToLibrary={addToLibrary}
              removeFromLibrary={removeFromLibrary}
            />}
          />
          <Route
            path="/reviews"
            element={<ReviewsPage reviews={reviews} setReviews={setReviews} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
