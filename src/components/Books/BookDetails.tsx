import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { getBook } from "../../api/books";
import { Book } from "../../types";

interface BookDetailsProps {
  averageRating: number | null;
  totalReviews: number | null;
}

const BookDetails: React.FC<BookDetailsProps> = ({ averageRating, totalReviews }) => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) {
      const fetchBook = async (id: string) => {
        try {
          const data: Book = await getBook(id);
          setBook(data);
        } catch (err) {
          console.error('Error fetching book data:', err);
        }
      };
  
      fetchBook(id);
    }
  }, [id]);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="book cover" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`http://covers.openlibrary.org/b/isbn/${book?.editions[0]?.isbn10}-L.jpg`} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {
                book?.series && (
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">{ book.series.title } #{ book.series_order }</h2>
                )
              }
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{ book?.title }</h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {book?.authors.map((item, idx) => (
                <Link to={`/authors/show/${item.id}`}>{item.name}</Link>
              ))}
              </h2>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {Array.from({ length: averageRating }, (_, index) => (
                     <svg key={index} fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                  ))}
                  {Array.from({ length: (5 - averageRating) }, (_, index) => (
                     <svg key={index} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                  ))}
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg> */}
                  <span className="text-gray-600 ml-3">{ totalReviews } Reviews</span>
                </span>
                {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"> */}
                {/* </span> */}
              </div>
              <p className="leading-relaxed">{ book?.description }</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookDetails;