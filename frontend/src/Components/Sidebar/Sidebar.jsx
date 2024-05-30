'use client'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ApartmentIcon from '@mui/icons-material/Apartment'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import InventoryIcon from '@mui/icons-material/Inventory'
import MenuIcon from '@mui/icons-material/Menu'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'
import PublicIcon from '@mui/icons-material/Public'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import SignpostIcon from '@mui/icons-material/Signpost'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logoAdmin from '../../../public/logo-admin.svg'

const drawerWidth = 280

const openedMixin = theme => ({
	width: drawerWidth,
	backgroundColor: '#001f3f',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = theme => ({
	backgroundColor: '#001f3f',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
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
}))

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
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
}))

export default function Sidebar({ children }) {
	const theme = useTheme()
	const [open, setOpen] = useState(false)
	const [menu, setMenu] = useState(null)

	const changeMenuState = id => {
		if (id !== menu) setMenu(id)
	}

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const sideBarItems = [
		{
			icon: <InsertDriveFileIcon />,
			title: 'Cтраницы',
			link: '/admin/page',
		},
		{
			icon: <BusinessCenterIcon />,
			title: 'Туры',
			link: '/admin/tour',
		},
		{
			icon: <SignpostIcon />,
			title: 'Типы туров',
			link: '/admin/tour_type',
		},
		{
			icon: <RoomServiceIcon />,
			title: 'Услуги',
			link: '/admin/services',
		},
		{
			icon: <PublicIcon />,
			title: 'Страны',
			link: '/admin/country',
		},
		{
			icon: <PublicIcon />,
			title: 'Города',
			link: '/admin/city',
		},
		{
			icon: <AccountBalanceIcon />,
			title: 'Места',
			link: '/admin/place',
		},
		{
			icon: <ApartmentIcon />,
			title: 'Гостиницы',
			link: '/admin/hotel',
		},
		{
			icon: <StickyNote2Icon />,
			title: 'Типы статей',
			link: '/admin/news_type',
		},
		{
			icon: <StickyNote2Icon />,
			title: 'Статьи',
			link: '/admin/news',
		},
		{
			icon: <HelpOutlineIcon />,
			title: 'FAQ',
			link: '/admin/faq',
		},

		{
			icon: <PersonIcon />,
			title: 'Пользователи',
			link: '/admin/users',
		},
		{
			icon: <PeopleIcon />,
			title: 'Партнеры',
			link: '/admin/team',
		},
		{
			icon: <InventoryIcon />,
			title: 'Заказы',
			link: '/admin/orders',
		},
		{
			icon: <ContactEmergencyIcon />,
			title: 'Сотрудники',
			link: '/admin/about',
		},
		{
			icon: <MonetizationOnIcon />,
			title: 'Валюта',
			link: '/admin/exchange',
		},
	]

	return (
		<Box component='main' sx={{ display: 'flex' }}>
			<AppBar
				position='fixed'
				open={open}
				sx={{ backgroundColor: '#fff', color: '#1f2d3d' }}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: 5,
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography component='ul' sx={{ display: 'flex', gap: '16px' }}>
						<Typography component='li'>
							<Link href='/'>Перейти на сайт</Link>
						</Typography>
						<Typography component='li'>
							<Link href='/admin'>Вернуться на главную</Link>
						</Typography>
						<Typography component='li'>
							<Link href='/exit'>Выход</Link>
						</Typography>
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				onMouseEnter={handleDrawerOpen}
				onMouseLeave={handleDrawerClose}
				variant='permanent'
				open={open}
			>
				<DrawerHeader>
					<Link href='/admin'>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'start',
								width: '100%',
								padding: '0 20px',
								gap: '10px',
								cursor: 'pointer',
							}}
							component='span'
						>
							<Box sx={{ maxHeight: '33px', maxWidth: '33px' }}>
								<Image
									className='w-full h-full object-contain'
									src={logoAdmin}
									alt='logoAdmin'
								/>
							</Box>
							<Typography sx={{ color: 'white' }}>Minzifa Travel ®</Typography>
						</Box>
					</Link>
					<IconButton sx={{ color: '#fff' }} onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<List sx={{ color: '#fff', padding: '5px 5px 0' }}>
					{sideBarItems.map((item, index) => (
						<Link key={item.title} href={item.link}>
							<ListItem
								onClick={() => changeMenuState(index)}
								disablePadding
								sx={{ display: 'block' }}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										borderRadius: '8px',
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
										background: menu === index ? '#007bff' : '#001f3f',
									}}
								>
									<ListItemIcon
										sx={{
											color: open || menu === index ? '#fff' : '#6c757d',
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}
									>
										{item.icon}
									</ListItemIcon>
									<ListItemText
										primary={item.title}
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
			<Box sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	)
}
