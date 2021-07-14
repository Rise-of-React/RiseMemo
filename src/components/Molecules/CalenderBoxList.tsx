import {
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Calender } from '../../types/calender/calender';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PopMenu } from '../Atoms/PopMenu';
import React from 'react';
export interface CalenderBoxListProps {
  lists: Calender[];
}

const useStyle = makeStyles((theme) => ({
  cardArea: (props: CalenderBoxListProps) => ({
    marginTop: 60,
    backgroundColor: theme.palette.primary.light,
    width: 360,
    height: 590,
    borderRadius: 20,
  }),
  ListItemArea: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    borderRadius: 15,
  },
}));

export const CalenderBoxList = (props: CalenderBoxListProps) => {
  const classes = useStyle(props);
  const { lists } = props;
  const [anchorElement, setAnchorElement] = React.useState<null | Element>(null);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      console.log(event.currentTarget);
      setAnchorElement(event.currentTarget);
    },
    [setAnchorElement]
  );

  const handleClose = React.useCallback(() => {
    setAnchorElement(null);
  }, [setAnchorElement]);

  return (
    <Paper elevation={0} variant="outlined" className={classes.cardArea}>
      {lists && (
        <List style={{ padding: 15 }}>
          {lists.map((data, index) => (
            <div key={index}>
              <ListItem className={classes.ListItemArea}>
                <ListItemText>{data.title}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <PopMenu anchorEl={anchorElement} open={Boolean(anchorElement)} onClose={handleClose} />
            </div>
          ))}
        </List>
      )}
    </Paper>
  );
};
