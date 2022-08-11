import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    // <List
    //   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    // >
    //   <ListItemButton>
    //     <ListItemText primary="Sent mail" />
    //   </ListItemButton>
    //   <ListItemButton>
    //     <ListItemText primary="Drafts" />
    //   </ListItemButton>
    //   <ListItemButton onClick={handleClick}>
    //     <ListItemText primary="Inbox" />
    //     {open ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={open} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemText primary="Starred2" />
    //       </ListItemButton>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemText primary="Starred1" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>
    // </List>
  );
}
