import React, { useEffect, useState } from "react";
import { getBooks } from "../../api/books";
import { Link } from "react-router-dom";
import { Book } from "../../types";


const Library: React.FC = () => { // todo rename
  const [libraryData, setLibraryData] = useState<any>(null);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const data = await getBooks();
        setLibraryData(data);
      } catch (err) {
        console.error('Error fetching library data:', err);
      }
    };

    fetchLibrary();
  }, []);

  return (
    <div>
      <h1>Library</h1>
      {libraryData && (
        <ul>
          {libraryData.books.map((book: Book) => (
            <li><Link to={`/books/show/${book.id}`}>{ book.title }</Link></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Library;