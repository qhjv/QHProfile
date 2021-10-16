import { Button, Dialog, DialogActions, DialogContent, DialogTitle,TextareaAutosize, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FileBase64 from 'react-file-base64';

MenuDialog.propTypes = {
    
};

function MenuDialog(props) {
    const [data,setData] = React.useState([])
    React.useEffect(() => {
        setData((props.productThis?props.productThis:""))
    }, [props.productThis])
    const handleAddProduct = React.useCallback( (e) => {
        e.preventDefault();
        props.newProduct(data);
    }, [data]);
    return (
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={props.open}
            onClose={props.close}
        >
            <DialogTitle>{props.formmode ? 'Add New' : 'Edit'} Product</DialogTitle>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <DialogContent sx={{display: 'flex',paddingTop:"0"}}>
                        <Grid container xs={6} className="dialog-child">
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="trailer"
                                label="trailer"
                                name="trailer"
                                value={data.trailer}
                                onChange={(e) => setData({ ...data, trailer: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="decription"
                                label="decription"
                                name="decription"
                                value={data.decription}
                                onChange={(e) => setData({ ...data, decription: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="reponsibility"
                                label="reponsibility"
                                name="reponsibility"
                                value={data.reponsibility}
                                onChange={(e) => setData({ ...data, reponsibility: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="technologies"
                                label="technologies"
                                name="technologies"
                                value={data.technologies}
                                onChange={(e) => setData({ ...data, technologies: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="year"
                                label="year"
                                name="year"
                                value={data.year}
                                onChange={(e) => setData({ ...data, year: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="teamSize"
                                label="teamSize"
                                name="teamSize"
                                value={data.teamSize}
                                onChange={(e) => setData({ ...data, teamSize: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="link"
                                label="link"
                                name="link"
                                value={data.link}
                                onChange={(e) => setData({ ...data, link: e.target.value })}
                            />
                            <div className="d-flex flex-column">
                                <label>Image</label>
                                <FileBase64
                                    accept='image/*'
                                    multiple={false}
                                    type='file'
                                    name='img'
                                    value={data.img}
                                    onDone={({ base64 }) => setData({ ...data, img: base64 })}
                                />
                            </div>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={props.close} color="inherit" >Cancer</Button>
                        <Button onClick={handleAddProduct} type="submit" color="primary">{props.formmode ? 'Add' : 'Update'}</Button>
                    </DialogActions>
                </Box>
        </Dialog>
    );
}

export default MenuDialog;