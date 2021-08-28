import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const ActionButtons = () => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook());

  return (
    <div>
      <button type="button">Comments</button>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
      <button type="button">Edit</button>
    </div>
  );
};

export default ActionButtons;
