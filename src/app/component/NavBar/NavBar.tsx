import * as React from 'react';
import {styled, useTheme, Theme, CSSObject, createMuiTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './NavBar.css';
import {
    Analytics,
    Doorbell,
    Home,
    Image,
    LiveTv,
    MeetingRoom,
    More,
    Movie,
    Search,
    Settings
} from "@mui/icons-material";
import {Avatar, Button, Container, Paper} from "@mui/material";
import NewMeetingDialog from "../NewMeetingDialog/NewMeetingDialog";
import {useNavigate} from "react-router-dom";
import Meetings from "../../screen/Meetings/Meetings";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    bgColor: '#1A1C24',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        bgColor: '#1A1C24',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


// @ts-ignore
const NavBar = ({children}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [newMeetingDialogOpened, setNewMeetingDialogOpened] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleMeetingDialog = () => {
        setNewMeetingDialogOpened(true)
    }

    const handleNewMeetingDialogClose = () => {
        setNewMeetingDialogOpened(false);
    };


    const navButtons = [
        {
            text: 'Home',
            link: '/',
            icon: <Home />
        },
        {
            text: 'Meetings',
            link: '/meetings',
            icon: <MeetingRoom />
        },
        {
            text: 'Recordings',
            link: '/recordings',
            icon: <Movie />
        },
        {
            text: 'Live Transmissions',
            link: '/live',
            icon: <LiveTv/>
        },
        {
            text: 'Analysis',
            link: '/analysis',
            icon: <Analytics />
        },
        {
            text: 'Settings',
            link: '/settings',
            icon: <Settings />
        }
    ]

    return (
        <Box sx={{display: 'flex'}}>
            <NewMeetingDialog isOpened={newMeetingDialogOpened} onClose={handleNewMeetingDialogClose}/>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar className={"dark-bg"}>
                    <IconButton
                        color="default"
                        style={{color: 'white'}}
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Odin's Eye
                    </Typography>
                    <Avatar src="logo.png"/>

                    <Container sx={{flex: 1}}/>

                    <Button
                        sx={{color: "white", backgroundColor: "green"}}
                        onClick={() => toggleMeetingDialog()}
                    >
                        + Create new Meeting
                    </Button>

                    <Avatar src="true_viking.png" sx={{marginLeft: "2%"}}/>
                    <Typography variant="body2">
                        Kapitan Wiking
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} className="dark-bg">
                <DrawerHeader className="dark-bg">
                    <IconButton onClick={handleDrawerClose} style={{color: 'white'}}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider className="dark-bg"/>
                <List className="dark-bg">
                    {navButtons.map((navBtn, index) => (
                        <ListItem key={navBtn.text} disablePadding sx={{display: 'block'}} onClick={() => navigate(navBtn.link)}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    color: 'white'
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                >
                                    {navBtn.icon}
                                </ListItemIcon>
                                <ListItemText primary={navBtn.text} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}} className="container-bg">
                <DrawerHeader/>
                {children}
            </Box>
        </Box>
    );
}

export default NavBar;
