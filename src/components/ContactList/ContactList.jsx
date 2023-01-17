/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ items, title, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactItem contact={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
