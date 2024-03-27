import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'default',
  },
}
// export const PrimaryWithIcon: Story = {
//   args: {
//     children: (
//       <>
//         <FiLogOut className={s.icon} /> Primary Button
//       </>
//     ),
//     disabled: false,
//     variant: 'primary',
//   },
// }

// export const SecondaryWithIcon: Story = {
//   args: {
//     children: (
//       <>
//         <FiLogOut className={s.icon} /> Button
//       </>
//     ),
//     disabled: false,
//     variant: 'secondary',
//   },
// }
//
// export const Secondary: Story = {
//   args: {
//     children: 'Secondary Button',
//     disabled: false,
//     variant: 'secondary',
//   },
// }

// export const FullWidth: Story = {
//   args: {
//     children: 'Full Width Primary Button',
//     disabled: false,
//     fullWidth: true,
//     variant: 'primary',
//   },
// }

// export const AsLink: Story = {
//   args: {
//     as: 'a',
//     children: 'Link that looks like a button',
//     variant: 'primary',
//   },
// }
