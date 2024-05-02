import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './table'

const meta = {
	argTypes: {},
	component: Table.Root,
	tags: ['autodocs'],
	title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: (
			<Table.Root>
				<Table.Head>
					<Table.Tr>
						<Table.Th>{'Name'}</Table.Th>
						<Table.Th>{'Name'}</Table.Th>
						<Table.Th>{'Name'}</Table.Th>
						<Table.Th>{'Name'}</Table.Th>
						<Table.Th>{'Name'}</Table.Th>
						<Table.Th>{'Name'}</Table.Th>
					</Table.Tr>
				</Table.Head>
				<Table.Body>
					<Table.Tr>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
						<Table.Td>{'Name'}</Table.Td>
					</Table.Tr>
				</Table.Body>
			</Table.Root>
		),
	},
}
