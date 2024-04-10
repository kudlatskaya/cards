import type { Meta, StoryObj } from '@storybook/react'

import Typography from './typography'

const meta = {
	argTypes: {
		color: {
			control: { type: 'radio' },
			options: ['light', 'dark'],
		},
		text: {
			control: { type: 'text' },
		},
		variant: {
			control: { type: 'radio' },
			options: [
				'H1',
				'H2',
				'H3',
				'H4',
				'Body1',
				'Subtitle1',
				'Body2',
				'Subtitle2',
				'Caption',
				'Overline',
				'Link1',
				'Link2',
			],
		},
	},
	component: Typography,
	tags: ['autodocs'],
	title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H1',
	},
}

// as: 'a',

export const H1_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H1',
	},
}

export const H2_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H2',
	},
}

export const H2_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H2',
	},
}
