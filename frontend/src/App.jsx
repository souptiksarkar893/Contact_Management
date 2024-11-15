// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import EditContactDialog from "./components/EditContactDialog";
import { Container, Typography } from "@mui/material";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addContact = async (contact) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/contacts",
        contact
      );
      setContacts([...contacts, response.data]);
    } catch (error) {
      throw error;
    }
  };

  const updateContact = (id, updatedContact) => {
    axios
      .put(`http://localhost:5000/contacts/${id}`, updatedContact)
      .then((response) =>
        setContacts(
          contacts.map((contact) =>
            contact._id === id ? response.data : contact
          )
        )
      )
      .catch((error) => console.error(error));
  };

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/contacts/${id}`)
      .then(() => setContacts(contacts.filter((contact) => contact._id !== id)))
      .catch((error) => console.error(error));
  };

  const handleEditClick = (contact) => {
    setEditContact(contact);
  };

  const handleEditClose = () => {
    setEditContact(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Management
      </Typography>
      <ContactForm addContact={addContact} />
      <ContactTable
        contacts={contacts}
        onEditClick={handleEditClick}
        deleteContact={deleteContact}
      />
      {editContact && (
        <EditContactDialog
          contact={editContact}
          updateContact={updateContact}
          onClose={handleEditClose}
        />
      )}
    </Container>
  );
};

export default App;
