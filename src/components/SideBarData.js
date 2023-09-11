import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import PaymentIcon from '@mui/icons-material/Payment';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import AssessmentIcon from '@mui/icons-material/Assessment';
// import { Container } from './styles';

export const SideBarData = [
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
    }
] 