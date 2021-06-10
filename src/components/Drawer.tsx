import { Avatar, Card, CardContent, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core"
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
    width: 400,
    height: '100%',
    padding: theme.spacing(1),
    background: '#A562C9',
    color: '#ffffff'
  },
  userInfo: {
    padding: theme.spacing(1)
  },
  currentActivity: {
    padding: theme.spacing(1)
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
      <Grid item container
      direction='row' justify='space-between'
      alignItems='center'
      className={classes.userInfo}>
        <Grid item>
          <Typography variant='subtitle2'>
          Your Information
          </Typography>
        </Grid>
         <Grid item>
           <IconButton>
             <CancelOutlinedIcon />
           </IconButton>
         </Grid>
      </Grid>
      <Grid item container direction='row' spacing={3}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item>
          <Typography>User ID</Typography>
          <Typography>User Name</Typography>
        </Grid>

      </Grid>
      <Divider light variant='fullWidth'/>
      <Grid item className={classes.currentActivity}>
        <Typography variant='subtitle2' gutterBottom>
        Current Activity
        </Typography>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Card>
              <CardContent>
                User Name has been joined Rise of Memo
              </CardContent>
            </Card>
          </Grid>
           <Grid item>
            <Card>
              <CardContent>
                User Name added new memo in Todo
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                User Name deleted new memo in Todo
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>


    </Grid>
  </Drawer>
}