import type { Meta, StoryObj } from '@storybook/react'

import { FiLogOut } from 'react-icons/fi'

import s from './button.module.scss'

import { Button } from './'

const meta = {
	argTypes: {
		title: {
			control: { type: 'text' },
		},
		variant: {
			control: { type: 'radio' },
			options: ['primary', 'secondary', 'link'],
		},
	},
	component: Button,
	tags: ['autodocs'],
	title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Primary Button',
		disabled: false,
		variant: 'primary',
	},
}
export const PrimaryWithIcon: Story = {
	args: {
		children: (
			<>
				<FiLogOut className={s.icon} /> Primary Button
			</>
		),
		disabled: false,
		variant: 'primary',
	},
}
// children: <Icon />,
// children: 'Secondary Button',
export const SecondaryWithIcon: Story = {
	args: {
		children: (
			<>
				<FiLogOut className={s.icon} /> Button
			</>
		),
		disabled: false,
		variant: 'secondary',
	},
}

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
		disabled: false,
		variant: 'secondary',
	},
}

// export const FullWidth: Story = {
//   args: {
//     children: 'Full Width Primary Button',
//     disabled: false,
//     fullWidth: true,
//     variant: 'primary',
//   },
// }

export const AsLink: Story = {
	args: {
		as: 'a',
		children: 'Link that looks like a button',
		variant: 'primary',
	},
}
