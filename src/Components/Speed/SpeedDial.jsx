import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const actions = [
  {
    icon: <FileCopyIcon style={{ height: "0.8rem", width: "0.8rem" }} />,
    name: "Copy",
  },
  {
    icon: <SaveIcon style={{ height: "0.8rem", width: "0.8rem" }} />,
    name: "Save",
  },
  {
    icon: <PrintIcon style={{ height: "0.8rem", width: "0.8rem" }} />,
    name: "Print",
  },
  {
    icon: <ShareIcon style={{ height: "0.8rem", width: "0.3rem" }} />,
    name: "Share",
  },
];

const OpenIconSpeedDial = () => {
  return (
    <Box sx={{ height: 100, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{
          position: "absolute",
          bottom: 12,
          right: 12,
          height: "2rem",
          width: "2rem",
        }}
        icon={<SpeedDialIcon  openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
export default OpenIconSpeedDial;
