/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Title, Contacts } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  searchContact = e => this.setState({ filter: e.target.value });

  filterContacts = items =>
    items.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, state, searchContact, filterContacts, deleteContact } =
      this;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} contacts={contacts} />

        <Contacts>Contacts</Contacts>
        <Filter onChange={searchContact} value={filter} />
        <ContactList
          title="Contacts"
          items={filterContacts(contacts)}
          onDelete={deleteContact}
        />
      </Container>
    );
  }
}
