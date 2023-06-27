import { ChainInfo } from "@keplr-wallet/types";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import { chainInfo as localhostChainInfo } from "../chains/localhost";
import { chainInfo as localhost2ChainInfo } from "../chains/localhost2";
import { suggestChain } from "../chains/suggestChain";

interface NetInfoBoardProps {
  chainInfo: ChainInfo;
}

function NetInfoBoard({ chainInfo }: NetInfoBoardProps) {
  const [heightAndTime, setHeightAndTime] = useState({ height: 0, time: new Date().toISOString() });

  const fetchHeightAndTime = () => {
    fetch(`${chainInfo.rest}/lbm/base/ostracon/v1/blocks/latest`)
      .then((res) => res.json())
      .then((res) => setHeightAndTime({ height: res.block.header.height, time: res.block.header.time }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchHeightAndTime();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
      <Typography variant="h5" align="left">
        {chainInfo.chainId}
      </Typography>
      <Paper sx={{ padding: "16px" }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" align="left">
              Height
            </Typography>
            <IconButton onClick={() => fetchHeightAndTime()}>
              <ReplayIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" align="left" sx={{ paddingLeft: "8px" }}>
              {heightAndTime.height.toLocaleString()}
            </Typography>
            <Typography align="right" sx={{ paddingRight: "8px" }}>
              {heightAndTime.time}
            </Typography>
          </Box>

          <Divider
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></Divider>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" align="left">
              Access Points
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                suggestChain(chainInfo);
              }}
            >
              Connect with DOSI Valut
            </Button>
          </Box>
          <Typography variant="h6" align="left" sx={{ paddingLeft: "8px" }}>
            {chainInfo.rpc}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

interface ButtonConnectorProps {
  channelId: string;
  counterPartyChannelId: string;
  state: string;
}

function ButtonConnector({ channelId, counterPartyChannelId, state }: ButtonConnectorProps) {
  const disableColor = "#ff2745";
  const ableColor = "#37cc6e";
  const stateColor = state === "STATE_OPEN" ? ableColor : disableColor;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box component="span" sx={{ padding: "8px 16px 8px 8px", background: "#f5f5f5", borderRadius: "20%" }}>
        {channelId}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: "2px",
          background: stateColor,
          position: "relative",
        }}
      >
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "-3px", // Adjust the vertical position of the dots
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: stateColor,

            left: "-8px", // Position the dot before the line
          }}
        ></Box>
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "-3px", // Adjust the vertical position of the dots
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: stateColor,

            right: "-8px", // Position the dot after the line
          }}
        ></Box>
      </Box>
      <Box component="span" sx={{ padding: "8px 8px 8px 16px", background: "#f5f5f5", borderRadius: "20%" }}>
        {counterPartyChannelId}
      </Box>
    </Box>
  );
}

function RelayerInfo({ chainInfo }: NetInfoBoardProps) {
  const [channels, setChannels] = useState<
    { state: string; channelId: string; counterPartyChannelId: string; ordering: string }[]
  >([]);

  const fetchChannels = () => {
    fetch(`${chainInfo.rest}/ibc/core/channel/v1/channels`)
      .then((res) => res.json())
      .then((res) =>
        setChannels(
          res.channels.map((channel: any) => {
            return {
              state: channel.state,
              channelId: channel.channel_id,
              counterPartyChannelId: channel.counterparty.channel_id,
              ordering: channel.ordering,
            };
          }),
        ),
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
      <Typography variant="h5" align="left">
        IBC Relayers
      </Typography>
      <Paper sx={{ padding: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box component="span" sx={{ fontSize: "16px" }}>
                    testnet1
                  </Box>
                  <Box component="span" sx={{ fontSize: "16px" }}>
                    testnet2
                  </Box>
                </Box>
              </TableCell>
              <TableCell>State</TableCell>
              <TableCell>Ordering</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {channels.map((channel, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <ButtonConnector
                    state={channel.state}
                    channelId={channel.channelId}
                    counterPartyChannelId={channel.counterPartyChannelId}
                  ></ButtonConnector>
                </TableCell>
                <TableCell>{channel.state}</TableCell>
                <TableCell>{channel.ordering}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default function Dashboard() {
  const chainInfoList = [localhostChainInfo, localhost2ChainInfo];
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "60%" }}>
        {chainInfoList.map((chainInfo, index) => (
          <NetInfoBoard key={index} chainInfo={chainInfo}></NetInfoBoard>
        ))}
        <RelayerInfo chainInfo={localhostChainInfo}></RelayerInfo>
      </Box>
    </Box>
  );
}
