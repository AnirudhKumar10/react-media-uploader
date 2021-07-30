import React, { useEffect, useRef, useState } from 'react'
import './assets/media-upload.css'
import {
  convertFileTypeStringToArray,
  validateFileSize,
  validateFileType,
} from './utils/funtion'

export interface IReactMediaUploader {
  /**
   * This prop is sets the inital state of media uploader component is rendered with.
   * This is useful component is un-controlled mode.
   */
  defaultState?: File[]

  /**
   * This prop is sets the state of media uploader component is rendered with.
   * This is useful component is controlled mode.
   */
  state?: File[]

  /**
   * This event prop can be used to attach the change event handler for media uploader
   * component.This is useful in both controlled mode and uncontrolled to observe the
   * chnage of to internal state.
   */
  onStateChange?: (state: File[]) => void

  /**
   * This event is called when media upload starts and handle post api call response.
   * Its is overidden when the user passes funtion. Its is used to observe the internal
   * when the upload button.
   */
  handleUploadMedia?: (state: File[]) => void

  /**
   * This event is called when media upload is canceled or cancel button is clicked.
   */
  handleCancelUpload?: () => void

  /**
   * The accept prop accepts a string that defines the file types the file input
   * should accept. This string is a comma-separated list of unique file type specifiers.
   */
  accept?: string

  /**
   * This props accepts number that defines the maximum size file (in bits) that can be
   * accepted by the media uploded component. File of greater size than this will throw an error.
   */
  maxFileSize?: number

  /**
   * This props accepts number that defines the minimum size file (in bits) that can be
   * accepted by the media uploded component. File of lesser size than this will throw an error.
   */
  minFileSize?: number

  /**
   * This is prop controls the drap and drop feature. If, disabled than drop feature will not function.
   *
   * @default true
   */
  drapAndDrop?: boolean
}

/**
 * React Media Uploader Component allow user to upload media as input[type=file] element
 * with additional features such as drag and drop and file type, file count, file type
 * validations.
 * It has an already defined attrative style and with ability to customization.
 *
 * @example <ReactMediaUpload />
 */
export const ReactMediaUploader: React.FC<IReactMediaUploader> = (props) => {
  const {
    state,
    defaultState,
    handleUploadMedia: handleUpload,
    handleCancelUpload: handleCancel,
    onStateChange,
    accept,
    maxFileSize = Number.MAX_SAFE_INTEGER,
    minFileSize = Number.MIN_SAFE_INTEGER,
    drapAndDrop = true,
  }: IReactMediaUploader = props

  const [internalState, setInternalState] = useState<File[] | null>(
    state ?? defaultState ?? null
  )
  const [dragOver, setDragOver] = useState<boolean>(false)

  const elementRef = useRef<HTMLInputElement>(null)

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e) => {
    console.log(e)
    e.preventDefault()
    if (drapAndDrop) {
      const files = e.dataTransfer.files
      const typeArray = convertFileTypeStringToArray(accept || '')
      if (validateFileType(files, typeArray)) {
        console.log(validateFileType(files, typeArray))
        setInternalState(files)
      }
    }
  }

  /**
     Handle Manually (File Input) Added Files
  **/
  const handleAddImage = (e) => {
    e.preventDefault()
    const files = e.target.files
    validateFileSize(maxFileSize, minFileSize, files)
    if (files) {
      setInternalState(files)
    }
  }

  /**
     Handle Upload after Upload Button Clicked
  **/
  const handleUploadMedia = (e) => {
    e.preventDefault()
    // Handle media Upload
    handleUpload?.(internalState)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCancelUpload = (e) => {
    e.preventDefault()
    // Handle Media Cancel
    setInternalState(null)
    handleCancel?.()
  }

  useEffect(() => {
    onStateChange?.(internalState)
    console.log(elementRef)
  }, [onStateChange, internalState])

  // If file is set, change upload box text to file name
  const dragOverClass = dragOver ? `display-box drag-over` : `display-box`

  // If file is set, change upload box text to file name
  const uploadText = (
    <div>
      <span className="fake-btn">Choose files</span>
      {internalState ? (
        internalState.length > 1 ? (
          <span className="file-msg">{`${internalState.length} files selected`}</span>
        ) : (
          <span className="file-msg">{internalState[0].name}</span>
        )
      ) : (
        <span className="file-msg"> or drag and drop files here</span>
      )}
    </div>
  )

  return (
    <div className="media-upload-wrapper">
      <div className="image-uploader-wrapper">
        <div className={dragOverClass}>
          <div className="icon-text-box">
            <div className="upload-text">{uploadText}</div>
          </div>
          <div>
            <input
              type="file"
              ref={elementRef}
              className="upload-image-input"
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
              onChange={handleAddImage}
              multiple
            />
          </div>
        </div>
      </div>
      {internalState && (
        <button onClick={handleUploadMedia} className="upload-button">
          Upload
        </button>
      )}
    </div>
  )
}

ReactMediaUploader.displayName = 'ReactMediaUploader'
