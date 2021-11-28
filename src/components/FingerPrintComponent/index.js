import React from 'react'
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { FingerPrintIcon, FingerPrintIconBlack } from '../Icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        margin: "auto 30px",
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
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTypography-caption': {
            textAlign: 'center',
            fontSize: 11
        }
    }
}));
export default function FingerPrintComponent(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer} >
                <IconButton size="large" variant="square" className={classes.select}>
                    <FingerPrintIcon />
                </IconButton>
                <Typography variant="caption">KYC</Typography>
            </div>
            <div className={classes.buttonContainer}>
                <IconButton size="large" variant="square" className={classes.icon}>
                    <FingerPrintIconBlack />
                </IconButton>
                <Typography variant="caption">Product
                    Configuration</Typography>
            </div>
            <div className={classes.buttonContainer}>
                <IconButton size="large" variant="square" className={classes.icon}>
                    <FingerPrintIconBlack />
                </IconButton>
                <Typography variant="caption">Operations</Typography>
            </div>
            <div className={classes.buttonContainer}>
                <IconButton size="large" variant="square" className={classes.icon}>
                    <FingerPrintIconBlack />
                </IconButton>
                <Typography variant="caption">Progress
                    Report</Typography>
            </div>
        </div>
    )
}
