import React from 'react';
import {Button} from "@material-ui/core";

type Props = {
    onFlip: (id: number) => void;
    id: number
};

export default function FlibButton(props: Props) {
    return <Button variant="contained" onClick={() => props.onFlip(props.id)}> Flip room </Button>
}