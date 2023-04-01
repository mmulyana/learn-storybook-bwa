import React from 'react'

import { ComponentMeta } from '@storybook/react'

import Badge from '../../../components/Badge'

export default {
    title: 'Components/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>

export const Success = (args: any) => <Badge {...args}>success</Badge>
Success.args = {
    state: "success"
}

export const Warning = (args: any) => <Badge {...args}>Warning</Badge>
Warning.args = {
    state: "warning"
}

export const Danger = (args: any) => <Badge {...args}>Danger</Badge>
Danger.args = {
    state: "danger"
}