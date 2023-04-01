import React from 'react'
import Button from '../../../components/Button'

export default function Sample() {
  return (
    <Button state='primary'>
        <button onClick={() => console.log('kawaii')}>Click me</button>
    </Button>
  )
}