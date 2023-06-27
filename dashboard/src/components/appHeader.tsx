import { Box, Button, Typography } from "@mui/material";
import React from "react";

import FinschiaDocsImage from "../images/finschia_docs_logo_horizontal.svg";
import GithubImage from "../images/github-logo-vector.svg";

export default function AppHeader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "60%", paddingTop: "16px" }}>
        <Typography variant="h4">Hackwasm2023</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            paddingRight: "16px",
          }}
        >
          <Button variant="text" href="https://docs.finschia.network/">
            <img src={FinschiaDocsImage} alt="finschia docs" width="150px" />
          </Button>
          <Button variant="text" href="https://github.com/Finschia/hackathon">
            <Typography color="black">Github</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
