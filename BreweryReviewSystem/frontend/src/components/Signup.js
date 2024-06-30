import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/register',
