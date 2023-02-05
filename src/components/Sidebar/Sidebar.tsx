import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BusinessIcon from '@mui/icons-material/Business'
import GroupIcon from '@mui/icons-material/Group'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'

interface Props {}

function Sidebar(props: Props) {
  const {} = props

  return (
    <div className="w-sitebarWidth h-screen bg-gray-800 border-r border-zinc-700 py-3 px-1">
      <div className="flex group hover:text-gray-400 cursor-pointer pl-2">
        <ArrowBackIcon
          className="bg-gray-700 text-white rounded-lg p-1 group-hover:bg-blue-500 "
          sx={{ fontSize: 28 }}
        />
        <span className="text-gray-200 text-lg ml-3 group-hover:text-blue-500 ">
          Settings
        </span>
      </div>

      <div className="mt-8">
        <p className="text-gray-600 text-sm font-semibold pl-2">ORGANIZATION</p>
        <ul className="flex flex-col gap-2 text-sm mt-5">
          <li>
            <NavLink
              to={'/accounts'}
              className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer "
            >
              <BusinessIcon
                className=" text-gray-400 rounded-md p-1"
                sx={{ fontSize: 28 }}
              />
              Accounts
            </NavLink>
          </li>
          <li className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer ">
            <NavLink
              to={'/users'}
              className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer "
            >
              <GroupIcon
                className=" text-gray-400 rounded-md p-1"
                sx={{ fontSize: 28 }}
              />
              Users
            </NavLink>
          </li>
          <li>
            <Link
              to={'/subscription'}
              className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer "
            >
              <CreditCardIcon
                className=" text-gray-400 rounded-md p-1"
                sx={{ fontSize: 28 }}
              />
              Subscription
            </Link>
          </li>
          <li>
            <Link
              to={'/usageReport'}
              className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer "
            >
              <EqualizerIcon
                className=" text-gray-400 rounded-md p-1"
                sx={{ fontSize: 28 }}
              />
              Usage report
            </Link>
          </li>
        </ul>

        <p className="text-gray-600 text-sm font-semibold pl-2 mt-5">
          ACCOUNT SETTINGS
        </p>
        <ul className="flex flex-col gap-2 text-sm mt-4">
          <li>
            <Link
              to={'/notifications'}
              className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer "
            >
              <NotificationsActiveOutlinedIcon
                className=" text-gray-400 rounded-md p-1"
                sx={{ fontSize: 28 }}
              />
              Notifications
            </Link>
          </li>
          <li>
            <Link
              to={'/integration'}
              className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer "
            >
              <ExtensionOutlinedIcon
                className=" text-gray-400 rounded-md p-1"
                sx={{ fontSize: 28 }}
              />
              Integrations
            </Link>
          </li>
        </ul>

        <p className="text-gray-600 text-sm font-semibold pl-2 mt-5">
          USER SETTINGS
        </p>
        <ul className="flex flex-col gap-2 text-sm mt-4">
          <li>
            <Link
              to={'/profile'}
              className="text-gray-200 flex items-center gap-2 pl-1 py-1 hover:bg-zinc-600 transition-all rounded-lg cursor-pointer "
            >
              <AccountBoxOutlinedIcon
                className=" text-gray-400 rounded-md p-1"
                sx={{ fontSize: 28 }}
              />
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
