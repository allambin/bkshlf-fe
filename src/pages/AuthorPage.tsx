import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author } from '../types';
import { getAuthor } from '../api/authors';

const AuthorPage = () => {
  const { id } = useParams<{ id: string }>();
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    if (id) {
      const fetchAuthor = async (id: string) => {
        try {
          const data: Author = await getAuthor(id);
          setAuthor(data);
        } catch (err) {
          console.error('Error fetching author data:', err);
        }
      };
  
      fetchAuthor(id);
    }
  }, [id]);

  return <div>
    {author && (
      <ul>
        {author.books.map((book) => (
            book.title
          ))}
      </ul>
    )}
    </div>;
};

export default AuthorPage;