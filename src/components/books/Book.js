import PropTypes from 'prop-types';
import BookProgress from './BookProgress';
import ActionButtons from './ActionButtons';

const Book = ({ book }) => {
  const {
    title, category, progress,
  } = book;

  return (
    <div>
      <div>
        <div>
          <h4>{category}</h4>
          <h2>{title}</h2>
        </div>
        <BookProgress progress={progress} />
      </div>
      <ActionButtons />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    // id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: BookProgress.propTypes.progress,
  }).isRequired,
};
export default Book;
