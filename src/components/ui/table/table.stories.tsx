import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './table'

const meta = {
	argTypes: {
		// title: {
		//     control: { type: 'text' },
		// },
		// variant: {
		//     control: { type: 'radio' },
		//     options: ['default', 'password', 'search'],
		// },
	},
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
						<Table.Th>{'Name1'}</Table.Th>
						<Table.Th>{'Name2'}</Table.Th>
						<Table.Th>{'Name3'}</Table.Th>
					</Table.Tr>
				</Table.Head>
				<Table.Body>
					<Table.Tr>
						<Table.Td>{'Val1'}</Table.Td>
						<Table.Td>{'Val2'}</Table.Td>
						<Table.Td>{'Val3'}</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>{'Val1'}</Table.Td>
						<Table.Td>{'Val2'}</Table.Td>
						<Table.Td>{'Val3'}</Table.Td>
					</Table.Tr>
				</Table.Body>
			</Table.Root>
		),
	},
}

// export const Password: Story = {
//     args: {
//         disabled: false,
//         label: 'Input',
//         variant: 'password',
//     },
// }
//
// export const Search: Story = {
//     args: {
//         disabled: false,
//         label: 'Search input',
//         variant: 'search',
//     },
// }
