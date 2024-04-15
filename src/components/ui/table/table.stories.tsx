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
				<Table.Body>{'ku'}</Table.Body>
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
