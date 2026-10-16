import { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './HomePage'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'

export const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI ? window.fetchAPI(today) : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        const selectedDate = new Date(action.payload);
        return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
    }
    return state;
}

function Body() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    const navigate = useNavigate()

    const submitForm = (formData) => {
        const success = window.submitAPI ? window.submitAPI(formData) : true;
        if (success) {
            navigate('/confirmed');
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/booking"
                    element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}

export default Body