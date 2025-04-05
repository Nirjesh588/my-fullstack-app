// TutorFilters.jsx
import { Box, Typography, Slider, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';

export default function TutorFilters({ filters, setFilters }) {
  const subjects = ['Math', 'Physics', 'Chemistry', 'Biology', 'English'];

  return (
    <Box sx={{ mb: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" gutterBottom>Filters</Typography>
      
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Subject</InputLabel>
        <Select
          value={filters.subject}
          label="Subject"
          onChange={(e) => setFilters(prev => ({ ...prev, subject: e.target.value }))}
        >
          <MenuItem value="">All Subjects</MenuItem>
          {subjects.map((subject) => (
            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography gutterBottom>Minimum Rating</Typography>
<Slider
  value={filters.minRating}
  onChange={(e, val) => setFilters(prev => ({ ...prev, minRating: val }))}
  step={0.5}
  marks
  min={3}
  max={5}
  valueLabelDisplay="auto"
  sx={{ mb: 3 }}
/>

<Typography gutterBottom>Maximum Distance (km)</Typography>
<Slider
  value={filters.maxDistance}
  onChange={(e, val) => setFilters(prev => ({ ...prev, maxDistance: val }))}
  step={0.5}
  min={0}
  max={20}
  valueLabelDisplay="auto"
  sx={{ mb: 3 }}
/>

      <Typography gutterBottom>Availability</Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <Chip
            key={day}
            label={day}
            color={filters.availability.includes(day) ? 'primary' : 'default'}
            onClick={() => setFilters(prev => ({
              ...prev,
              availability: prev.availability.includes(day)
                ? prev.availability.filter(d => d !== day)
                : [...prev.availability, day]
            }))}
          />
        ))}
      </Box>
    </Box>
  );
}