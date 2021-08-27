import Book from './Book';

const books = [
  {
    genre: 'Action',
    title: 'The Girl',
    author: 'xxxxxxxx',
  },
  {
    genre: 'Science Fiction',
    title: 'yyyyy',
    author: 'zzzzzz',
  },
  {
    genre: 'Economy',
    title: 'aaaaa',
    author: 'bbbbbb',
  },
];

const Books = () => (
  <ul>
    {books.map((book) => (
      <Book key={book.title} book={book} />
    ))}
  </ul>
);

export default Books;
