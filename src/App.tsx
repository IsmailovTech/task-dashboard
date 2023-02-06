import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Accounts from './components/Accounts/Accounts'
import Integration from './components/Integrations/Integration'
import Notification from './components/Notificatiion/Notification'
import Profile from './components/Profile/Profile'
import Subscription from './components/Subscription/Subscription'
import Usagerepost from './components/UsageReport/Usagerepost'
import Users from './components/Users/Users'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Sidebar1 from './components/BaseComponents/Sidebar1'

function App() {
  const [dark, setDark] = useState(false)

  const changeTheme = () => {
    setDark(!dark)
  }

  return (
    <div>
      <div className={`flex ${dark === true ? 'bg-white' : 'bg-zinc-900 '} `}>
        <div className="w-sitebarWidth ">
          <Sidebar1 />
        </div>
        <Routes>
          <Route path="/" element={<Accounts />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/subscription" element={<Subscription dark={dark} />} />
          <Route path="/usageReport" element={<Usagerepost />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <button
          className="absolute right-2 bg-zinc-700 p-1 rounded-full top-2 hover:bg-zinc-600"
          onClick={changeTheme}
        >
          <DarkModeIcon
            className={`${dark === true ? 'text-black' : 'text-white'}`}
          />
        </button>
      </div>
    </div>
  )
}

export default App
