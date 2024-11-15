// frontend/src/components/EditContactDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const EditContactDialog = ({ contact, updateContact, onClose }) => {
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact({ ...updatedContact, [name]: value });
  };

  const handleSubmit = () => {
    updateContact(contact._id, updatedContact);
    onClose();
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          name="firstName"
          value={updatedContact.firstName}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={updatedContact.lastName}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Email"
          name="email"
          value={updatedContact.email}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={updatedContact.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Company"
          name="company"
          value={updatedContact.company}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={updatedContact.jobTitle}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditContactDialog;
