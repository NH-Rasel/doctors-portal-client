import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ my: 2 }} variant="caption" gutterBottom display="block">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal></>
    );
};

export default Booking;