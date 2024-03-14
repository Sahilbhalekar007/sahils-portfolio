import React, { useEffect, useState } from 'react'
import { api } from './Dashboard'

const Contacts = () => {
    const [allContacts, setallContacts] = useState()
    const GetAllContacts = async () => {
        try {
            const { data } = await api.get("/contacts")
            console.log("contact added success")
            setallContacts(data)
            // toast.success("Thank You For Enquiry")

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { GetAllContacts() }, [])
    return <>
        <table className='table table-bordered mx-auto w-3/4 mt-10 table-hover'>
            <thead>
                <tr className='text-left'>
                    <th className='border p-2'>Name</th>
                    <th className='border p-2'>Email</th>
                    <th className='border p-2'>Message</th>
                </tr>
            </thead>
            <tbody>
                {
                    allContacts && allContacts.map(item => <tr>
                        <td className='border p-2'>{item.name}</td>
                        <td className='border p-2'>{item.email}</td>
                        <td className='border p-2'>{item.message}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Contacts