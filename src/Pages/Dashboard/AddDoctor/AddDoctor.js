import React, { useState } from 'react';
import { TextField, Input, Button } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('designation', designation);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                };
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>add a doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Designation"
                    required
                    onChange={e => setDesignation(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    sx={{ width: '50%', m: 2 }}
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button
                    sx={{ m: 2 }}
                    variant="contained"
                    type="submit">
                    Add Doctor
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddDoctor;