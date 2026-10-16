import { useState } from "react";

export default function BookingForm(props) {
    const [booking, setBooking] = useState({
        resDate: "",
        resTime: "18:00",
        guests: "2",
        occasion: ""
    });
//Vérification globale des chants pour activer ou non le bouton d'envoi.
    const isFormValid =
        booking.resDate !== "" &&
        booking.resTime !== "" &&
        booking.guests >= 1 &&
        booking.guests <= 10 &&
        booking.occasion !== "";

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBooking({
            ...booking,
            [name]: value
        });

        if (name === "resDate") {
            props.dispatch({ type: 'UPDATE_TIMES', payload: value });
        }
    };
//Empeche le rechargement de la page et transmet les dorrées de résevation
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(booking);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="resDate"
                value={booking.resDate}
                onChange={handleChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="resTime"
                value={booking.resTime}
                onChange={handleChange}
                required
            >
                {props.availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                name="guests"
                value={booking.guests}
                onChange={handleChange}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={booking.occasion}
                onChange={handleChange}
                required
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your reservation"
                disabled={!isFormValid}
                aria-label="On Click"
            />
        </form>
    );
}