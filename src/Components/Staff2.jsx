import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Staff2.css'; // Ensure this path is correct

const Staff2 = () => {
    const navigate = useNavigate(); 
  return (
    <Box sx={{ height: '100vh', width: '100%', display: 'flex' }}>
      {/* Sidebar Navigation */}
      <Box className="sidebar">
        <Box>
          <Button component={Link} to="/profile" className="button">
            <FaUser />
          </Button>
          <Button component={Link} to="/dashboard" className="button">
            <FaHome />
          </Button>
        </Box>
        <Box>
          <Button component={Link} to="/settings" className="button">
            <FaCog />
          </Button>
          <Button component={Link} to="/" className="button">
            <FaSignOutAlt />
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="main-content">
        {/* Navigation Buttons */}
        <Box className="nav-buttons">
          <Button component={Link} to="/patients" className="button">
            Patients
          </Button>
          <Button component={Link} to="/staff" className="button active">
            Staff
          </Button>
          <Button component={Link} to="/dashboard/ward" className="button">
            Ward
          </Button>
          <Button component={Link} to="/supplies" className="button">
            Supplies
          </Button>
        </Box>

        {/* Main Content Sections */}
        <Box className="section">
          {/* Employment Contract */}
          <Box>
            <Typography variant="h6">Employment Contract</Typography>
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <TextField placeholder="Search staff number" variant="outlined" size="small" />
              <Button variant="contained" color="primary">Search</Button>
            </Box>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>See employment contract</Typography>
          </Box>

          {/* Staff Allocation */}
          <Box>
            <Typography variant="h6">Staff Allocation</Typography>
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <TextField placeholder="Search staff number" variant="outlined" size="small" />
              <Button variant="contained" color="primary">Search</Button>
            </Box>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>See staff location</Typography>
          </Box>

          {/* Work Experience Form */}
          <Box>
            <Typography variant="h6">Work Experience Form</Typography>
            <Box className="form-section">
              <TextField label="First Name" variant="outlined" size="small" fullWidth />
              <TextField label="Last Name" variant="outlined" size="small" fullWidth />
              <TextField label="Start Date" variant="outlined" size="small" fullWidth />
              <TextField label="Finish Date" variant="outlined" size="small" fullWidth />
              <TextField label="Position" variant="outlined" size="small" fullWidth />
              <TextField label="Name of Organization" variant="outlined" size="small" fullWidth />
              <Box className="form-buttons">
                <Button variant="contained" color="primary">Submit</Button>
                <Button variant="outlined" color="secondary">Delete</Button>
              </Box>
            </Box>
          </Box>

          {/* Employment Contract Form */}
          <Box>
            <Typography variant="h6">Employment Contract Form</Typography>
            <Box className="form-section">
              <TextField label="Staff Number" variant="outlined" size="small" fullWidth />
              <TextField label="Work Hours" variant="outlined" size="small" fullWidth />
              <TextField label="Type of Contract" variant="outlined" size="small" fullWidth />
              <TextField label="Type of Salary Payment" variant="outlined" size="small" fullWidth />
              <Box className="form-buttons">
                <Button variant="contained" color="primary">Submit</Button>
                <Button variant="outlined" color="secondary">Delete</Button>
              </Box>
            </Box>
          </Box>

          {/* Staff Allocation Form */}
          <Box>
            <Typography variant="h6">Staff Allocation Form</Typography>
            <Box className="form-section">
              <TextField label="Staff Number" variant="outlined" size="small" fullWidth />
              <TextField label="Ward Number" variant="outlined" size="small" fullWidth />
              <TextField label="Shift" variant="outlined" size="small" fullWidth />
              <Box className="form-buttons">
                <Button variant="contained" color="primary">Update</Button>
                <Button variant="outlined" color="secondary">Delete</Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="footer-buttons">
          <Button onClick={() => window.history.back()}>BACK</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Staff2;
