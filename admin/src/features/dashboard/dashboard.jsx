import React,{useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { mainListItems, secondaryListItems } from './components/listItems';
import MenuItem from '@mui/material/MenuItem';
import MenuDialog from './components/dialog';
import Button from '@mui/material/Button';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent(props) {
    const [open, setOpen] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [formMode, setFormMode] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };
    const handleAdd=()=>{
        setOpenDialog(true)
        setFormMode(true)
    }
    const handleClose = () => {
        setOpenDialog(false);
    }
    const handleEdit = ()=>{
        setFormMode(false)
        setOpenDialog(true)
    }
    const handleLogout = () => {
        localStorage.removeItem('adminUser');
        props.setUserState();
    }
    return (
        <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }} className="product">
            <CssBaseline />
            <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                }}
                >
                <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                Product
                </Typography>
                <IconButton color="inherit" onClick={handleAdd}>
                    <Badge color="secondary">
                        <AddCircleOutlineIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
                <Button variant="contained" className="button-logout" onClick={handleLogout}>Logout</Button>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            height: "100vh",
                        }}
                    >
                        <Grid item xs={3}>
                            <Box
                                sx={{
                                    boxShadow: 3,
                                    bgcolor: 'background.paper',
                                    m: 1,
                                    p: 1,
                                    height: '10rem',
                                    overflow:'hidden',
                                    position:'relative'
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="product__name">Skill park</p>
                                    <div className="product__more">
                                        <i className="fas fa-ellipsis-v"/>
                                        <div className="updateDelete">
                                            <MenuItem onClick={()=>handleEdit()}>Edit</MenuItem>
                                            <MenuItem>Delete</MenuItem>
                                        </div>
                                    </div>
                                </div>
                                <img className="product__img" src="http://nhagodep.com/upload/21/6/10/nha-go-dep-2.jpg" alt=""></img>
                            </Box>
                        </Grid> 
                    </Paper>
                </Grid>
                </Grid>
            </Container>
            </Box>
            <MenuDialog
                open={openDialog}
                close={handleClose}
                formmode={formMode}
                //   fullname={fullname}
                //   position={position}
                //   avatar={avatar}
                //   favorite={favorite}
                //   calendar={calendar}
                //   time={time}
                //   changeFullname={handleFullName}
                //   changePosition={handlePosition}
                //   changeFavorite={handleFavorite}
                //   changeTime={handleTime}
                //   changeAvatar={handleAvatar}
                //   changeCalendar={handleCalendar}
                //   chooseAvatar={handleChooseAvatar}
                //   addCandidate={addCandidateHandle}
                //   updateImage={handleUploadImage}
            />
        </Box>
        </ThemeProvider>
    );
}

export default function Dashboard(props) {
  return <DashboardContent/>;
}