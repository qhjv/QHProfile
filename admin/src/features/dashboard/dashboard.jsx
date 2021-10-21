import React,{useState,useEffect} from 'react';
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
import productApi from '../../api/productApi';
import imgDemoApi from '../../api/imgDemoApi';
import imgNotFound from "../../asset/image/image-not-found.jpg"
import { ToastContainer, toast } from 'react-toastify';
import imgViewApi from '../../api/imgViewApi';

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
    const [product, setProduct] = useState([])
    const [thisProduct,setThisProduct] = React.useState({
        name:"",
        trailer:"",
        decription:"",
        reponsibility:"",
        technologies:"",
        year:"",
        teamSize:"",
        link:"",
        img:"",
        imgProduct:[]
    })

    const getProduct = async()=>{
        (async () => {
            try {
                // setLoading(true)
                const productList = await productApi.getAllProduct();
                setProduct(productList)
                // const action = getMovie(moviesList)
                // dispatch(action)
                // setLoading(false)
                console.log(productList)
            } catch (error) {
                toast.error(`${error.response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })();
    }
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const handleAdd=()=>{
        setThisProduct({
            name:"",
            trailer:"",
            decription:"",
            reponsibility:"",
            technologies:"",
            year:"",
            teamSize:"",
            link:"",
            img:"",
            imgProduct:[],
            imgView:[]
        })
        setOpenDialog(true)
        setFormMode(true)
    }
    const handleClose = () => {
        setOpenDialog(false);
    }
    const handleEdit = (pro)=>{
        (pro.imgProduct).map((p,index)=>{
            setThisProduct({ 
                name:pro.name,
                trailer:pro.trailer,
                decription:pro.decription,
                reponsibility:pro.reponsibility,
                technologies:pro.technologies,
                year:pro.year,
                teamSize:pro.teamSize,
                link:pro.link,
                img:pro.img,
                _id:pro._id,
                imgProduct:pro.imgProduct,
                imgView:pro.imgView
            })
        })
        setFormMode(false)
        setOpenDialog(true)
    }
    const handleDelete = async (id) =>{
        try {
            await productApi.deleteProduct(id);
            getProduct()
            toast.success("successfully deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const callbackFunction = async (childData) => {
        try {
            if(formMode){
                await productApi.createProduct(childData.data);
                await imgDemoApi.createImgDemo(childData.addFile,childData.data.name);
                await imgViewApi.createImgView(childData.addFileImg,childData.data.name);
                getProduct()
                setOpenDialog(false);
                toast.success("add successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else{
                await productApi.updateProduct(childData.data);
                await imgDemoApi.updateImgDemo(childData.addFile,childData.data.name);
                await imgViewApi.updateImgView(childData.addFileImg,childData.data.name);
                getProduct()
                setOpenDialog(false);
                toast.success("update successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.log("failed:",error)
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }} className="product">
            <ToastContainer />
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
                <Button variant="contained" className="button-logout" onClick={props.handleLogout}>Logout</Button>
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
                <Grid item={true} xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                        }}
                        className="paperProduct"
                    >
                        {(product ? product : []).map((pro,index)=>(
                            <Grid item={true} xs={3} key={index} className="paperProduct__grid">
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        bgcolor: 'background.paper',
                                        m: 1,
                                        p: 1,
                                        height: '220px',
                                        overflow:'hidden',
                                        position:'relative'
                                    }}
                                >
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="product__name">{pro.name}</p>
                                        <div className="product__more">
                                            <i className="fas fa-ellipsis-v"/>
                                            <div className="updateDelete">
                                                <MenuItem onClick={()=>handleEdit(pro)}>Edit</MenuItem>
                                                <MenuItem onClick={()=>handleDelete(pro._id)} >Delete</MenuItem>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="product__img" src={(pro.img?pro.img:imgNotFound)} alt={pro.name}></img>
                                </Box>
                            </Grid> 
                        ))}
                    </Paper>
                </Grid>
                </Grid>
            </Container>
            </Box>
            <MenuDialog
                open={openDialog}
                close={handleClose}
                formmode={formMode}
                newProduct={callbackFunction}
                productThis={thisProduct}
            />
        </Box>
        </ThemeProvider>
    );
}

export default function Dashboard(props) {
    const logout = () => {
        localStorage.removeItem('adminUser');
        props.setUserState();
    }
    return <DashboardContent handleLogout={logout}/>;
}