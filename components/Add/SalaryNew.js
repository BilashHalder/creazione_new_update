import {React,useState} from 'react'
import {Grid,Typography,Box,Button,Stack,TextField,Alert,Snackbar} from '@mui/material';

export default function SalaryNew() {
  //Common States For All
  const [message, setMessage] = useState('This is a success alert — check it out!');
  const [alertShow, setAlertShow] = useState(true);
  const [alertColor, setaAertColor] = useState('error');


//Common Functions For All
 const snackClose=()=>{
  setAlertShow(false);
 } 
 const formHandler=(e)=>{
  e.preventDefault();
  console.log('submit');

 }

 const resetForm=()=>{
  console.log('reset');

 }



  return (
      <Grid container sx={{'px':'5%','textAlign':'center!important','display':'block','my':'2%','fontFamily':'Playfair Display!important'}} >
      <Typography align={'center'} variant={'h5'} sx={{'marginBottom':'5%'}}>Add New Salary Information</Typography>
     <Box component='form' onSubmit={formHandler} >
     <Grid container spacing={2} direction="row">
      <Grid item md={3} xs={6}>
      <TextField label="Basic"  type="number" required fullWidth  InputLabelProps={{ shrink: true}}  />
      </Grid>
      <Grid item md={3} xs={6}>
      <TextField  label="HRA" type="number"  required  fullWidth  InputLabelProps={{ shrink: true}}/>
      </Grid >
      <Grid item md={3} xs={6}>
      <TextField  label="Conveyance	" type="number"  required  fullWidth  InputLabelProps={{ shrink: true}}/>
      </Grid >
      <Grid item md={3} xs={6}>
      <TextField  label="Medical" type="number"  required  fullWidth  InputLabelProps={{ shrink: true}}/>
      </Grid >
      <Grid item md={3} xs={6}>
      <TextField  label="Special" type="number"  required  fullWidth  InputLabelProps={{ shrink: true}}/>
      </Grid >
      <Grid item md={3} xs={6}>
      <TextField  label="Provident Fund" type="number"  required  fullWidth  InputLabelProps={{ shrink: true}}/>
      </Grid >
      <Grid item md={3} xs={6}>
      <TextField  label="Insurance" type="number"  required  fullWidth  InputLabelProps={{ shrink: true}}/>
      </Grid >
      <Grid item md={3} xs={6}>
      <TextField  label="Tax" type="number"  required  fullWidth  InputLabelProps={{ shrink: true}}/>
      </Grid >
      <Grid item md={4} xs={12} >
      <Stack direction="row" spacing={4} sx={{'py':'3%','px':'4%'}}>
      <Button variant="outlined" type={'submit'} color="success">Save</Button>
      <Button variant="outlined" color="error" onClick={resetForm}>Cancel</Button>
     </Stack>
      </Grid>
    </Grid>
     </Box>

      <Snackbar open={alertShow}
        autoHideDuration={2000} onClose={snackClose}>
      <Alert severity={alertColor}>{message}</Alert>
      </Snackbar>

    </Grid>
  )
}
