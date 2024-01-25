import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <List>
      {/* Map your chat data to ListItems */}
      <ListItem button>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Chat 1" secondary="Last message..." />
      </ListItem>
      {/* Repeat for other chats */}
    </List>
  );
};

export default Sidebar;