export class FileTypeNotValid extends Error {
  constructor(...params: any) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FileTypeNotValid)
    }

    this.message = `Invalid file dropped in Media Uploader`
    this.name = this.constructor.name

    Object.setPrototypeOf(this, FileTypeNotValid.prototype)
  }
}

export class FileSizeExceededMaxFileSizeLimit extends Error {
  constructor(...params: any) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FileSizeExceededMaxFileSizeLimit)
    }

    this.message = `File Size exceeded the maximum file size`
    this.name = this.constructor.name

    Object.setPrototypeOf(this, FileSizeExceededMaxFileSizeLimit.prototype)
  }
}

export class FileSizeExceededMinFileSizeLimit extends Error {
  constructor(...params: any) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FileSizeExceededMinFileSizeLimit)
    }

    this.message = `File Size exceeded the minimum file size`
    this.name = this.constructor.name

    Object.setPrototypeOf(this, FileSizeExceededMinFileSizeLimit.prototype)
  }
}
