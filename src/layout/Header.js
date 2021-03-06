import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "./../InfoContext";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MenuIcon from "@material-ui/icons/Menu";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import "../css/header.css";
import PopUp from "./popUpView";
import logo from "./../img/logo.png";

import $ from "jquery";
window.$ = $;

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: 9999,
    height: "64px",
    fontFamily: "NanumSquare"
  },
  menu1: {
    width: "95%",
    paddingBottom: "15px",
    borderBottom: "1px solid rgba(0, 0, 0, .075)",
    fontFamily: "NanumSquare"
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none"
    },
    position: "absolute",
    right: 0,
    top:5
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  txt_deco_none: {
    color: "#000000 !important"
  },
  txt_deco_none2: {
    color: "#000000 !important"
  },
  heading: {
    fontWeight: 700
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  },
}));

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: "none",
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -10,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      backgroundColor: "#ffffff"
    }
  },
  content: {
    fontWeight: 700,
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

const Typography = withStyles((theme) => ({
  root: {
    // width: "95%",
    // paddingBottom: 15,
    // borderBottom: "1px solid rgba(0, 0, 0, .075)",
    fontFamily: "NanumSquare"
  }
}))(MuiTypography);

function Header(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  //console.log(props.current_link)

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDrawerToggle = (open) => () => {
    setExpanded(false);
    setMobileOpen(open);
    $("#div_laypopup").hide();
  };

  const handleItemClick = () => {
    setExpanded(false);
    setMobileOpen(false);
  };
  const mouseOver = function(e) {    
    $(".subclasses_wrap").show();
    $(".subclasses_wrap").animate({ opacity: "1" }, 1);
    $(".subclasses_wrap").animate({ height: "280px" }, 500);
  };

  const mouseOut = function(e) {
    //console.log('out')
    $(".subclasses_wrap").animate({ height: "0px", opacity: "0" }, 200, function(){$(".subclasses_wrap").hide();});
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const scrollPosition = useContext(InfoContext);

  const onClickInfo = (pos) => () => {
    scrollPosition.setPosition(pos);
  };

  return (
    <div className={classes.root}>
      <PopUp />
      <div className="header" onMouseLeave={mouseOut} id="header0">
        <div className="subclasses_wrap">
          <div className="subclasses">
            <div id="subclass6"></div>
            <div id="subclass5">
              <Link to="/remote" className="menu4">
                ????????????
              </Link>
            </div>
            <div id="subclass4">
              <Link to="/mt/engineer" className="menu4">
                ???????????? ??????
              </Link>
              <Link to="/mt/maintenance" className="menu4">
                ????????????
              </Link>
              <Link to="/mt/question" className="menu4">
                ??????????????????
              </Link>
              <Link to="/mt/reference" className="menu4">
                ?????????
              </Link>
              <Link to="/remote" className="menu4">
                ????????????
              </Link>
            </div>
            <div id="subclass3">
              <Link to="/hw/server" className="menu3">
                ??????
              </Link>
              <Link to="/hw/storage" className="menu3">
                ????????????
              </Link>
              <Link to="/hw/network" className="menu3">
                ????????????
              </Link>
              <Link to="/hw/security" className="menu3">
                ??????
              </Link>
            </div>
            <div id="subclass2">
              <Link to="/vm/server" className="menu2">
                ?????? ?????????
              </Link>
              <Link to="/vm/desktop" className="menu2">
                ???????????? ?????????
              </Link>
              <Link to="/vm/storage" className="menu2">
                ???????????? ?????????
              </Link>
              <Link to="/vm/DR" className="menu2">
                ?????????????????????
              </Link>
            </div>
            <div id="subclass1">
              <Link
                to="/"
                name="info_container1"
                onClick={onClickInfo("info_container1")}
                className="menu1"
              >
                ????????????
              </Link>
              <Link
                to="/"
                name="info_container2"
                onClick={onClickInfo("info_container2")}
                className="menu1"
              >
                ?????????
              </Link>
              <Link
                to="/"
                name="info_container3"
                onClick={onClickInfo("info_container3")}
                className="menu1"
              >
                ????????????
              </Link>
              <Link
                to="/"
                name="info_container4"
                onClick={onClickInfo("info_container4")}
                className="menu1"
              >
                ??????
              </Link>
              <Link
                to="/"
                name="info_container5"
                onClick={onClickInfo("info_container5")}
                className="menu1"
              >
                ??????????????? ???
              </Link>
            </div>
          </div>
        </div>
        <div className="tool">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle(true)}
            className={classes.menuButton}
            id="menuBtn"
          >
            <MenuIcon />
          </IconButton>
          <div variant="h6" nowrap="true" className="img_back">
            <Link
              to="/"
              className={classes.txt_deco_none2}
              onClick={onClickInfo("header0")}
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="menus"onMouseEnter={mouseOver}>
          <div id="menu6" >
              <Link to="/admin/login" className="menu6">
                ????????????
              </Link>
            </div>
            <div id="menu5" >
              <Link to="/remote" className="menu5">
                ????????????
              </Link>
            </div>
            <div id="menu4" >
              <Link to="/mt/engineer" className="menu4">
                ????????????
              </Link>
            </div>
            <div id="menu3" >
              <Link to="/hw/server" className="menu3">
                ?????????????????????
              </Link>
            </div>
            <div id="menu2" >
              <Link to="/vm/server" className="menu2">
                ??????????????????
              </Link>
            </div>
            <div id="menu1" >
              <Link to="/" className="menu1" onClick={onClickInfo("header0")}>
                ????????????
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle(false)}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <div>
              <div className={classes.toolbar} />
              <List>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleAccordionChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>????????????</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container1")}
                      >
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                            id="m_info_container1"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container2")}
                      >
                        <ListItem button key="?????????" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>?????????</Typography>}
                            id="m_info_container2"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container3")}
                      >
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                            id="m_info_container3"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container4")}
                      >
                        <ListItem button key="??????" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>??????</Typography>}
                            id="m_info_container4"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/"
                        className={classes.txt_deco_none}
                        onClick={onClickInfo("info_container5")}
                      >
                        <ListItem
                          button
                          key="??????????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>??????????????????</Typography>}
                            id="m_info_container5"
                            className="m_info_container"
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleAccordionChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>??????????????????</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/vm/server" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="???????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>???????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/vm/desktop" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="?????????????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>?????????????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/vm/storage" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="?????????????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>?????????????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/vm/DR" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="?????????????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>?????????????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleAccordionChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>?????????????????????</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/hw/server" className={classes.txt_deco_none}>
                        <ListItem button key="??????" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>??????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/hw/storage" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/hw/network" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/hw/security" className={classes.txt_deco_none}>
                        <ListItem button key="??????" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>??????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleAccordionChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>????????????</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/mt/engineer" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="???????????? ??????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>???????????? ??????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/mt/maintenance"
                        className={classes.txt_deco_none}
                      >
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="/mt/question" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="??????????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>??????????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/mt/reference"
                        className={classes.txt_deco_none}
                      >
                        <ListItem button key="?????????" onClick={handleItemClick}>
                          <ListItemText
                            primary={<Typography>?????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                    <div>
                      <Link to="http://rs.nsworks.co.kr/" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleAccordionChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>????????????</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/remote" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleAccordionChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className={classes.menu1}>????????????</div>
                  </AccordionSummary>
                  <AccordionDetails id="details">
                    <div>
                      <Link to="/admin" className={classes.txt_deco_none}>
                        <ListItem
                          button
                          key="????????????"
                          onClick={handleItemClick}
                        >
                          <ListItemText
                            primary={<Typography>????????????</Typography>}
                          />
                        </ListItem>
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
export default Header;
