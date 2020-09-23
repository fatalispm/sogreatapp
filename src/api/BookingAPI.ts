import axios from 'axios';
import {Booking} from "../App";

const API_URL = 'http://localhost:8000';

export async function getBookings(): Promise<{data: {results: Array<Booking>}}> {
    return axios.get(`${API_URL}/api/v1/bookings/`);
}

export async function flipRoom(n: Number, data: Object): Promise<Object> {
    return axios.patch(`${API_URL}/api/v1/bookings/${n}/`, data);
}