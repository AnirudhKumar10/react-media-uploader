import {
  FileSizeExceededMaxFileSizeLimit,
  FileSizeExceededMinFileSizeLimit,
  FileTypeNotValid,
} from './error'

// TODO - NEXT VERSION
// export const uploadMedia = (
//   url: string,
//   data: string | Blob
// ): Promise<Response> => {
//   const formData = new FormData()
//   formData.append('image', data)
//   const response = fetch(url, {
//     method: 'POST',
//     body: formData,
//   })

//   return response
// }

export const convertFileTypeStringToArray = (accept: string): string[] => {
  let tempArray = accept?.split(',')
  tempArray = tempArray.map((temp) => temp.trim())
  return tempArray
}

export const validateFileType = (files: File[], types: string[]): boolean => {
  for (let i = 0; i < files.length; i++) {
    let isFileValid = false
    for (let j = 0; j < types.length; j++) {
      if (files[i].name.endsWith(types[j]) || files[i].type.match(types[j])) {
        isFileValid = true
        break
      }
    }
    if (!isFileValid) {
      console.error(
        `File: ${files[i].name} of type ${files[i].type} is not acceptable. `
      )
      throw new FileTypeNotValid()
    }
  }
  return true
}

export const validateFileSize = (
  max: number,
  min: number,
  files: File[]
): boolean => {
  files.forEach((file) => {
    if (file.size >= max) {
      throw new FileSizeExceededMaxFileSizeLimit()
    }
    if (file.size <= min) {
      throw new FileSizeExceededMinFileSizeLimit()
    }
  })
  return true
}
