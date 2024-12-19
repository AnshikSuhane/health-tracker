import "./login.css";
import Logo from "../assets/images/logo.png";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

export const Login = () => {
  const paperStyle = {
    padding: 40,
    height: "50vh",
    width: 380,
  };

  const btnstyle = { margin: "8px 0" };
  const textFieldStyle = { marginBottom: "20px" };

  return (
    <>
      <div className="container">
        <Grid
          container
          style={{ height: "90%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Paper elevation={12} style={paperStyle} align="center">
            <Grid align="center"></Grid>
            <img className="logInImg" src={Logo} alt="Logo" />
            <TextField
              className="userinput"
              label="Username"
              placeholder="Enter username"
              variant="outlined"
              fullWidth
              required
              style={textFieldStyle}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              fullWidth
              required
              style={textFieldStyle}
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Log in
            </Button>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              Do you have an account ?<Link href="#">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </>
  );
};
