import React from 'react'

import { ComponentMeta } from '@storybook/react'

import Brand from '../../../components/Brand'

export default {
    title: 'Components/Brand',
    component: Brand,
} as ComponentMeta<typeof Brand>

export const Light = (args: any) => (
    <div className='bg-navy min-h-min w-full p-10'>
        <Brand className='w-32 h-16' {...args} />
    </div>
)
Light.args = {
    color: "light"
}

export const Dark = (args: any) => (
    <div className='bg-green min-h-min w-full p-10'>
        <Brand className='w-32 h-16' {...args} />
    </div>        
)
Dark.args = {
    color: "dark"
}