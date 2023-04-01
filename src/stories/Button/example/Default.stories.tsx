import React from 'react'
import { ReactComponent as GoogleLogo } from '../../../assets/images/google-logo.svg'
import { ComponentMeta } from '@storybook/react'

import Button from '../../../components/Button'

export default {
  title: 'Components/Button/Example',
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary = (args: any) => (
  <Button {...args}>
    <button onClick={() => console.log('kawaii')}>Click me</button>
  </Button>
)
Primary.args = {
  state: 'primary',
}

export const Secondary = (args: any) => (
  <Button {...args}>
    <button>Sign In</button>
  </Button>
)
Secondary.args = {
  state: 'secondary',
}

export const Alternative = (args: any) => (
  <Button {...args}>
    <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
      <GoogleLogo />
      <span className='ml-2'>Sign In with Google</span>
    </a>
  </Button>
)
Alternative.args = {
  state: 'alternative',
  className: 'border-2 border-[#E7E5F4]',
}
