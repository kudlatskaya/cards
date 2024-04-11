import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from '@/components/ui/checkbox/checkbox'

const meta = {
	argTypes: {
		text: {
			control: { type: 'text' },
		},
		// variant: {
		// 	control: { type: 'radio' },
		// 	options: ['primary', 'secondary', 'link'],
		// },
	},
	component: CheckboxComponent,
	tags: ['autodocs'],
	title: 'Components/Checkbox',
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		// children: 'Primary Button',
		// disabled: false,
		// variant: 'primary',
	},
}
