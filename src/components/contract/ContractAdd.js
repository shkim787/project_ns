import React, { createRef, componentDidMount } from "react";
import { post } from "axios";
import "date-fns";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../index.css";
import { toPng } from 'html-to-image';
import styled from 'styled-components'
import $ from "jquery";
window.$ = $;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: none;
  flex-direction: column;

`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
`
const DateText = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 8px;
`
const MainContainer = styled.div`
  width: 100%;
  height: 200px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  margin-bottom: 8px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainText = styled.div`
  font-size: 24px;
`

const SignContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & > * {
    margin-right: 120px;
  }
`

const Sign = styled.div`
  font-size: 20px;
`

const FooterTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`
const Footer = styled.div`
  width: 100%;
  font-size: 14px;
`

let today = new Date()


let canvasRef = createRef()

const styles = (theme) => ({
  box_fullWidth: {
    width: "100%",
    margin: "0 auto",
    marginTop: "20px"
  },
  select2: {
    width: "48%",
    float: "left",
    margin: "0 auto",
    marginTop: "28px"
  },
  btn: {
    fontSize: "15px"
  },
  hidden: {
    display: "none"
  },
});

class ContractAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      file: null,
      fileName: "",
      referenece: "",
      open: false,
      contractHtmlSrc: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.addContract = this.addContract.bind(this);
    this.getcanvas = this.getcanvas.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.contractHtmlRef = createRef()
  }

  handleFormSubmit(e) {
    e.preventDefault();
  
    if (this.state.name === "")
      alert("?????? ?????? ???????????? ???????????????");
    else {
      
        if (window.confirm("????????? ??????????????????????") === true){
        this.addContract().then((response) => {
          this.props.stateRefresh();
        });
      }

      this.setState({
        name: "",
        file: null,
        fileName: "",
        referenece: "",
        open: false,
        contractHtmlSrc: ''
      });
      
    }
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    
    let canvas2 = document.getElementById('canvas');        
    
    this.setState({
      contractHtmlSrc:canvas2.toDataURL()
    });
  }
  getcanvas(){
    let canvas = canvasRef.current
    let ctx = canvas.getContext("2d")

    let img = new Image()
    $('#htmlContainer').show()
    toPng(this.contractHtmlRef.current)
      .then((dataurl) => {

        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height) 
        }
        img.src = dataurl
        
      })
    $('#createBtn').hide()
  }

  addContract() {
    const url = "/api/contract";
    const formData = new FormData();
    formData.append("image", this.state.contractHtmlSrc);
    formData.append("name", this.state.name);
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
        name: "",
        file: null,
        fileName: "",
        referenece: "",
        open: false
    });
  }

  render() {
    const { classes } = this.props;
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
          <DialogTitle>?????? ??????</DialogTitle>
          <DialogContent style={{maxHeight:'700px'}}>
            <Container ref={this.contractHtmlRef} id="htmlContainer">
              <Title>
                Data Backup ?????????
              </Title>
              <DateText>
                DATE : {today.getFullYear()}??? {today.getMonth() + 1}??? {today.getDate()}???
              </DateText>
              <MainContainer>
                <MainText>
                  ??? ????????? ?????? Data??? ???????????? Backup??? ?????? ????????? ???????????????.
                </MainText>
                <SignContainer>
                  <Sign>?????????:</Sign>
                  <Sign>??????</Sign>
                </SignContainer>
              </MainContainer>
              <FooterTitle>[DATA BACKUP??? ?????? ??????]</FooterTitle>
              <Footer>
                Data Backup??? ????????? ??????????????? ????????? Backup??? ?????? ???????????? ????????????. ???????????? ?????? Backup??? ??????????????? ?????? ???????????? ??????????????? ???????????? ????????? ????????? ???????????? ???????????? ????????????
              </Footer>
            </Container>
            
            <canvas ref={canvasRef} width="520" height="430" style={{position: 'relative', left:'50%', transform:'translateX(-50%)',display:'none'}} id="canvas">
              <img src={this.state.contractHtmlSrc} />
            </canvas>
            <Button
              variant="contained"
              color="primary"
              onClick={this.getcanvas}
              id="createBtn"
            >?????? ??????</Button>
            <br/>
            <TextField
              id="outlined-multiline-static"
              label="?????? ???"
              name="name"
              value={this.state.name}
              onChange={this.handleValueChange}
              placeholder="?????? ???"
              variant="outlined"
              className={classes.box_fullWidth}
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

export default withStyles(styles)(ContractAdd);