'use client';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod';
import { redirect } from 'next/navigation';

const formSchema = z.object({
	name: z.string().min(1),
});

export const StoreModal = () => {
	const storeModal = useStoreModal();

	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	});

	const handleSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true);

			const response = await axios.post('/api/stores', values);

			toast.success('Store created.');

			window.location.assign(`/${response.data.id}`);
		} catch (error) {
			toast.error('Something went wrong.');
		} finally {
			setLoading(false);
		}
	};
	return (
		<Modal
			title="Create Store"
			description="Add a new store to manage products and categories"
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}
		>
			<div>
				<div className="space-y-4 py-2 pb-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSubmit)}>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input disabled={loading} placeholder="E-Commerse" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="pt-6 space-x-2 flex justify-end items-center w-full">
								<Button disabled={loading} variant={'outline'} onClick={storeModal.onClose}>
									Cancel
								</Button>
								<Button disabled={loading} type="submit">
									Continue
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</Modal>
	);
};
