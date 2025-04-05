import { useState } from 'react';
import { 
  Container, 
  TextField, 
  Button, 
  Grid, 
  Typography, 
  Paper, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Checkbox, 
  FormGroup, 
  FormControlLabel,
  InputAdornment,
  Avatar,
  Box
} from '@mui/material';
import { CalendarToday, AttachMoney, LocationOn } from '@mui/icons-material';

export default function TutorRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    hourlyRate: '',
    experience: '',
    bio: '',
    location: '',
    availability: []
  });

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const subjects = ['Math', 'Science', 'English', 'History', 'Programming', 'Art', 'Music'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvailabilityChange = (day) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter(d => d !== day)
        : [...prev.availability, day]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/tutor-profiles/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          hourlyRate: Number(formData.hourlyRate),
          experience: Number(formData.experience)
        })
      });
      
      if (!response.ok) throw new Error('Registration failed');
      alert('Registration successful!');
      setFormData({
        name: '',
        subject: '',
        hourlyRate: '',
        experience: '',
        bio: '',
        location: '',
        availability: []
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar sx={{ 
            width: 80, 
            height: 80, 
            bgcolor: 'primary.main', 
            mb: 2,
            margin: 'auto'
          }}>
            <CalendarToday fontSize="large" />
          </Avatar>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Become a Tutor
          </Typography>
          <Typography color="text.secondary">
            Join our platform and share your knowledge with students
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Subject</InputLabel>
                <Select
                  name="subject"
                  value={formData.subject}
                  label="Subject"
                  onChange={handleChange}
                  MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
                >
                  {subjects.map(subject => (
                    <MenuItem key={subject} value={subject}>
                      {subject}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Hourly Rate"
                name="hourlyRate"
                type="number"
                value={formData.hourlyRate}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney />
                    </InputAdornment>
                  ),
                  inputProps: { min: 0, step: 5 }
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
                InputProps={{ inputProps: { min: 0, max: 50 } }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                multiline
                rows={4}
                placeholder="Tell us about your teaching experience and methodology..."
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Availability
              </Typography>
              <FormGroup row>
                {daysOfWeek.map(day => (
                  <FormControlLabel
                    key={day}
                    control={
                      <Checkbox
                        checked={formData.availability.includes(day)}
                        onChange={() => handleAvailabilityChange(day)}
                        color="primary"
                      />
                    }
                    label={day}
                  />
                ))}
              </FormGroup>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center', mt: 4 }}>
              <Button 
                type="submit" 
                variant="contained" 
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  textTransform: 'none'
                }}
              >
                Complete Registration
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}