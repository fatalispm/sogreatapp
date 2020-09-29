import axios from 'axios';
import {Booking} from "../App";

const API_URL = 'http://localhost:8000';

export async function getBookings(): Promise<{data: {results: Array<Booking>}}> {
    return axios.get(`${API_URL}/api/v1/bookings/`);
}

export async function flipRoom(n: number, data: {balance: number}): Promise<null> {
    return axios.patch(`${API_URL}/api/v1/bookings/${n}/`, data);
}

