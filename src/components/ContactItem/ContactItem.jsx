/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <span>
        {name} {number}
      </span>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
