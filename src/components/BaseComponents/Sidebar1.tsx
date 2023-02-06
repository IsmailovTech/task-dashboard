import Box from '@mui/material/Box/Box'
import React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BusinessIcon from '@mui/icons-material/Business'
import GroupIcon from '@mui/icons-material/Group'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'


function Sidebar1() {

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index)
  }

const organization = [
    {
      org: [
        {
          id: 1,
          text: 'Accounts',
          icon: <BusinessIcon />,
          navigate: '/accounts',
        },
        {
          id: 2,
          text: 'Users',
          icon: <GroupIcon />,
          navigate: '/profile',
        },
        {
          id: 3,
          text: 'Subscription',
          icon: <CreditCardIcon />,
          navigate: '/subscription',
        },
        {
          id: 4,
          text: 'Usage Report',
          icon: <EqualizerIcon />,
          navigate: '/usageReport',
        },
      ],
      account: [
        {
          id: 5,
          text: 'Notification',
          icon: <NotificationsActiveOutlinedIcon />,
          navigate: '/notifications',
        },
        {
          id: 6,
          text: 'Integrations',
          icon: <ExtensionOutlinedIcon />,
          navigate: '/integration',
        },
      ],
      user: [
        {
          id: 7,
          text: 'Profile',
          icon: <AccountBoxOutlinedIcon />,
          navigate: '/profile',
        },
      ],
    },
  ]

  return (
    <Box
      sx={{ bgcolor: '#212530' }}
      className="w-sitebarWidth h-screen  border-r border-zinc-700 py-3 px-1"
    >
      <Button
        variant="text"
        className="flex group hover:text-gray-400 cursor-pointer"
      >
        <ArrowBackIcon
          className="bg-gray-700 text-white rounded-lg p-1 group-hover:bg-blue-500 "
          sx={{ fontSize: 28 }}
        />
        <span className="text-gray-200 text-md ml-3 capitalize group-hover:text-blue-500 ">
          Settings
        </span>
      </Button>

      {organization.map((items, i) => (
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{ marginTop: '20px' }}
          key={i}
        >
          <h3 className="text-gray-600 text-xs font-semibold pl-4 mb-4">
            ORGANIZATION
          </h3>
          {items.org.map((item, i) => (
            <Link to={item.navigate} key={i}>
              <ListItemButton
                selected={selectedIndex === item.id}
                onClick={(event) => handleListItemClick(event, item.id)}
                className="!my-2"
              >
                <ListItemIcon sx={{ color: '#919AB5', minWidth: '38px' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  secondaryTypographyProps={{
                    style: { color: '#DDDDDE', fontSize: '12px' },
                  }}
                  secondary={item.text}
                />
              </ListItemButton>
            </Link>
          ))}

          <List component="nav" aria-label="main mailbox folders">
            <h3 className="text-gray-600 text-sm font-semibold pl-4">
              ACCOUNT SETTINGS
            </h3>
            {items.account.map((item, index) => (
              <Link to={item.navigate} key={index}>
                <ListItemButton
                  selected={selectedIndex === item.id}
                  onClick={(event) => handleListItemClick(event, item.id)}
                  className="!my-2"
                >
                  <ListItemIcon sx={{ color: '#919AB5', minWidth: '38px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    secondaryTypographyProps={{
                      style: { color: '#DDDDDE', fontSize: '12px' },
                    }}
                    secondary={item.text}
                  />
                </ListItemButton>
              </Link>
            ))}
          </List>

          <List component="nav" aria-label="main mailbox folders">
            <h3 className="text-gray-600 text-sm font-semibold pl-4">
              PROFILE SETTINGS
            </h3>
            {items.user.map((item, index) => (
              <Link to={item.navigate} key={index}>
                <ListItemButton
                  selected={selectedIndex === item.id}
                  onClick={(event) => handleListItemClick(event, item.id)}
                  className="!my-2"
                >
                  <ListItemIcon sx={{ color: '#919AB5', minWidth: '38px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    secondaryTypographyProps={{
                      style: { color: '#DDDDDE', fontSize: '12px' },
                    }}
                    secondary={item.text}
                  />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </List>
      ))}
    </Box>
  )
}

export default Sidebar1
