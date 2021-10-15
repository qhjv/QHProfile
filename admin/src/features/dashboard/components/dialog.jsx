import { Button, Dialog, DialogActions, DialogContent, DialogTitle,TextareaAutosize, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

MenuDialog.propTypes = {
    
};

function MenuDialog(props) {
    
    return (
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={props.open}
            onClose={props.close}
        >
            <DialogTitle>{props.formmode ? 'Add New' : 'Edit'} Product</DialogTitle>
            <ValidatorForm
                onSubmit={props.addCandidate}
            >
                <DialogContent sx={{display: 'flex',paddingTop:"0"}}>
                    <Grid container xs={6} className="dialog-child">
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Name"
                                // onChange={props.changeFullname}
                                name="Name"
                                value={props.fullname}
                                validators={['required']}
                                errorMessages={['hãy nhập trường này !!!']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Link youtube"
                                // onChange={props.changePosition}
                                name="Link youtube"
                                value={props.position}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                style={{ width: "100%",padding:"5px 13px",margin:"15px 0 0 0" }}
                                placeholder="Decription"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Decription"
                                // onChange={props.changePosition}
                                name="Decription"
                                value={props.position}
                                aria-label="maximum height"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Reponsibility"
                                // onChange={props.changePosition}
                                name="Reponsibility"
                                value={props.position}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Technologies"
                                // onChange={props.changePosition}
                                name="Technologies"
                                value={props.position}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Year"
                                // onChange={props.changePosition}
                                name="Year"
                                value={props.position}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Team Size"
                                // onChange={props.changePosition}
                                name="Team Size"
                                value={props.position}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Website"
                                // onChange={props.changePosition}
                                name="Website"
                                value={props.position}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p>Image</p>
                            <input type="file" onChange={props.chooseAvatar}></input>
                        </Grid>
                        
                    </Grid>
                    <Grid container xs={6} className="dialog-child">
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Full Name"
                                // onChange={props.changeFullname}
                                name="fullname"
                                value={props.fullname}
                                validators={['required']}
                                errorMessages={['hãy nhập trường này !!!']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Position"
                                // onChange={props.changePosition}
                                name="position"
                                value={props.position}
                                validators={['required']}
                                errorMessages={['hãy nhập trường này !!!']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p>Image</p>
                            <input type="file" onChange={props.chooseAvatar}></input>
                            <Button onClick={props.updateImage} color="primary">Tải lên</Button>
                        </Grid>
                        
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="inherit" >Cancer</Button>
                    <Button type="submit" color="primary">{props.formmode ? 'Add' : 'Update'}</Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default MenuDialog;