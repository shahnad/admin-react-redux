import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles, } from "@material-ui/core";
import EntityForm from './EntityForm'

const useStyles = makeStyles((theme) => ({
    settings: {
        display: "flex",
    },
    tabs: {
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        '& .MuiTabs-fixed': {
            padding: 3,
            '& .MuiTabs-flexContainer': {

            }
        }
    }

}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

export default function Settings(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<Box display="flex" flexDirection="Column" style={{ width: '100%', marginTop: 10 }}>
        <Box style={{ width: '90%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabs}
                textColor="primary"
                indicatorColor="secondary"
                aria-label="secondary tabs example">
                <Tab label="Entity" />
                <Tab label="Tax Registraton" />
                <Tab label="Rating & Evaluation" />
                <Tab label="Contact Information" />
                <Tab label="Business Hours" />
            </Tabs>

        </Box>
        <Box >
            <TabPanel value={value} index={0}>
                <Box display="flex" flexDirection="row" >
                    <EntityForm {...props} />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item six
            </TabPanel>
        </Box>
    </Box>
    );
}
