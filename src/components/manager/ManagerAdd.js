import React from "react";
import { post } from "axios";
import "date-fns";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../../index.css";
import $ from "jquery";
window.$ = $;

const styles = (theme) => ({
  box_fullWidth: {
    width: "100%",
    margin: "0 auto",
    marginTop: "20px"
  },
  box_halfWidth_right: {
    width: "48%",
    float: "right",
    margin: "0 auto",
    marginTop: "20px"
  },
  box_halfWidth_left: {
    width: "48%",
    float: "left",
    margin: "0 auto",
    marginTop: "20px"
  },
  checkbox: {
    width: "150px",
    float: "left",
    height: "50px",
    margin: "0 auto",
    marginTop: "26px"
  },
  select1: {
    width: "48%",
    float: "right",
    margin: "0 auto",
    marginTop: "28px"
  },
  select2: {
    width: "48%",
    float: "left",
    margin: "0 auto",
    marginTop: "28px"
  },
  btn: {
    fontSize: "15px"
  }
});

class ManagerAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cust_name_list: this.props.cust_name_list,
      cust_name: "",
      name: "",
      department: "",
      position: "",
      task: "",
      tel1: "",
      tel2: "",
      email: "",
      subemail: "",
      birthday: "",
      decision_power: "",
      edm_type: "",
      referenece: "",
      open: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.addManager = this.addManager.bind(this);
    this.selectedDate = this.selectedDate.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.cust_name === "" || this.state.name === "")
      alert("????????? ???, ???????????? ???????????? ???????????????");
    else {
      this.addManager().then((response) => {
        this.props.stateRefresh();
      });
      this.setState({
        cust_name_list: this.props.cust_name_list,
        cust_name: "",
        name: "",
        department: "",
        position: "",
        task: "",
        tel1: "",
        tel2: "",
        email: "",
        subemail: "",
        birthday: "",
        decision_power: "",
        edm_type: "",
        referenece: "",
        open: false
      });
    }
  }

  selectedDate(e) {
    this.setState({
      date: new Date(e)
    });
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addManager() {
    const url = "/api/managers";
    const formData = new FormData();
    formData.append("cust_name", this.state.cust_name);
    formData.append("name", this.state.name);
    formData.append("department", this.state.department);
    formData.append("position", this.state.position);
    formData.append("task", this.state.task);
    formData.append("tel1", this.state.tel1);
    formData.append("tel2", this.state.tel2);
    formData.append("email", this.state.email);
    formData.append("subemail", this.state.subemail);
    formData.append("birthday", this.state.birthday);
    formData.append("decision_power", this.state.decision_power);
    formData.append("edm_type", this.state.edm_type);
    formData.append("reference", this.state.reference);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  handleClickOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      cust_name_list: this.props.cust_name_list,
      cust_name: "",
      name: "",
      department: "",
      position: "",
      task: "",
      tel1: "",
      tel2: "",
      email: "",
      subemail: "",
      birthday: "",
      decision_power: "",
      edm_type: "",
      referenece: "",
      open: false
    });
  }

  render() {
    const { classes } = this.props;
    const makeList = (data) => {
      return Object.values(data).map((c,i) => {
        return <MenuItem value={c.cust_name} key={i}>{c.cust_name}</MenuItem>;
      });
    };
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
          className={classes.btn}
        >
          ??????
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>????????? ??????</DialogTitle>
          <DialogContent id="manager">
            <FormControl className={classes.select2}>
              <InputLabel htmlFor="age-native-simple">????????? ???</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="????????? ???"
                name="cust_name"
                value={this.state.cust_name}
                onChange={this.handleValueChange}
              >
                {makeList(this.state.cust_name_list)}
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="????????? ?????????"
              name="email"
              value={this.state.email}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_right}
              autoComplete="off"
            />
            <TextField
              id="outlined-basic"
              label="????????? ?????????"
              name="name"
              value={this.state.name}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_left}
              autoComplete="off"
            />
            <TextField
              id="outlined-basic"
              label="????????? Sub ?????????"
              name="subemail"
              value={this.state.subemail}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_right}
              autoComplete="off"
            />
            <TextField
              id="outlined-basic"
              label="????????? ?????????"
              name="department"
              value={this.state.department}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_left}
              autoComplete="off"
            />
            <TextField
              id="outlined-basic"
              label="????????????"
              name="birthday"
              value={this.state.birthday}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_right}
              autoComplete="off"
            />
            <TextField
              id="outlined-basic"
              label="????????? ??????"
              name="position"
              value={this.state.position}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_left}
              autoComplete="off"
            />
            <FormControlLabel
              value="1"
              control={<Checkbox color="primary" />}
              label="????????? ??????"
              name="decision_power"
              onChange={this.handleValueChange}
              className={classes.checkbox}
              labelPlacement="start"
              id="chk_box"
            />
            <TextField
              id="outlined-basic"
              label="????????? ????????????"
              name="task"
              value={this.state.task}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_left}
              autoComplete="off"
            />
            <FormControl className={classes.select1}>
              <InputLabel htmlFor="age-native-simple">EDM ??????</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="EDM ??????"
                name="edm_type"
                value={this.state.edm_type}
                onChange={this.handleValueChange}
              >
                <MenuItem value={"?????????"}>?????????</MenuItem>
                <MenuItem value={"????????????"}>????????????</MenuItem>
                <MenuItem value={"????????????"}>????????????</MenuItem>
                <MenuItem value={"??????"}>??????</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="????????? ????????????"
              name="tel1"
              value={this.state.tel1}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_left}
              autoComplete="off"
            />
            <TextField
              id="outlined-multiline-static"
              label="?????? ??????(??????)"
              name="reference"
              multiline
              rows={5}
              value={this.state.reference}
              onChange={this.handleValueChange}
              placeholder="?????? ??????"
              variant="outlined"
              className={classes.box_halfWidth_right}
              autoComplete="off"
            />
            <TextField
              id="outlined-basic"
              label="????????? ????????????"
              name="tel2"
              value={this.state.tel2}
              onChange={this.handleValueChange}
              variant="outlined"
              className={classes.box_halfWidth_left}
              autoComplete="off"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFormSubmit}
            >
              ??????
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              ??????
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ManagerAdd);
