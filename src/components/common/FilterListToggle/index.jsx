import React from "react";
import ToggleButton from "@mui/lab/ToggleButton";
import ToggleButtonGroup from "@mui/lab/ToggleButtonGroup";
import "./style.css";
import { style } from "@mui/system";

// import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     justifyContent: "space-between",
//   },
//   toggle: {
//     fontFamily: `'Raleway', sans-serif`,
//     fontSize: ".8rem",
//     border: "1px solid rgba(0, 0, 0, 0.12)",
//     borderRadius: "10px",
//     "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
//       borderRadius: "10px",
//     },
//     "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
//       borderRadius: "10px",
//       border: "1px solid rgba(0, 0, 0, 0.12)",
//     },
//     "&.Mui-selected": {
//       borderRadius: "10px",
//       background: "#000",
//       color: "#fff",
//     },
//     "&.MuiToggleButton-root": {
//       "&:hover": {
//         background: "#000",
//         color: "#fff",
//       },
//     },
//   },
// });

const FilterListToggle = ({ options, value, selectToggle }) => {
  // use for styling
  // const classes = useStyles();

  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      exclusive
      // className={classes.root}
      // className={classes.toggle}
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterListToggle;
