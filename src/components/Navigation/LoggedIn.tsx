import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { useHistory } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import "./navigation.scss";
import { Button } from "react-bootstrap";


export default function LoggedIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLogOut = () => {
    dispatch(logOut());
    return history.push("/");
  };

  return (
    <>
      <NavbarItem path="/" linkText="Other" />
      <Button onClick={() => onClickLogOut()}>
        Logout
      </Button>
    </>
  );
}