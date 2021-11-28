import { Avatar, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography, } from '@material-ui/core'
import React from 'react'
import { makeStyles, styled } from "@material-ui/core";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormHelperText } from '@material-ui/core';
import { AttatchFile, ErrorInfo } from '../../../../../components/Icons';

const useStyles = makeStyles((theme) => ({
    entityForm: {
        display: "flex",
        width: '90%',
        padding: 10,
        maxHeight:theme.spacing(70),
        overflow:'auto',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      
    },
    upload: {
        width: 250,
        '& img': {
            objectFit: 'contain'
        }
    },
    form: {
        width: '100%'
    },
    save: {
        color: 'white',
        paddingLeft: 35,
        paddingRight: 35,

    }


}));

const validationSchema = yup.object({
    legalName: yup
        .string('Enter your Legal Name')
        .required('Legal Name is required'),

});

const Input = styled('input')({
    display: 'none',
});


export default function EntityForm(props) {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            legalName: '',
            image: '',
            cForm: '',
            eDate: '',
            pan: '',
            ieCode: '',
            cRegistration: '',
            orgChart: ''

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className={classes.entityForm}>
            <Grid container spacing={0} direction="row" alignItems="center">
                <form className={classes.form} noValidate onSubmit={formik.handleSubmit}
                    autoComplete="off">
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} md={3}>
                            <Typography variant="body2">Upload Logo *</Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" name="image" id="icon-button-file" type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span" style={{ borderRadius: 0 }}>
                                    <Avatar variant="square" className={classes.upload} alt="ss" src="/image.png" />
                                </IconButton>
                            </label>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} md={3}>
                            <Typography variant="body2">
                                Legal name of the company
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField variant="outlined" onChange={formik.handleChange} fullWidth name="legalName" margin="dense" label="Name" ></TextField>
                        </Grid>
                        {formik.touched.legalName && Boolean(formik.errors.legalName)
                            && <Grid item xs={12} md={5}  style={{ margin: 'auto' }}>
                                <ErrorInfo />
                                <Typography variant="caption" style={{ color: 'red', margin: 'auto 10px' }}>
                                    Required *
                                </Typography>
                            </Grid>}
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item md={3} xs={12}>
                            <Typography variant="body2">
                                Constitution of the form
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField variant="outlined" name="cForm"
                                fullWidth margin="dense" select
                                onChange={formik.handleChange}
                            >
                                {["Private Limited Company"].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}

                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={12} md={3}>
                            <Typography variant="body2">
                                Establishment date *
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} md={4}>
                            <TextField variant="outlined"  onChange={formik.handleChange} name="eDate" type="date" fullWidth margin="dense" ></TextField>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item  xs={12} md={3}>
                            <Typography variant="body2">
                                PAN Number
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} md={4}>
                            <TextField variant="outlined"  onChange={formik.handleChange} name="pan" fullWidth label="ABCDXXXXXX" margin="dense" ></TextField>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item  xs={12} md={3}>
                            <Typography variant="body2">
                                I/E Code (only India)
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} md={4}>
                            <TextField variant="outlined"  onChange={formik.handleChange} name="ieCode" fullWidth label="Text" margin="dense" ></TextField>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item  xs={12} md={3}>
                            <Typography variant="body2">
                                Company Registration Certificate
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField variant="outlined"  onChange={formik.handleChange} name="cRegistration" fullWidth label="Attach your files here" margin="dense"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <AttatchFile />
                                        </InputAdornment>
                                    )
                                }}
                            ></TextField>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item  xs={12} md={3}>
                            <Typography variant="body2">
                                Organisational Chart
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} md={4}>
                            <TextField variant="outlined"  onChange={formik.handleChange} name="orgChart" fullWidth label="Director/ Partner/ Propertiership list" margin="dense"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <AttatchFile />
                                        </InputAdornment>
                                    )
                                }}
                            ></TextField>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <Grid item  xs={3} md={9} style={{ margin: 'auto' }}>
                            {formik.touched.legalName && Boolean(formik.errors.legalName)
                                && <>
                                    <ErrorInfo />
                                    <Typography variant="caption" style={{ color: 'red', margin: 'auto 10px' }}>
                                        Fill the incolpmete information above
                                    </Typography>
                                </>}
                        </Grid>

                        <Grid item xs={3} >
                            <Button variant="contained"  className={classes.save} type="submit" color="secondary">Save</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}
