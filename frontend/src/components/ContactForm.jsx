// frontend/src/components/ContactForm.jsx
import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      jobTitle: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company"
            name="company"
            value={contact.company}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Job Title"
            name="jobTitle"
            value={contact.jobTitle}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Contact
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
