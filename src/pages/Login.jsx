import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
// import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
// import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import LoginForm, { loginScheme } from "../components/Tables/LoginForm";
import useAuthCAll from "../hooks/useAuthCall";

const Login = () => {
  const { login } = useAuthCAll()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <div style={{ backgroundColor: 'green', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px', borderRadius: '50%' }}>
               <LockIcon style={{ color: 'white', fontSize: 30 }} />
            </div>
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();//* 
              actions.setSubmitting(false);
            }}
            component={props => <LoginForm {...props} />}>
              
            </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
          Don't have an account?
          <Link to="/register" className="text-red-500">
    Sign Up
  </Link>
          </Box>
        </Grid>

        {/* <AuthImage image={image} /> */}
      </Grid>
    </Container>
  );
};

export default Login;