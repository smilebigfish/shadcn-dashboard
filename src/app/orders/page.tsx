'use client'
import { TestData } from '@/components/Data'
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

const columns: ColumnDef<any>[] = [
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
                <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
                    "bg-red-200": row.getValue("status") === "failed",
                    "bg-orange-200": row.getValue("status") === "processing",
                    "bg-gree-200": row.getValue("status") === "success",
                    "bg-blue-200": row.getValue("status") === "pending",
                    "bg-yellow-200": row.getValue("status") === "completed",
                })}>
                    {row.getValue("status")}
                </div>
            )
        }
    },
    {
        accessorKey: "id",
        header: "OrderNumber",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
]

const OrderPage = (props: Props) => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="OrderPage" />
            <DataTable columns={columns} data={TestData} />
        </div>
    )
}

export default OrderPage