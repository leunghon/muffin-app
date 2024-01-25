import { Box, List, ListItem, ListItemText, TextField, Button } from '@mui/material';

const Chat = () => {
  return (
    <Box>
      {/* Chat header */}
      <Box p={2}>Chat Header</Box>
      
      {/* Messages */}
      <List>
        <ListItem>
          <ListItemText primary="Message 1" />
        </ListItem>
        {/* Repeat for other messages */}
      </List>

      {/* Message Input */}
      <Box p={2}>
        <TextField fullWidth placeholder="Type a message..." />
        <Button>Send</Button>
      </Box>
    </Box>
  );
};

export default Chat;
