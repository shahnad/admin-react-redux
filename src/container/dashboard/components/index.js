import React from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Appbar from "../../../components/Appbar";
import FingerPrintComponent from "../../../components/FingerPrintComponent";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        minHeight: "100vh",
        overflow: "auto",
        backgroundColor: '#E5E5E5'
    },

}));

export default function Dashboard(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar {...props} />

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <FingerPrintComponent {...props} />
                    {props.children}
                </div>
            </main>
        </div>

    );
}
