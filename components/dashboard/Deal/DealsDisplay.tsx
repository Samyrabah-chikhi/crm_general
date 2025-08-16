import React from 'react'
import { Users } from 'lucide-react'

export default function ClientsDisplay({clients = []}:{clients:any[]}) {
  return (
    <div className='bg-white w-full'>
        <div className='flex items-center gap-4'>
            <Users></Users>
            <h2 className='text-black text-xl'>Clients ({clients?.length})</h2>
        </div>
    </div>
  )
}
