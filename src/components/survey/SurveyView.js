import React from 'react';
import 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import FormGroup from "@material-ui/core/FormGroup";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MuiCheckbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";

const styles = theme =>({
    
  root: {
    fontFamily: "NanumSquare !important",
    margin: "0 auto",
    maxWidth: "1280px",
    padding:20,
    paddingTop:100,
    paddingBottom:100,

  },
  margin: {
    marginTop:"80px"
  },
  font: {
    fontFamily: "NanumSquare !important"
  },
  marginBottom: {
    marginBottom: "50px",
    "& > *":{
      marginTop:10
    },
  },
  hidden: {
    display: "none"
  },
  button: {
    background: "#6bbf24"
  },
  formControl: {
    marginTop: 30,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  text: {
    color: "#313131",
    opacity: 0.7
  },
  btn: {
    fontSize: "15px"
  }
});

const Checkbox = withStyles({
  root: {
    color: "#6bbf24",
    "&$checked": {
      color: "#6bbf24"
    }
  },
  checked: {}
})(MuiCheckbox);


class SurveyView extends React.Component {

    constructor(props) {    
      super(props);
      this.state = {  
        comp_name : this.props.c.comp_name,
        name : this.props.c.name,
        department : this.props.c.department,
        rank : this.props.c.rank,
        contact : this.props.c.contact,
        email : this.props.c.email,
        form1 : this.props.c.form1.split(','),
        form2 : this.props.c.form2.split(','),
        form3 : this.props.c.form3.split(','),
        form4 : this.props.c.form4.split(','),
        form5 : this.props.c.form5.split(','),
        form6 : this.props.c.form6.split(','),
        form7 : this.props.c.form7.split(','),
        poc : this.props.c.poc,
        open:false
      }
      this.handleClickOpen = this.handleClickOpen.bind(this)    
      this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
      this.setState({
        title : this.props.c.title,
        content : this.props.c.content,
        open: false
      })
    }

    handleClickOpen() {    
      this.setState({
          open: true    
      });
    }

    render() {
        const { classes } = this.props;
        return (
          <div>
            <Button variant="contained" color="default" className={classes.btn} id="update_btn" onClick={this.handleClickOpen}>
              ??????
            </Button>
            <Dialog onClose={this.handleClose} open={this.state.open} className={classes.margin}>
              <DialogContent>
                <FormHelperText>
                  ????????? ????????? ????????? ????????? ????????? ????????? ????????? ???????????? ????????????.
                </FormHelperText>

                <FormControl component="fieldset" className={classes.formControl}>
                  <FormGroup className={classes.marginBottom}>
                    <TextField
                      id="custom-css-standard-input"
                      label={<div className={classes.font}>?????????</div>}
                      value={this.state.comp_name}
                    />
                    <TextField
                      id="custom-css-standard-input"
                      label={<div className={classes.font}>??????</div>}
                      value={this.state.name}
                    />
                    <TextField
                      id="custom-css-standard-input"
                      label={<div className={classes.font}>??????</div>}
                      value={this.state.department}
                    />
                    <TextField
                      id="custom-css-standard-input"
                      label={<div className={classes.font}>??????</div>}
                      value={this.state.rank}
                    />
                    <TextField
                      id="custom-css-standard-input"
                      label={<div className={classes.font}>?????????</div>}
                      value={this.state.contact}
                    />
                    <TextField
                      id="custom-css-standard-input"
                      label={<div className={classes.font}>?????????</div>}
                      value={this.state.email}
                    />
                  </FormGroup>

                  <div>(?????? ?????? ?????? ??????)</div>

                  <div>
                    1. ?????? ????????? ??????????????? ?????? ???????????? ???????????? ???????????? ????????????
                    ?????????????
                    
                  </div>
                  <FormGroup className={classes.marginBottom}>
                  {
                  this.state.form1[0] === 'true' ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                          checked
                        />
                      }
                      label={<div className={classes.font}>??????????????? ??????</div>}
                    />
                  ) : 
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                        />
                      }
                      label={<div className={classes.font}>??????????????? ??????</div>}
                    />
                  }
                  {
                  this.state.form1[1] === 'true' ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                          checked
                        />
                      }
                      label={<div className={classes.font}>???????????? ????????? ??????</div>}
                    />
                  ) : 
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                        />
                      }
                      label={<div className={classes.font}>???????????? ????????? ??????</div>}
                    />
                  }
                  {
                  this.state.form1[2] === 'true'? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                          checked
                        />
                      }
                      label={<div className={classes.font}>???????????? ????????????</div>}
                    />
                  ) : 
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                        />
                      }
                      label={<div className={classes.font}>???????????? ????????????</div>}
                    />
                  }
                  {
                  this.state.form1[3] === 'true' ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                          checked
                        />
                      }
                      label={<div className={classes.font}>?????????</div>}
                    />
                  ) : 
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="a1"
                        />
                      }
                      label={<div className={classes.font}>?????????</div>}
                    />
                  }
                  </FormGroup>

                  <div>2. ???????????? ????????????, ????????? ???????????? ?????? ????????????????</div>
                  <FormGroup className={classes.marginBottom}>
                    {
                    this.state.form2[0] === 'true' ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                            checked
                          />
                        }
                        label={<div className={classes.font}>VMware</div>}
                      />
                    ) : 
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                          />
                        }
                        label={<div className={classes.font}>VMware</div>}
                      />
                    }
                    {
                    this.state.form2[1] === 'true' ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                            checked
                          />
                        }
                        label={<div className={classes.font}>Citrix</div>}
                      />
                    ) : 
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                          />
                        }
                        label={<div className={classes.font}>Citrix</div>}
                      />
                    }
                    {
                    this.state.form2[2] === 'true' ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                            checked
                          />
                        }
                        label={<div className={classes.font}>Microsoft</div>}
                      />
                    ) : 
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                          />
                        }
                        label={<div className={classes.font}>Microsoft</div>}
                      />
                    }
                    {
                    this.state.form2[3] !== 'false' ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                            checked
                          />
                        }
                      label={<div className={classes.font}>?????? : {this.state.form2[3]}</div>}
                      />
                    ) : 
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="a1"
                          />
                        }
                        label={<div className={classes.font}>??????</div>}
                      />
                    }
                  </FormGroup>

                  <div>
                    3. ?????????, ??????????????? ?????? ??????????????? ????????? ????????????, ??? ???????????????
                    ????????????????
                  </div>
                  <FormGroup className={classes.marginBottom}>
                    {
                      this.state.form3[0] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>6?????? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>6?????? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form3[1] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>1??? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>1??? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form3[2] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>2??? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>2??? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form3[3] !== 'false' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                        label={<div className={classes.font}>?????? : {this.state.form3[3]}</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>??????</div>}
                        />
                      )
                    }
                  </FormGroup>

                  <div>
                    4. ????????? ????????? ????????? ?????? ??? ?????? ??? ???????????? ???????????? ??????
                    ????????????????
                  </div>
                  <FormGroup className={classes.marginBottom}>
                    {
                        this.state.form4[0] === 'true' ? (
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="a1"
                                checked
                              />
                            }
                            label={<div className={classes.font}>IT ?????? ??????</div>}
                          />
                        ) : 
                        (
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="a1"
                              />
                            }
                            label={<div className={classes.font}>IT ?????? ??????</div>}
                          />
                        )
                    }
                    {
                      this.state.form4[1] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>?????? ????????? ?????? ????????? ???????????? ?????????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>?????? ????????? ?????? ????????? ???????????? ?????????</div>}
                        />
                      )
                    }
                    {
                      this.state.form4[2] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>????????? ???????????? ?????? ?????? ???????????? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>????????? ???????????? ?????? ?????? ???????????? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form4[3] !== 'false' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                        label={<div className={classes.font}>?????? : {this.state.form4[3]}</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>??????</div>}
                        />
                      )
                    }
                  </FormGroup>

                  <div>5. ????????? ????????? ?????? ??? ?????? ??? ??????????????? ????????????????</div>
                  <FormGroup className={classes.marginBottom}>
                    {
                      this.state.form5[0] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>?????? ????????? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>?????? ????????? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form5[1] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>????????? ?????? ????????? ?????? ?????? ??????????????? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>????????? ?????? ????????? ?????? ?????? ??????????????? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form5[2] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>????????? ???????????? ?????? ????????? ????????? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>????????? ???????????? ?????? ????????? ????????? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form5[3] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>????????? ???????????? ?????? ????????? ??? ?????? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>????????? ???????????? ?????? ????????? ??? ?????? ??????</div>}
                        />
                      )
                    }
                    {
                    this.state.form5[4] !== 'false' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>?????? : {this.state.form5[4]}</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>??????</div>}
                        />
                      )
                    }
                  </FormGroup>

                  <div>
                    6. ?????? ????????? ????????? ??? ?????? ????????? ????????? ????????? ????????????
                    ????????????????
                  </div>
                  <FormGroup className={classes.marginBottom}>
                    {
                      this.state.form6[0] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>VMware ?????? ????????? ?????????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>VMware ?????? ????????? ?????????</div>}
                        />
                      )
                    }
                    {
                      this.state.form6[1] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>VMware ???????????? ????????? ?????????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>VMware ???????????? ????????? ?????????</div>}
                        />
                      )
                    }
                    {
                      this.state.form6[2] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>VMware ?????????????????? ????????? ?????????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>VMware ?????????????????? ????????? ?????????</div>}
                        />
                      )
                    }
                  </FormGroup>

                  <div>
                    7. ?????????, ??????????????? ?????? ???????????? ????????? ????????? ????????? ????????????????
                  </div>
                  <FormGroup className={classes.marginBottom}>
                    {
                      this.state.form7[0] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>????????? ?????? ??????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>????????? ?????? ??????</div>}
                        />
                      )
                    }
                    {
                      this.state.form7[1] === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>???????????? ?????????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>???????????? ?????????</div>}
                        />
                      )
                    }   
                    {
                      this.state.form7[2] !== 'false' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>?????? : {this.state.form7[2]}</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>??????</div>}
                        />
                      )
                    }                   
                  </FormGroup>

                  <div>* POC(Proof Of Concept, ?????? ??????)??? ???????????????.</div>
                    {
                      this.state.poc === 'true' ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                              checked
                            />
                          }
                          label={<div className={classes.font}>???, ???????????????</div>}
                        />
                      ) : 
                      (
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="a1"
                            />
                          }
                          label={<div className={classes.font}>???, ???????????????</div>}
                        />
                      )
                    }    
                </FormControl>      
              </DialogContent>
              <DialogActions>
                <Button variant="outlined" color="primary" onClick={this.handleClose}>??????</Button>
              </DialogActions>
            </Dialog>
          </div>
        )
    }
}
     
export default withStyles(styles)(SurveyView)