import React, { useState, useEffect } from 'react';
import { ListItem, makeStyles, MenuList } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ChargingIcon, GlobeIcon, MeterIcon, SettingsIcon } from '../Icons';


const useStyles = makeStyles((theme) => ({

  nested: {
    paddingLeft: theme.spacing(4),
  },
  list: {
    backgroundColor: '#003778',
    minHeight: '100vh',
    marginTop: -2,
    '& .MuiListItem-root': {
      margin: 0,
      padding: 18,
      justifyContent: 'center',
      '& .MuiListItemIcon-root': {
        minWidth: 'auto',
        '& svg': {
          height: 20
        }
      }
    },

    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
        backgroundColor: '#003778'
      },
      '& .MuiListItemIcon-root': {
        '& .MuiIconButton-root': {
          color: theme.palette.common.white,
        }
      }
    },
  }
}));


const MainListItems = (props) => {
  const classes = useStyles();
  const [menu, setMenu] = useState([])
  const [open, setOpen] = React.useState(false);


  useEffect(() => {
    if (menu.length == 0) {

      setMenu(MenuList)
    }
  }, [menu])


  const SelectPath = (path) => {
    props.history.push(path)
  }
  const handleClick = () => {
    setOpen(!open);
  };

  const selected = (globe) => {
    return props.history.location.pathname.includes(globe) ? true : false
  }


  return (
    <div className={classes.list}>
      <ListItem button selected={selected('meter')}>
        <ListItemIcon>
          <MeterIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button selected={selected('settings')}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button selected={selected('globe')}>
        <ListItemIcon>
          <GlobeIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button selected={selected('charge')}>
        <ListItemIcon>
          <ChargingIcon />
        </ListItemIcon>
      </ListItem>
    </div>
  )
}
export default MainListItems;