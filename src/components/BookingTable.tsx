import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddressComponent from "./Address";
import FlibButton from "./FlibButton";
import {Booking} from "../App";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


interface Props {
    data: Array<Booking>,
    flip: (id: number) => void
}

export default function BasicTable(props: Props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Move-out Date</TableCell>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Room</TableCell>
                        <TableCell align="left">Location</TableCell>
                        <TableCell align="left">Last occupant</TableCell>
                        <TableCell align="left">UUID</TableCell>
                        <TableCell align="left">Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow key={`${row.id}`}>
                            <TableCell component="th" scope="row">
                                {row.move_out_date}
                            </TableCell>
                            <TableCell align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.room.address}</TableCell>
                            <TableCell align="left">{row.room.number}</TableCell>
                            <TableCell align="left">
                                <AddressComponent address={row.room.address}/>
                            </TableCell>
                            <TableCell align="left">{row.user}</TableCell>
                            <TableCell align="left">{row.uid}</TableCell>
                            <TableCell align="left">{row.balance}</TableCell>
                            <TableCell align="left">
                                <FlibButton onFlip={props.flip} id={row.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}