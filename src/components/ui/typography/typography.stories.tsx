import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

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
	parameters: {
		backgrounds: { disable: true },
	},
}

export const H1_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H1',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const H2_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H2',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const H2_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H2',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const H3_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H3',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const H4_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H4',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const H4_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H4',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const H3_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'H3',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Body1_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Body1',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Body1_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Body1',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Subtitle1_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Subtitle1',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Subtitle1_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Subtitle1',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Body2_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Body2',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Body2_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Body2',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Subtitle2_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Subtitle2',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Subtitle2_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Subtitle2',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Caption_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Caption',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Caption_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Caption',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Overline_light: Story = {
	args: {
		color: 'light',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Overline',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Overline_dark: Story = {
	args: {
		color: 'dark',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Overline',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Link1_light: Story = {
	args: {
		as: 'a',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Link1',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Link1_dark: Story = {
	args: {
		as: 'a',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Link1',
	},
	parameters: {
		backgrounds: { disable: false },
	},
}

export const Link2_light: Story = {
	args: {
		as: 'a',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Link2',
	},
	parameters: {
		backgrounds: { disable: true },
	},
}

export const Link2_dark: Story = {
	args: {
		as: 'a',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		variant: 'Link2',
	},
	parameters: { backgrounds: { disable: false } },
}
