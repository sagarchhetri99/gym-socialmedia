import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/main-logo.png";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { xl: "500px", lg: "200px", sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          className="nav-logo"
          src={Logo}
          alt="logo"
          style={{
            width: "78px",
            height: "78px",
            margin: "0px 20px",
          }}
        />
      </Link>
      <Stack
        direction="flex"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}