import React from 'react';
import 'date-fns';
import { post } from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const styles = theme =>({
    
    btn:{
        margin:10,
    },
    box_fullWidth: {
        width:'100%',
        margin:"0 auto",
        marginTop:'20px'
    },
    box_halfWidth_right: {
        width:'48%',
        float:'right',
        margin:"0 auto",
        marginTop:'20px'
    },
    box_halfWidth_left: {
        width:'48%',
        float:'left',
        margin:"0 auto",
        marginTop:'20px'
    },
    margin: {
      marginTop:"80px"
    }
});


class JournalUpdate extends React.Component {

    constructor(props) {    
        super(props);
        this.state = {  
          cust_name_list: this.props.cust_name_list,
          manager_name_list: this.props.manager_name_list,
          classification: this.props.c.classification,  
          date : this.props.c.created_date,
          cust_name : this.props.c.cust_name,
          cust_manager :this.props.c.cust_manager,
          serial_no : this.props.c.serial_no,
          case_id : this.props.c.case_id,
          approach : this.props.c.approach,
          contact : this.props.c.contact,
          content : this.props.c.content,
          model : this.props.c.model,
          part : this.props.c.part,
          reference : this.props.c.reference,  
          open: false,
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.selectedDate = this.selectedDate.bind(this)
        this.updateCustomer = this.updateCustomer.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)    
        this.handleClose = this.handleClose.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault()
        if(this.state.title === "" || this.state.date === "" || this.state.content === "")
          alert('????????? ?????? ???????????????')
        else{
          this.updateCustomer()
          .then((response) => {            
              this.props.stateRefresh();
          })   
        }     
    }
  
    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickOpen() {    
        this.setState({
            open: true    
        });
    }
    
    handleClose() {
        this.setState({
            open: false
        })
    }

    selectedDate(e) {
        this.setState({
            date : new Date(e)
        })    
    }
     
    updateCustomer(){
        const url = '/api/journal/' + this.props.c.id;    
        const formData = new FormData();
        formData.append('classification', this.state.classification)
        formData.append('date', this.state.date)
        formData.append('cust_name', this.state.cust_name)
        formData.append('cust_manager', this.state.cust_manager)
        formData.append('serial_no', this.state.serial_no)
        formData.append('case_id', this.state.case_id)
        formData.append('approach', this.state.approach)
        formData.append('contact', this.state.contact)
        formData.append('content', this.state.content)
        formData.append('model', this.state.model)
        formData.append('part', this.state.part)
        formData.append('reference', this.state.reference)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        
        }
        
        return post(url, formData, config)
    }

    render() {
        const { classes } = this.props;
        const makeList1 = (data) => {
          return Object.values(data).map((c) => {
            return <MenuItem value={c.cust_name}>{c.cust_name}</MenuItem>;
          });
        };
        const makeList2 = (data) => {
          return Object.values(data).map((c) => {
            return <MenuItem value={c.name}>{c.name}</MenuItem>;
          });
        };
        return (
          <div>
            <Button variant="contained" color="primary" className={classes.btn} id="update_btn" onClick={this.handleClickOpen}>
                ??????
            </Button>
            <Dialog onClose={this.handleClose} open={this.state.open} className={classes.margin}>
              <DialogTitle onClose={this.handleClose}>
                  ?????? ??????
              </DialogTitle>
              <DialogContent>    
                <FormControl className={classes.box_halfWidth_left}>
                  <InputLabel htmlFor="age-native-simple">??????</InputLabel>
                  <Select labelId="demo-simple-select-label"id="demo-simple-select" label="??????" name="classification" value={this.state.classification} onChange={this.handleValueChange}>
                      <MenuItem value={'??????????????????'}>??????????????????</MenuItem>
                      <MenuItem value={'??????????????????'}>??????????????????</MenuItem>
                  </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="??????"
                    format="MM/dd/yyyy"
                    name="date"
                    value={this.state.date}
                    onChange={this.selectedDate}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                    className={classes.box_halfWidth_right}
                  />
                </MuiPickersUtilsProvider>
                <FormControl className={classes.box_halfWidth_left}>
                  <InputLabel htmlFor="age-native-simple">????????? ???</InputLabel>
                  <Select labelId="demo-simple-select-label"id="demo-simple-select" label="????????? ???" name="cust_name" value={this.state.cust_name} onChange={this.handleValueChange}>
                    {makeList1(this.state.cust_name_list)}
                  </Select>
                </FormControl>
                <FormControl className={classes.box_halfWidth_right}>
                  <InputLabel htmlFor="age-native-simple">????????? ?????????</InputLabel>
                  <Select labelId="demo-simple-select-label"id="demo-simple-select" label="????????? ?????????" name="cust_manager" value={this.state.cust_manager} onChange={this.handleValueChange}>
                    {makeList2(this.state.manager_name_list)}
                  </Select>
                </FormControl>
                <TextField 
                  id="outlined-basic" 
                  label="Serial No / Service Tag" 
                  name="serial_no"
                  value={this.state.serial_no}
                  onChange={this.handleValueChange}
                  variant="outlined"
                  className={classes.box_halfWidth_left}
                  autoComplete="off"
                />
                <TextField 
                  id="outlined-basic" 
                  label="Case ID / Ser No" 
                  name="case_id"
                  value={this.state.case_id}
                  onChange={this.handleValueChange}
                  variant="outlined"
                  className={classes.box_halfWidth_right}
                  autoComplete="off"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="?????? ??????"
                  name="content"
                  multiline
                  rows={5}
                  value={this.state.content}
                  onChange={this.handleValueChange}
                  placeholder="?????? ??????"
                  variant="outlined"
                  className={classes.box_fullWidth}
                  autoComplete="off"
                />
                <TextField 
                  id="outlined-basic" 
                  label="?????? ???" 
                  name="model"
                  value={this.state.model}
                  onChange={this.handleValueChange}
                  variant="outlined"
                  className={classes.box_halfWidth_left}
                  autoComplete="off"
                />
                <TextField 
                  id="outlined-basic" 
                  label="part" 
                  name="part"
                  value={this.state.part}
                  onChange={this.handleValueChange}
                  variant="outlined"
                  className={classes.box_halfWidth_right}
                  autoComplete="off"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="?????? ??????"
                  name="reference"
                  multiline
                  rows={5}
                  value={this.state.reference}
                  onChange={this.handleValueChange}
                  placeholder="?????? ??????"
                  variant="outlined"
                  className={classes.box_fullWidth}
                  autoComplete="off"
                />
                <Typography gutterBottom>
                    *????????? ???????????? ?????? ???????????????.
                </Typography>
              </DialogContent>
              <DialogActions>
                  <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>??????</Button>
                  <Button variant="outlined" color="primary" onClick={this.handleClose}>??????</Button>
              </DialogActions>
            </Dialog>
          </div>
        )
    }
}
     
export default withStyles(styles)(JournalUpdate)