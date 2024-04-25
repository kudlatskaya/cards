import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
	argTypes: {
		// color: {
		// 	control: { type: 'radio' },
		// 	options: ['light', 'dark'],
		// },
		// text: {
		// 	control: { type: 'text' },
		// },
		// variant: {
		// 	control: { type: 'radio' },
		// 	options: [
		// 		'H1',
		// 		'H2',
		// 		'H3',
		// 		'H4',
		// 		'Body1',
		// 		'Subtitle1',
		// 		'Body2',
		// 		'Subtitle2',
		// 		'Caption',
		// 		'Overline',
		// 		'Link1',
		// 		'Link2',
		// 	],
		// },
	},
	component: Typography.H1,
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#000' },
				{ name: 'light', value: '#fff' },
			],
		},
	},
	tags: ['autodocs'],
	title: 'Components/Typography',
} satisfies Meta<typeof Typography.H1>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
	args: {
		children: (
			<>
				<Typography.H1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H1>
				<Typography.H2 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H2>
				<Typography.Body1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Body1>
				<Typography.Body2 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Body2>
				<Typography.Caption color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Caption>
				<Typography.H3 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H3>
				<Typography.H4 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H4>
				<Typography.Link1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Link1>
				<p>
					<Typography.Link2 color={'light'}>
						{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
					</Typography.Link2>
				</p>
				<Typography.Overline color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Overline>
				<Typography.Subtitle1 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Subtitle1>
				<Typography.Subtitle2 color={'light'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Subtitle2>
			</>
		),
		color: 'light',
	},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
}

export const Dark: Story = {
	args: {
		children: (
			<>
				<Typography.H1 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H1>
				<Typography.H2 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H2>
				<Typography.Body1 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Body1>
				<Typography.Body2 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Body2>
				<Typography.Caption color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Caption>
				<Typography.H3 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H3>
				<Typography.H4 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.H4>
				<Typography.Link1 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Link1>
				<p>
					<Typography.Link2 color={'dark'}>
						{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
					</Typography.Link2>
				</p>
				<Typography.Overline color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Overline>
				<Typography.Subtitle1 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Subtitle1>
				<Typography.Subtitle2 color={'dark'}>
					{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}{' '}
				</Typography.Subtitle2>
			</>
		),
		color: 'dark',
	},
	parameters: {
		backgrounds: {
			default: 'light',
		},
	},
}
