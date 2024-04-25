import type { Meta, StoryObj } from '@storybook/react'

import Close from '@/assets/icons/components/Close'
import Eye from '@/assets/icons/components/Eye'
import Search from '@/assets/icons/components/Search'

import { Input } from './input'

const meta = {
	argTypes: {
		title: {
			control: { type: 'text' },
		},
		// variant: {
		// 	control: { type: 'radio' },
		// 	options: ['default', 'password', 'search'],
		// },
	},
	component: Input,
	tags: ['autodocs'],
	title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		disabled: false,
		label: 'Input',
		variant: 'default',
	},
}

export const Password: Story = {
	args: {
		disabled: false,
		iconEnd: <Eye />,
		label: 'Input',
		variant: 'password',
	},
}

export const SearchInput: Story = {
	args: {
		disabled: false,
		iconEnd: <Close />,
		iconStart: <Search />,
		label: 'Search input',
		variant: 'search',
	},
}
