import React, { useState, useEffect } from "react";
import { post } from "axios";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MuiCheckbox from "@material-ui/core/Checkbox";
import MuiTextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import logo from "./../../img/logo.png";
import logo2 from "./../../img/vmwareLogo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "NanumSquare !important",
    color: "#313131",
    padding: 20,
    paddingTop: 100,
    paddingBottom: 100,
    background: "#f8fafc"
  },
  header: {
    position: "absolute",
    top: "20px",
    left: "30px"
  },
  container: {
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "1280px"
  },
  font: {
    fontFamily: "NanumSquare !important",
    color: "#626262"
  },
  helperText: {
    fontFamily: "NanumSquare !important",
    textAlign: "center",
    fontSize: "18px"
  },
  question: {
    fontSize: "22px",
    marginBottom: "10px",
    textAlign: "left"
  },
  formGroup: {
    marginBottom: "50px",
    padding: "30px",
    background: "#ffffff",
    border: "1px solid #eeeeee",
    borderRadius: "15px"
  },
  hidden: {
    display: "none"
  },
  etc: {
    paddingTop: "25px"
  },
  button: {
    background: "#6bbf24",
    color: "#ffffff",
    width: "300px",
    borderRadius: "30px",
    "&:hover": {
      background: "#64A538"
    }
  },
  formControl: {
    marginTop: 20,
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
}));

const Checkbox = withStyles({
  root: {
    color: "#626262",
    "&$checked": {
      color: "#6bbf24"
    }
  },
  checked: {}
})(MuiCheckbox);

const TextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#6bbf24"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#6bbf24"
    }
  }
})(MuiTextField);

