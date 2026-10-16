import BookingForm from './BookingForm'

function BookingPage(props) {
    return (
        <div style={{ padding: "5rem", textAlign: "center" }}>
            <h1>Réserver une table</h1>
            <BookingForm
                availableTimes={props.availableTimes}
                dispatch={props.dispatch}
                submitForm={props.submitForm}
            />
        </div>
    )
}

export default BookingPage