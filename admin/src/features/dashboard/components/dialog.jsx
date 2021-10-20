import React,{useState,useEffect,useCallback} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle,TextareaAutosize, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FileBase64 from 'react-file-base64';

MenuDialog.propTypes = {
    
};

function MenuDialog(props) {
    const [data,setData] = useState([])
    const [imgProduct,setImgProduct] = useState([])
    const [addFile, setAddFile] = useState([{src:"",name:""}])
    
    useEffect(() => {
        setData((props.productThis?props.productThis:[]))
    }, [props.productThis])
    useEffect(() => {
        if(props.formmode){
            setAddFile([{src:"",name:""}])
        }else{
            setAddFile(data.imgProduct?data.imgProduct:[])
        }
    }, [data])
    const handleAddProduct = useCallback( (e) => {
        e.preventDefault();
        props.newProduct({data,addFile});
    }, [data,addFile]);
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...addFile];
        list.splice(index, 1);
        setAddFile(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
        setAddFile([...addFile, { src:""}]);
    };
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...addFile];
        list[index][name] = value;
        setAddFile(list);
        console.log(addFile)
      };
      const handleChangeSrc = (base64, index) => {
        const list = [...addFile];
        list[index].src = base64;
        setAddFile(list);
        console.log(addFile)
      };
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
                        <Grid container xs={6} className="dialog-child">
                            <label>Image Demo</label>
                            {addFile.map((x, i) => (
                                <div key={i} >
                                    <TextField
                                        className="nameImgDemo"
                                        margin="normal"
                                        width="200px!important"
                                        required
                                        fullWidth
                                        id="name"
                                        label="name"
                                        name="name"
                                        value={x.name}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                    <div className="d-flex align-items-center">
                                        <FileBase64
                                            accept='image/*'
                                            multiple={false}
                                            type='file'
                                            name='imgProduct'
                                            value={x.src}
                                            onDone={({ base64 }) => handleChangeSrc(base64, i)}
                                        />
                                        <div className="btn-box">
                                            {addFile.length !== 1 && <button className="mr10 remoteImg" onClick={() => handleRemoveClick(i)}>-</button>}
                                            {addFile.length - 1 === i && <button className="addImg" onClick={handleAddClick}>+</button>}
                                        </div>
                                    </div>
                                </div>
                            ))}
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