const Survey = ({ history }) => {
  const [state, setState] = useState({
    comp_name: "",
    name: "",
    department: "",
    rank: "",
    contact: "",
    email: "",
    form1: [false, false, false, false],
    form2: [false, false, false, false],
    form3: [false, false, false, false],
    form4: [false, false, false, false],
    form5: [false, false, false, false, false],
    form6: [false, false, false],
    form7: [false, false, false],
    poc: [false],
    form2Etc: "",
    form3Etc: "",
    form4Etc: "",
    form5Etc: "",
    form7Etc: ""
  });

  const initState = () =>
    setState({
      comp_name: "",
      name: "",
      department: "",
      rank: "",
      contact: "",
      email: "",
      form1: [false, false, false, false],
      form2: [false, false, false, false],
      form3: [false, false, false, false],
      form4: [false, false, false, false],
      form5: [false, false, false, false, false],
      form6: [false, false, false],
      form7: [false, false, false],
      poc: [false],
      form2Etc: "",
      form3Etc: "",
      form4Etc: "",
      form5Etc: "",
      form7Etc: ""
    });

  useEffect(() => {
    initState();
  }, []);

  const isChecked = (question, number) => {
    // console.log("isChecked");
    return state[question][number];
  };

  const handleChange = (question, number) => () => {
    setState((preState) => ({
      ...preState,
      question: preState[question].splice(
        number,
        1,
        !isChecked(question, number)
      )
    }));
  };

  const handleChangeText = (type) => (e) =>
    setState({
      ...state,
      [type]: e.target.value
    });

  const handleChangeEtc = (question) => (e) =>
    setState({
      ...state,
      [question]: e.target.value
    });

  const handleFormSubmit = (e) => {
    if (state.comp_name === "") alert("???????????? ?????????????????????.");
    else if (state.name === "") alert("????????? ?????????????????????.");
    else if (state.contact === "") alert("???????????? ?????????????????????.");
    else {
      postSurvey().then((res) => {
        initState();
        alert("?????????????????????.");
        history.goBack();
      });
    }
  };

  const postSurvey = () => {
    const url = "/api/survey";
    const formData = new FormData();
    const survey = mapSurvey();

    for (const type in survey) {
      formData.append(type, survey[type]);
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  };

  const mapSurvey = () => {
    const survey = { ...state };
    const forms = [
      "form1",
      "form2",
      "form3",
      "form4",
      "form5",
      "form6",
      "form7",
      "poc"
    ];
    const etcForms = ["form2", "form3", "form4", "form5", "form7"];

    etcForms.forEach((form) => {
      if (survey[form][survey[form].length - 1]) {
        survey[form].splice(survey[form].length - 1, 1, survey[form + "Etc"]);
      }
    });

    forms.forEach((form) => {
      survey[form] = survey[form].join(",");
    });

    return {
      comp_name: survey.comp_name,
      name: survey.name,
      department: survey.department,
      rank: survey.rank,
      contact: survey.contact,
      email: survey.email,
      form1: survey.form1,
      form2: survey.form2,
      form3: survey.form3,
      form4: survey.form4,
      form5: survey.form5,
      form6: survey.form6,
      form7: survey.form7,
      poc: survey.poc
    };
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Link to="/">
            <img src={logo} alt="logo" />{" "}
          </Link>
          &nbsp; <img src={logo2} alt="logo" />
        </div>
        <div className={classes.container}>
          <FormHelperText className={classes.helperText}>
            ????????? ????????? ????????? ????????? ????????? ????????? ????????? ???????????? ????????????.
            (?????? ?????? ?????? ??????)
          </FormHelperText>

          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup className={classes.formGroup}>
              <TextField
                id="custom-css-standard-input"
                label={<div className={classes.font}>?????????</div>}
                value={state.comp_name}
                onChange={handleChangeText("comp_name")}
              />
              <TextField
                id="custom-css-standard-input"
                label={<div className={classes.font}>??????</div>}
                value={state.name}
                onChange={handleChangeText("name")}
              />
              <TextField
                id="custom-css-standard-input"
                label={<div className={classes.font}>??????</div>}
                value={state.department}
                onChange={handleChangeText("department")}
              />
              <TextField
                id="custom-css-standard-input"
                label={<div className={classes.font}>??????</div>}
                value={state.rank}
                onChange={handleChangeText("rank")}
              />
              <TextField
                id="custom-css-standard-input"
                label={<div className={classes.font}>?????????</div>}
                value={state.contact}
                onChange={handleChangeText("contact")}
              />
              <TextField
                id="custom-css-standard-input"
                label={<div className={classes.font}>?????????</div>}
                value={state.email}
                onChange={handleChangeText("email")}
              />
            </FormGroup>

            <FormGroup className={classes.formGroup}>
              <div className={classes.question}>
                1. ?????? ????????? ??????????????? ?????? ???????????? ???????????? ????????????
                ???????????? ?????????????
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form1", 0)}
                    onChange={handleChange("form1", 0)}
                    name="a1"
                  />
                }
                label={<div className={classes.font}>??????????????? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form1", 1)}
                    onChange={handleChange("form1", 1)}
                    name="a2"
                  />
                }
                label={<div className={classes.font}>???????????? ????????? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form1", 2)}
                    onChange={handleChange("form1", 2)}
                    name="a3"
                  />
                }
                label={<div className={classes.font}>???????????? ????????????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form1", 3)}
                    onChange={handleChange("form1", 3)}
                    name="a4"
                  />
                }
                label={<div className={classes.font}>?????????</div>}
              />
            </FormGroup>

            <FormGroup className={classes.formGroup}>
              <div className={classes.question}>
                2. ???????????? ????????????, ????????? ???????????? ?????? ????????????????
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form2", 0)}
                    onChange={handleChange("form2", 0)}
                    name="a1"
                  />
                }
                label={<div className={classes.font}>VMware</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form2", 1)}
                    onChange={handleChange("form2", 1)}
                    name="a2"
                  />
                }
                label={<div className={classes.font}>Citrix</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form2", 2)}
                    onChange={handleChange("form2", 2)}
                    name="a3"
                  />
                }
                label={<div className={classes.font}>Microsoft</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form2", 3)}
                    onChange={handleChange("form2", 3)}
                    name="a4"
                    className={classes.etc}
                  />
                }
                label={
                  <TextField
                    id="custom-css-standard-input"
                    label={<div className={classes.font}>??????</div>}
                    disabled={!isChecked("form2", 3)}
                    value={state.fomr2Etc}
                    onChange={handleChangeEtc("form2Etc")}
                  />
                }
              />
            </FormGroup>

            <FormGroup className={classes.formGroup}>
              <div className={classes.question}>
                3. ?????????, ??????????????? ?????? ??????????????? ????????? ????????????, ???
                ??????????????? ????????????????
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form3", 0)}
                    onChange={handleChange("form3", 0)}
                    name="a1"
                  />
                }
                label={<div className={classes.font}>6?????? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form3", 1)}
                    onChange={handleChange("form3", 1)}
                    name="a2"
                  />
                }
                label={<div className={classes.font}>1??? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form3", 2)}
                    onChange={handleChange("form3", 2)}
                    name="a3"
                  />
                }
                label={<div className={classes.font}>2??? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form3", 3)}
                    onChange={handleChange("form3", 3)}
                    name="a4"
                    className={classes.etc}
                  />
                }
                label={
                  <TextField
                    id="custom-css-standard-input"
                    label={<div className={classes.font}>??????</div>}
                    disabled={!isChecked("form3", 3)}
                    value={state.fomr3Etc}
                    onChange={handleChangeEtc("form3Etc")}
                  />
                }
              />
            </FormGroup>

            <FormGroup className={classes.formGroup}>
              <div className={classes.question}>
                4. ????????? ????????? ????????? ?????? ??? ?????? ??? ???????????? ???????????? ??????
                ????????????????
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form4", 0)}
                    onChange={handleChange("form4", 0)}
                    name="a1"
                  />
                }
                label={<div className={classes.font}>IT ?????? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form4", 1)}
                    onChange={handleChange("form4", 1)}
                    name="a2"
                  />
                }
                label={
                  <div className={classes.font}>
                    ?????? ????????? ?????? ????????? ???????????? ?????????
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form4", 2)}
                    onChange={handleChange("form4", 2)}
                    name="a3"
                  />
                }
                label={
                  <div className={classes.font}>
                    ????????? ???????????? ?????? ?????? ???????????? ??????
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form4", 3)}
                    onChange={handleChange("form4", 3)}
                    name="a4"
                    className={classes.etc}
                  />
                }
                label={
                  <TextField
                    id="custom-css-standard-input"
                    label={<div className={classes.font}>??????</div>}
                    disabled={!isChecked("form4", 3)}
                    value={state.fomr4Etc}
                    onChange={handleChangeEtc("form4Etc")}
                  />
                }
              />
            </FormGroup>

            <FormGroup className={classes.formGroup}>
              <div className={classes.question}>
                5. ????????? ????????? ?????? ??? ?????? ??? ??????????????? ????????????????
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form5", 0)}
                    onChange={handleChange("form5", 0)}
                    name="a1"
                  />
                }
                label={<div className={classes.font}>?????? ????????? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form5", 1)}
                    onChange={handleChange("form5", 1)}
                    name="a2"
                  />
                }
                label={
                  <div className={classes.font}>
                    ????????? ?????? ????????? ?????? ?????? ??????????????? ??????
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form5", 2)}
                    onChange={handleChange("form5", 2)}
                    name="a3"
                  />
                }
                label={
                  <div className={classes.font}>
                    ????????? ???????????? ?????? ????????? ????????? ??????
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form5", 3)}
                    onChange={handleChange("form5", 3)}
                    name="a4"
                  />
                }
                label={
                  <div className={classes.font}>
                    ????????? ???????????? ?????? ????????? ??? ?????? ??????
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form5", 4)}
                    onChange={handleChange("form5", 4)}
                    name="a5"
                    className={classes.etc}
                  />
                }
                label={
                  <TextField
                    id="custom-css-standard-input"
                    label={<div className={classes.font}>??????</div>}
                    disabled={!isChecked("form5", 4)}
                    value={state.fomr5Etc}
                    onChange={handleChangeEtc("form5Etc")}
                  />
                }
              />
            </FormGroup>

            <FormGroup className={classes.formGroup}>
              <div className={classes.question}>
                6. ?????? ????????? ????????? ??? ?????? ????????? ????????? ????????? ????????????
                ????????????????
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form6", 0)}
                    onChange={handleChange("form6", 0)}
                    name="a1"
                  />
                }
                label={
                  <div className={classes.font}>VMware ?????? ????????? ?????????</div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form6", 1)}
                    onChange={handleChange("form6", 1)}
                    name="a2"
                  />
                }
                label={
                  <div className={classes.font}>
                    VMware ???????????? ????????? ?????????
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form6", 2)}
                    onChange={handleChange("form6", 2)}
                    name="a3"
                  />
                }
                label={
                  <div className={classes.font}>
                    VMware ?????????????????? ????????? ?????????
                  </div>
                }
              />
            </FormGroup>

            <FormGroup className={classes.formGroup}>
              <div className={classes.question}>
                7. ?????????, ??????????????? ?????? ???????????? ????????? ????????? ?????????
                ????????????????
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form7", 0)}
                    onChange={handleChange("form7", 0)}
                    name="a1"
                  />
                }
                label={<div className={classes.font}>????????? ?????? ??????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form7", 1)}
                    onChange={handleChange("form7", 1)}
                    name="a2"
                  />
                }
                label={<div className={classes.font}>???????????? ?????????</div>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked("form7", 2)}
                    onChange={handleChange("form7", 2)}
                    name="a3"
                    className={classes.etc}
                  />
                }
                label={
                  <TextField
                    id="custom-css-standard-input"
                    label={<div className={classes.font}>??????</div>}
                    disabled={!isChecked("form7", 2)}
                    value={state.fomr7Etc}
                    onChange={handleChangeEtc("form7Etc")}
                  />
                }
              />
            </FormGroup>

            <div
              style={{
                textAlign: "left"
              }}
            >
              * POC(Proof Of Concept, ?????? ??????)??? ???????????????.
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked("poc", 0)}
                  onChange={handleChange("poc", 0)}
                  name="a1"
                />
              }
              label={<div className={classes.font}>???, ???????????????</div>}
            />
          </FormControl>
          <div
            style={{
              marginTop: "50px"
            }}
          >
            <Button className={classes.button} onClick={handleFormSubmit}>
              ??????
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Survey;
