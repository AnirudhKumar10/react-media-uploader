import React from 'react'
import { ReactMediaUploader } from '../src'
import mdx from './media-upload.mdx'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'React Media Uploader',
  component: ReactMediaUploader,
  decorators: [withA11y],
  parameters: {
    docs: {
      page: mdx,
    },
  },
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Intro = () => ''

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PropPlayground = () => {
  return (
    <ReactMediaUploader
      accept="image/*, .pdf"
      onStateChange={(state) => {
        console.log(state)
      }}
    />
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ControlledComponent = () => {
  return (
    <ReactMediaUploader
      accept="image/*, .pdf"
      defaultState={[
        new File(['foo'], 'foo.txt', {
          type: 'text/plain',
        }),
      ]}
      onStateChange={(state) => {
        console.log(state)
      }}
    />
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const UncontrolledComponent = () => {
  return (
    <ReactMediaUploader
      accept="image/*, .pdf"
      defaultState={[
        new File(['foo'], 'foo.txt', {
          type: 'text/plain',
        }),
      ]}
      onStateChange={(state) => {
        console.log(state)
      }}
    />
  )
}
