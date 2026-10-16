// @vitest-environment jsdom
import { test, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Body';
afterEach(() => {
    cleanup();
});

window.fetchAPI = function(date) {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

test('Renders the static text in BookingForm', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns a non empty array', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns a non empty array when valid date is provided', () => {
    const state = [];
    const action = { type: 'UPDATE_TIMES', payload: '2026-10-16' };
    const result = updateTimes(state, action);
    expect(result.length).toBeGreaterThan(0);
});

test('HTML5 validation attributes are applied', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={() => {}} />);

    expect(screen.getByLabelText("Choose date")).toBeRequired();
    expect(screen.getByLabelText("Choose time")).toBeRequired();
    expect(screen.getByLabelText("Occasion")).toBeRequired();

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});

test('Submit button is disabled if form is invalid', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={() => {}} />);
    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).toBeDisabled();
});

test('Submit button is enabled if form is valid', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={() => {}} />);

    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2026-10-20' } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).not.toBeDisabled();
});