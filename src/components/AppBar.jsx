// import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import Zoom from '@mui/material/Zoom';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import UpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { green } from '@mui/material/colors';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }

// const fabStyle = {
//   position: 'absolute',
//   bottom: 16,
//   right: 16,
// };

// const fabGreenStyle = {
//   color: 'common.white',
//   bgcolor: green[500],
//   '&:hover': {
//     bgcolor: green[600],
//   },
// };

// export default function AppBar() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const transitionDuration = {
//     enter: theme.transitions.duration.enteringScreen,
//     exit: theme.transitions.duration.leavingScreen,
//   };

//   const fabs = [
//     {
//       color: 'primary',
//       sx: fabStyle,
//       icon: <AddIcon />,
//       label: 'Add',
//     },
//     {
//       color: 'secondary',
//       sx: fabStyle,
//       icon: <EditIcon />,
//       label: 'Edit',
//     },
//     {
//       color: 'inherit',
//       sx: { ...fabStyle, ...fabGreenStyle },
//       icon: <UpIcon />,
//       label: 'Expand',
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         bgcolor: 'background.paper',
//         width: 500,
//         position: 'relative',
//         minHeight: 200,
//         display: 'flex',
//       }}
//     >
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: 72,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: 72,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           },
//         }}
//       >
//         <List>
//           {['Item One', 'Item Two', 'Item Three'].map((text, index) => (
//             <ListItem button key={text} onClick={() => handleChange(null, index)}>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//       </SwipeableViews>
//       {fabs.map((fab, index) => (
//         <Zoom
//           key={fab.color}
//           in={value === index}
//           timeout={transitionDuration}
//           style={{
//             transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
//           }}
//           unmountOnExit
//         >
//           <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
//             {fab.icon}
//           </Fab>
//         </Zoom>
//       ))}
//     </Box>
//   );
// }
