import React, {useState} from 'react';

import BookingTable from "./components/BookingTable";
import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import {flipRoom, getBookings} from "./api/BookingAPI";

const useStyles = makeStyles({
    titleText: {
        textAlign: 'left'
    }
});

interface Room {
    location: String;
    number: number;
    address: String;
}

export interface Booking {
    id: number;
    user: String;
    uid: number;
    balance: string;
    move_out_date: String;
    room: Room;
}


function App() {
    const styles = useStyles();
    const [data, setData] = useState<Array<Booking>>([]);
    React.useEffect(() => {
        getBookings().then(response => {
            const {results} = response.data;
            setData(results);
        });
    }, []);

    function flip(id: Number) {
        const booking = data.filter(b => b.id === id)[0];
        const info = {balance: parseFloat(booking.balance) + 50};
        flipRoom(id, info).then(
            response => {
                const d = data.map(elem => {
                    if (elem.id === id) {
                        return Object.assign({}, elem, info);
                    }
                    return elem;
                });
                setData(d);
            }
        )

    }

    return (
        <div className="App">
            <Container>
                <h1 className={styles.titleText}>Move-out List</h1>
                <BookingTable data={data} flip={flip}/>
            </Container>
        </div>
    );
}

export default App;
