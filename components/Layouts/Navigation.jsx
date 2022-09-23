import React from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
} from "@mui/material";
import FormInput from "../ui/FormInput";

const AppBarStyle = {
  bgcolor: "transparent",
  border: "none",
  boxShadow: "none",
};

const TopNavigation = () => {
  const theme = useTheme();
  return (
    <AppBar component={"nav"} position={"static"} sx={{ ...AppBarStyle }}>
      <Toolbar sx={{ bgcolor: "transparent" }}>
        <Container maxWidth={"xl"} sx={{ display: "flex" }}>
          <Box mr={"auto"}>
            <Link href={"/"}>
              <Button component={"a"}>홈으로가기</Button>
            </Link>
          </Box>
          <Box component={"ul"}></Box>
          <Box>
            <FormInput placeholder="찾으시는 스크립트"></FormInput>
          </Box>
          <Box sx={{ display: "flex", marginLeft: "20px" }}>
            <Button variant="contained" className={"ml-10"}>
              로그인
            </Button>
            <Button>무료회원가입</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

const BottomNavigation = () => {
  return (
    <section>
      <AppBar component={"div"} position={"static"} sx={{ ...AppBarStyle }}>
        <Toolbar sx={{ bgcolor: "transparent" }}></Toolbar>
      </AppBar>
    </section>
  );
};

const Navigation = () => {
  return (
    <header>
      <TopNavigation />
      <BottomNavigation />
    </header>
  );
};

export default Navigation;
