import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles({
//   root: {
//     "&$checked": {
//       color: "#000",
//     },
//   },
//   checked: {},
//   wrap: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row-reverse",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginLeft: 0,
//   },
//   label: {
//     fontSize: ".8rem",
//     fontFamily: `'Raleway', sans-serif`,
//   },
// });

const CheckboxProton = ({ cusines, changeChecked }) => {
  //   const classes = useStyles();

  const { checked, label, id } = cusines;
  return (
    <div>
      <FormControlLabel
        // classes={{
        //   label: classes.label,
        //   root: classes.wrap,
        // }}
        control={
          <Checkbox
            // classes={{
            //   checked: classes.checked,
            //   root: classes.root,
            // }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckboxProton;
