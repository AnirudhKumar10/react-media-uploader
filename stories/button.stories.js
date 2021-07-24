// Button.stories.js | Button.stories.jsx

import React from 'react'

import { MediaUploader } from '../src/'

export default {
  component: MediaUploader,
  title: 'Components/MediaUploader',
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Primary = () => {
  return <MediaUploader />
}
