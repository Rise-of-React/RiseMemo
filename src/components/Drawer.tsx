import { Drawer, Grid, makeStyles, Paper } from "@material-ui/core"
import React from "react"
import { User } from "../types/user/user";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
export interface CustomDrawerProps {
  user? : User;
  isOpen: boolean;
  onClose? : () => void;
}

const useStyles = makeStyles((theme)=>({
  drawer: {
    width: 600,
    height: '100%',
    padding: theme.spacing(1),
    background: '#A562C9',
  }
}))

export const CustomDrawer = (props: CustomDrawerProps) => {
  const {user,isOpen,onClose} = props;
  const classes = useStyles();
  const [userState, setUserState] = React.useState<User>();

  React.useEffect(()=>{
    setUserState(user ?? {})
  },[])

  return <Drawer anchor={'right'}
  open={isOpen} >
    <Grid className={classes.drawer}container direction={'column'}>
      <Paper elevation={1}>
      <Grid item>
        <CancelOutlinedIcon />
      </Grid>
      <Grid item></Grid>
      </Paper>

    </Grid>
  </Drawer>
}