// controllers/contactController.js
import {Contact} from '../models/contact.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      phone,
      message
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact message saved successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Error saving contact message' });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ error: 'Error fetching contact messages' });
  }
};