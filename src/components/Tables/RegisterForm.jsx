import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Form } from "formik";
import * as Yup from "yup";

// Yup ile şema tanımlaması
export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Bu alan zorunludur!")
    .min(3, "Username en az 3 karakter olmalıdır!"),
  password: Yup.string()
    .required("Password is mandatory")
    .min(8)
    .matches(/\d+/, "Digit karakter içermelidir!")
    .matches(/[a-z]/, "Küçük harf içermelidir!")
    .matches(/[A-Z]/, "Büyük harf içermelidir!")
    .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)"),
  email: Yup.string().email("Invalid email").required("Email is mandatory"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(20, "Too Short!")
    .max(120, "Too Long!"),
  city: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  bio: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
});

const SignUpForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  // Şifre görünürlüğü state'i
  const [showPassword, setShowPassword] = useState(false);

  // Şifre görünürlüğü kontrol fonksiyonları
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Diğer input alanları */}
          <TextField
            name="username"
            label="Username *"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
          />
          <TextField
            label="First Name *"
            name="firstName"
            type="text"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
          />
          <TextField
            label="Last Name *"
            name="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
          />
          <TextField
            label="Email Address *"
            name="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="Image URL"
            name="image"
            type="text"
            variant="outlined"
            value={values.image && (
              <img src={values.image} alt="Preview" style={{ width: '100px', height: '100px' }} />
            )}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.image && errors.image}
            error={touched.image && Boolean(errors.image)}
          />
          <TextField
            label="Bio"
            name="bio"
            type="text"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.bio && errors.bio}
            error={touched.bio && Boolean(errors.bio)}
          />
          <TextField
            label="Password *"
            name="password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default SignUpForm;
