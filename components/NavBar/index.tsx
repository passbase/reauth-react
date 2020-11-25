import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Image = styled.img`
  height: 25px;
  margin-left: 30px;
`;

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Link href="/">
          <Image src="/passbaseLogo.png" alt="" />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
