import React, { useEffect, useRef, useState } from 'react'
import './assets/media-upload.css'

export const MediaUploader: React.FC = () => {
  const [state, setState] = useState<any>({})

  const elementRef = useRef()

  const handleDragEnter = (e) => {
    e.preventDefault()
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setState({
      dragOver: false,
    })
  }

  const handleDrop = (e) => {
    e.preventDefault()
  }

  /**
     Handle Manually (File Input) Added Files
  **/
  const handleAddImage = (e) => {
    e.preventDefault()
  }

  /**
     Handle Upload after Upload Button Clicked
  **/
  const handleUploadImage = (e) => {
    e.preventDefault()
    /**
      Handle image Upload
    **/
  }
  const handleCancelUpload = (e) => {
    e.preventDefault()
    setState({
      file: null,
    })
  }

  useEffect(() => {
    const divElement = elementRef.current
    console.log(divElement)
  }, [])

  const dragOverClass = state.dragOver ? `display-box drag-over` : `display-box`

  // If file is set, change upload box text to file name
  const uploadText = state.file ? (
    <div>
      <h4>{state.file.name}</h4>
      <button
        className="cancel-upload-button btn btn-warning"
        onClick={handleCancelUpload}
      >
        Cancel
      </button>
      <button
        className="upload-button btn btn-primary"
        onClick={handleUploadImage}
      >
        Upload
      </button>
    </div>
  ) : (
    <div>
      <h4>Choose Files to Upload</h4>
    </div>
  )

  // Show Error message if file type is not an image
  const errorNotification = state.errorNotification ? (
    <div className="error-notification">
      <p>{state.errorNotification}</p>
    </div>
  ) : null

  // Match drag over css to hover css

  return (
    <div className="image-uploader-wrapper">
      <div className={dragOverClass}>
        <div className="icon-text-box">
          <div className="upload-icon">
            <i className="fa fa-upload" aria-hidden="true" />
          </div>
          <div className="upload-text">{uploadText}</div>
          {errorNotification}
        </div>
        <div>
          <input
            type="file"
            ref={elementRef}
            id="upload-image-input"
            className="upload-image-input"
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onChange={handleAddImage}
            multiple
          />
        </div>
      </div>
    </div>
  )
}
