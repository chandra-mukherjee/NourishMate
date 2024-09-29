import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 

import User from '../models/user.js';

export const getUsers = async (req, res) => {
    try {
        const USERs = await User.find();

        res.status(200).json(USERs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log('No User found with that id');
    }

    try {
        await User.findByIdAndRemove(id);

        res.json({ message: 'User by that id is successfully deleted' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const signin = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
       
 
 
        if (!existingUser) {
            console.log('User does not exist.');
            return res.status(404).json({ message: 'User does not exist.' });
        }

      
        const checkPassword = await bcrypt.compare(password, existingUser.password);

     
        if (!checkPassword) {
            console.log('Invalid password!');
            return res.status(400).json({ message: 'Invalid password!' });
        }

      
        const token = jwt.sign({ email: existingUser.email, name: existingUser.name, id: existingUser._id }, '@user', { expiresIn: '1h' });
     
        // console.log(token);
     
        res.status(200).json({ userInfo: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'ERROR from user controllers.' });
    }
};

export const signup = async (req, res) => {

    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {

        const existingUser = await User.findOne({ email });

        
        if (existingUser) {
            console.log('User already exists.');
            return res.status(400).json({ message: 'User already exists.' });
        }

        // if no existing user with that info then compare passwords
        if (password !== confirmPassword) {
            console.log('Reapeat password not match');
            return res.status(400).json({ message: 'Reapeat password not match' });
        }

    
        const hashPassword = await bcrypt.hash(password, 2);

    
        const newUser = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}`, role: 'USER' });
      
        // create user token
        const token = jwt.sign({ email: newUser.email, name: newUser.name, id: newUser._id }, '@user', { expiresIn: '1h' });
        // console.log("signup token");
        res.status(200).json({ userInfo: newUser, token });

    } catch (error) {
        res.status(500).json({ message: 'ERROR from user controllers.' });
    }
};
