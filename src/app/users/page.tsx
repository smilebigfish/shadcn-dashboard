'use client'

import { TestData } from '@/components/Data'
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

const columns: ColumnDef<any>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            return (
                <div className='flex gap-2 items-center'>
                    <img className='h-10 w-10' src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`} alt="user-image" />
                    <p> {row.getValue("name")}</p>
                </div>
            )
        }
    }, {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "age",
        header: "Age",
    },
    {
        accessorKey: "birthday",
        header: "Birthday",
    },

]

const UsersPage = (props: Props) => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="UsersPage" />
            <DataTable columns={columns} data={TestData} />
        </div>
    )
}

export default UsersPage