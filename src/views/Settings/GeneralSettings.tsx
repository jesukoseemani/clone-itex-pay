import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar/NavBar';
import styles from './Settings.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AccountSvg from '../../assets/images/account.svg';
import NotificationSvg from '../../assets/images/notifications.svg';
import Mark from '../../assets/images/MarkDefault.svg';
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DriveEtaOutlined } from '@mui/icons-material';
import AccountSetUp from '../../components/accountSetUp/AccountSetUp';

const GeneralSetting = () => {
	const data = [
		{
			icon: Mark,
			title: 'Business Information',
			button: 'Continue',
			id: 'BBI',
			completed: false,
		},
		{
			icon: Mark,
			title: 'Business Documents',
			button: 'Continue',
			id: 'BBD',
			completed: false,
		},
		{
			icon: Mark,
			title: 'Add Bank Account',
			button: 'Continue',
			id: 'BAB',
			completed: false,
		},
	];
	return <AccountSetUp data={data} />;
};

export default GeneralSetting;
