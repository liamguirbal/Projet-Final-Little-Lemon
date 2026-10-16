// @vitest-environment jsdom
import { test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Body';

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