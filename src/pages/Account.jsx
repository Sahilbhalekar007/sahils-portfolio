import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Contacts from './Contacts'

const Account = () => {
    const [loadCompo, setloadCompo] = useState("dashboard")
    return <>
        <div className='bg-red-300 flex'>
            <div onClick={e => setloadCompo("dashboard")} className={`cursor-pointer p-3 flex-1 ${loadCompo === "dashboard" && "bg-blue-300"}`}>Projects</div>
            <div onClick={e => setloadCompo("")} className={`cursor-pointer p-3 flex-1 ${loadCompo !== "dashboard" && "bg-blue-300"}`}>Contacts</div>
        </div>
        {
            loadCompo === "dashboard"
                ? <Dashboard />
                : <Contacts />
        }
    </>
}

export default Account