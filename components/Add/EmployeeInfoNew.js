import {React,useState} from 'react'
import {Grid,Typography,Box,Button,Stack,Select,MenuItem,FormControl,InputLabel,Switch,FormControlLabel,TextField,Avatar,Divider,Alert,Snackbar,Paper,CircularProgress,Drawer} from '@mui/material';


export default function EmployeeInfoNew(props) {
  //Common States For All
  const {emp_id}=props;
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
  console.log(emp_id)
 }



  return (
      <Grid container sx={{'px':'5%','textAlign':'center!important','display':'block','my':'2%','fontFamily':'Playfair Display!important'}} >
      <Typography align={'center'} variant={'h5'} sx={{'marginBottom':'5%'}}>Add Employee Information</Typography>
     <Box component='form' onSubmit={formHandler} >
     <Grid container spacing={2} direction="row">


     <Grid item md={4} xs={12}>
      <FormControl fullWidth>
        <InputLabel id="designation">Designation</InputLabel>
        <Select label="Designation"  labelId="designation">
          <MenuItem value={1}>Desg1</MenuItem>
          <MenuItem value={2}>Des2</MenuItem>
          <MenuItem value={3}>Des3</MenuItem>
        </Select>
      </FormControl>
      </Grid >

      <Grid item md={4} xs={12}>
      <FormControl fullWidth>
        <InputLabel id="salary">Salary</InputLabel>
        <Select label="Salary"  labelId="Salary">
          <MenuItem value={1}>Desg1</MenuItem>
          <MenuItem value={2}>Des2</MenuItem>
          <MenuItem value={3}>Des3</MenuItem>
        </Select>
      </FormControl>
      </Grid >

      <Grid item md={4} xs={12}>
      <FormControl fullWidth>
        <InputLabel id="report_to">Report To</InputLabel>
        <Select label="Report To"  labelId="report_to">
          <MenuItem value={1}>Desg1</MenuItem>
          <MenuItem value={2}>Des2</MenuItem>
          <MenuItem value={3}>Des3</MenuItem>
        </Select>
      </FormControl>
      </Grid >
      
      <Grid item md={4} xs={12}>
      <TextField label="Joining Date"  type="date" required fullWidth  InputLabelProps={{ shrink: true}}  />
      </Grid>
    
      <Grid item md={4} xs={12}>
      <Button  variant="outlined"  component="label" sx={{'my':'2%'}}>
      Acceptance Letter
  <input type="file"  hidden  />
</Button>
      </Grid>

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
