'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';

import { columns, OrderColumn } from './columns';
import Heading from '@/components/ui/heading';
import ApiList from '@/components/ui/api-list';

interface OrderClientProps {
	data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
	return (
		<>
			<div className="flex items-center justify-between">
				<Heading title={`Orders (${data.length})`} description="Manage orders for your store" />
			</div>
			<Separator />
			<DataTable searchKey="products" columns={columns} data={data} />
		</>
	);
};
