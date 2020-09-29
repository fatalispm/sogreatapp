import React from 'react';
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        justifyContent: "space-between",
        display: 'flex',
        flexWrap: 'nowrap',
        '& p': {
            paddingLeft: '10px'
        }
    },
});

export default function (props: { address: string }) {
    const styles = useStyles();

    return <div className={styles.container}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
        <p>{props.address}</p>
    </div>
}