import './App.css';
import CustomAppBar from './components/CustomAppBar';
import Calendar from './components/Calendar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <div>
      <CustomAppBar />
      <Container maxWidth="lg">
        <Box sx={{ pt: 2 }}>
          <Calendar />
        </Box>
      </Container>
    </div>
  );
}

export default App;
