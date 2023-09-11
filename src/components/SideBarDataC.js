import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import PaymentIcon from '@mui/icons-material/Payment';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
// import { Container } from './styles';

export const SideBarDataC = [
    {
        title: "Wards",
        icon: <NightShelterIcon/>,
        link: "/home"
    },
    {
        title: "Consultants",
        icon: <GroupIcon/>,
        link: "/home1"
    },
    {
        title: "Doctors",
        icon: <GroupsIcon/>,
        link: "/home2"
    },
    {
        title: "Payroll",
        icon: <PaymentIcon/>,
        link: "/home3"
    },
    {
        title: "Policies",
        icon: <PolicyIcon/>,
        link: "/home4"
    },
    {
        title: "Reports",
        icon: <AssessmentIcon/>,
        link: "/home5"
    },
    {
        title: "Rquest Swap",
        icon: <SwapHorizontalCircleIcon/>,
        link: "/home6"
    },
    {
        title: "Request Leave",
        icon: <TimeToLeaveIcon/>,
        link: "/home7"
    }
] 