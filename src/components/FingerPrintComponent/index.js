import React from 'react'
import { IconButton, makeStyles } from "@material-ui/core";
import { FingerPrintIcon, FingerPrintIconBlack } from '../Icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        margin: 30,
        flexDirection: 'column',

    },
    select: {
        borderRadius: 10,
        backgroundColor: theme.palette.primary.main,
        margin: '10px auto',
        '&:hover': {

            backgroundColor: 'rgb(14 75 147)'
        }
    },
    icon: {
        borderRadius: 10,
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        margin: '10px auto',
        '& .MuiIconButton-label': {
            '& svg': {
                
                '&:hover': {
                    color: 'white'
                }
            }
        }
    }

}));
export default function FingerPrintComponent(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton size="large" variant="square" className={classes.select}>
                <FingerPrintIcon />
            </IconButton>
            <IconButton size="large" variant="square" className={classes.icon}>
                <FingerPrintIconBlack />
            </IconButton>
            <IconButton size="large" variant="square" className={classes.icon}>
                <FingerPrintIconBlack />
            </IconButton>
            <IconButton size="large" variant="square" className={classes.icon}>
                <FingerPrintIconBlack />
            </IconButton>
        </div>
    )
}
