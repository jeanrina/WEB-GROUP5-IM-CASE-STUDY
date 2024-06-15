import React from 'react';
import { Box, Button, Typography, TextField, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaUser, FaHome, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Staff.css';

const Staff = () => {
  return (
    <Box sx={{ height: '100vh', width: '100%', display: 'flex' }}>
      {/* Sidebar Navigation */}
      <Box sx={{ width: '80px', background: 'linear-gradient(to bottom, #2CAFA4, #0194D3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
        <Box>
          {/* Profile */}
          <Button component={Link} to="/profile" sx={{ marginTop: '30px', color: 'white', fontSize: '30px' }}>
            <FaUser />
          </Button>
          {/* Home */}
          <Button component={Link} to="/dashboard" sx={{ marginTop: '30px', color: 'white', fontSize: '30px' }}>
            <FaHome />
          </Button>
        </Box>
        <Box>
          {/* Settings */}
          <Button component={Link} to="/settings" sx={{ marginTop: '30px', color: 'white', fontSize: '30px' }}>
            <FaCog />
          </Button>
          {/* Logout */}
          <Button component={Link} to="/" sx={{ marginTop: '30px', color: 'white', fontSize: '30px' }}>
            <FaSignOutAlt />
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: '40px', backgroundColor: '#E7F3F5', display: 'flex', flexDirection: 'column', gap: '30px', overflowY: 'auto' }}>
        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: '10px 0', borderRadius: '8px' }}>
          {/* Patients */}
          <Button component={Link} to="/patients" sx={{ flexGrow: 1, fontFamily: 'Nunito Sans, Sans-serif', fontSize: '1.5rem', color: 'black', textAlign: 'center' }}>
            Patients
          </Button>
          {/* Staff */}
          <Button component={Link} to="/staff" sx={{ flexGrow: 1, fontFamily: 'Nunito Sans, Sans-serif', fontSize: '1.5rem', color: 'black', textAlign: 'center', borderBottom: '2px solid #007bff' }}>
            Staff
          </Button>
          {/* Ward */}
          <Button component={Link} to="/dashboard/ward" sx={{ flexGrow: 1, fontFamily: 'Nunito Sans, Sans-serif', fontSize: '1.5rem', color: 'black', textAlign: 'center' }}>
            Ward
          </Button>
          {/* Supplies */}
          <Button component={Link} to="/supplies" sx={{ flexGrow: 1, fontFamily: 'Nunito Sans, Sans-serif', fontSize: '1.5rem', color: 'black', textAlign: 'center' }}>
            Supplies
          </Button>
        </Box>

        {/* Main Content Sections */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Staff */}
          <Box className="staff-section">
            <Typography variant="h6">Staff</Typography>
            <Box className="search-container">
              <TextField placeholder="Click Number" variant="outlined" size="small" />
              <Button variant="contained" color="primary" size="small" sx={{ marginLeft: '10px' }}>Search</Button>
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Click Number</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Unit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Populate with data */}
              </TableBody>
            </Table>
          </Box>

          {/* Qualification */}
          <Box className="qualification-section">
            <Typography variant="h6">Qualification</Typography>
            <Box className="search-container">
              <TextField placeholder="Staff Qualification" variant="outlined" size="small" />
              <Button variant="contained" color="primary" size="small">Search</Button>
            </Box>
            <Typography variant="body1">// See staff qualification</Typography>
          </Box>

          {/* Work Experience */}
          <Box className="work-experience-section">
            <Typography variant="h6">Work Experience</Typography>
            <Box className="search-container">
              <TextField placeholder="Search by experience" variant="outlined" size="small" />
              <Button variant="contained" color="primary" size="small">Search</Button>
            </Box>
            <Typography variant="body1">See work experience</Typography>
          </Box>
          
          {/* Staff Details Form */}
          <Box className="staff-details-form">
            <Typography variant="h6">Staff</Typography>
            <TextField label="Staff Number" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="First Name" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Last Name" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Address" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Telephone Number" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Date of Birth" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Sex" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="NH" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Position Held" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Current Salary" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Salary Scale" variant="outlined" size="small" fullWidth margin="normal" />
            <Button variant="contained" color="primary" size="small" sx={{ marginTop: '10px', marginRight: '10px' }}>Update</Button>
            <Button variant="outlined" color="secondary" size="small" sx={{ marginTop: '10px' }}>Delete</Button>
          </Box>

          {/* Qualification Form */}
          <Box className="qualification-form">
            <Typography variant="h6">Qualification</Typography>
            <TextField label="Full Name" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Email" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Date of Birth" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Marital Status" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Age" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Contact Number" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Registered Date" variant="outlined" size="small" fullWidth margin="normal" />
            <TextField label="Specialization" variant="outlined" size="small" fullWidth margin="normal" />
            <Button variant="contained" color="primary" size="small" sx={{ marginTop: '10px', marginRight: '10px' }}>Submit</Button>
            <Button variant="outlined" color="secondary" size="small" sx={{ marginTop: '10px' }}>Delete</Button>
          </Box>
        </Box>
        <Button onClick={() => window.history.back()} sx={{ alignSelf: 'flex-end', marginBottom: '20px' }}>BACK</Button>
      </Box>
    </Box>
  );
}

export default Staff;
