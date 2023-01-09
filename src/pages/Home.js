//import { useEffect, useState } from 'react';
//import { db } from '../firebase/config';
//import { collection, getDocs } from 'firebase/firestore';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {
  const { user } = useAuthContext();
  const { documents: books } = useCollection('books', ['uid', '==', user.uid]);

  // const [books, setBooks] = useState(null);

  // useEffect(() => {
  //   const ref = collection(db, 'books');
  //   getDocs(ref).then((snapshot) => {
  //     let results = [];
  //     snapshot.docs.forEach((doc) => {
  //       results.push({ id: doc.id, ...doc.data() });
  //     });
  //     setBooks(results);
  //   });
  // }, []);

  return (
    <div className='App'>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
