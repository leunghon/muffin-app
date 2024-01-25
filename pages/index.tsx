import { Box } from '@mui/material';
import Sidebar from '../src/components/sidebar';
import Chat from '../src/components/chat';

const Home: React.FC = () => {
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
};

export default Home;

