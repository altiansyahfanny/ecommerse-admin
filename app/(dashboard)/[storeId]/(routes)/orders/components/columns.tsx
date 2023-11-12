'use client';

import { ColumnDef } from '@tanstack/react-table';

export type OrderColumn = {
	id: string;
	phone: string;
	address: string;
	totalPrice: string;
	products: string;
	isPaid: boolean;
	createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
	{
		accessorKey: 'products',
		header: 'Products',
	},
	{
		accessorKey: 'phone',
		header: 'Phone',
	},
	{
		accessorKey: 'address',
		header: 'Address',
	},
	{
		accessorKey: 'totalPrice',
		header: 'Total Price',
	},
	{
		accessorKey: 'isPaid',
		header: 'Paid',
		// cell: ({ row }) => <span>{row.original.isPaid ? 'Ya' : 'No'}</span>,
	},
	{
		accessorKey: 'createdAt',
		header: 'Date',
	},
];
