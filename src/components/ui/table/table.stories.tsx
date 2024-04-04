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
    component: Table,
    tags: ['autodocs'],
    title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        // disabled: false,
        // label: 'Input',
        // variant: 'default',
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