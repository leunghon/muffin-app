import { Box } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import Chat from '../../components/Chat';

function Home() {
  return (
    <Box display="flex">
      <Box width="30%">
        <Sidebar />
      </Box>
      <Box width="70%">
        <Chat />
      </Box>
    </Box>
  );
}

export default Home;

