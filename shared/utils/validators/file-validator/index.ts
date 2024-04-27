import { ValidationCode } from '@/shared/enums'

import { AbstractValidator } from '../abstract-validator'

import type { IValidationError } from '../interfaces'

const KB_SIZE = 1024
const MB_SIZE = KB_SIZE * KB_SIZE
const MB_DEFAULT = 5

interface IFileValidator {
  extensions: string[]
  maxSize?: number
  isCheckFirstErrorOnly?: boolean
}

export class FileValidator extends AbstractValidator {

  private _extensions: string[]

  private _maxSize: number

  private _isCheckFirstErrorOnly: boolean

  constructor ({
    extensions,
    maxSize = MB_DEFAULT * MB_SIZE,
    isCheckFirstErrorOnly = false
  }: IFileValidator) {
    super()
    this._extensions = extensions
    this._maxSize = maxSize
    this._isCheckFirstErrorOnly = isCheckFirstErrorOnly
  }

  public override validate (value: File[] | File): IValidationError {
    const files = value
    let validatonErrors: IValidationError[] = []
    if (Array.isArray(files)) {
      for (let i = 0; i < files.length; i++) {
        const checkRes = this._fileCheck(files[i])
        if (!checkRes.isSuccess) {
          if (this._isCheckFirstErrorOnly) {
            return checkRes
          }
          validatonErrors = [...validatonErrors, checkRes]
        }
      }
    } else {
      const checkRes = this._fileCheck(files)
      if (!checkRes.isSuccess) {
        if (this._isCheckFirstErrorOnly) {
          return checkRes
        }
        validatonErrors = [...validatonErrors, checkRes]
      }
    }

    if (validatonErrors.length > 0) {
      return {
        isSuccess: false,
        errors: {
          code: ValidationCode.INVALID_FILE_ERROR,
          data: validatonErrors
        }
      }
    }

    return super.validate(value)
  }

  private _fileCheck (file: File): IValidationError {
    let isSuccess: boolean = true

    let validationCode: ValidationCode = ValidationCode.INVALID_CODE
    let errorData: string = ''

    if (this._fileSizeCheck(file)) {
      console.log('ValidationCode.INVALID_MAX_FILE_SIZE')
      validationCode = ValidationCode.INVALID_MAX_FILE_SIZE
      errorData = file.name
      isSuccess = false
    }
    if (this._fileExtensionCheck(file)) {
      validationCode = ValidationCode.INVALID_FILE_EXTENSION,
      errorData = file.name
      isSuccess = false
    }

    return {
      isSuccess,
      errors: validationCode === ValidationCode.INVALID_CODE || errorData === ''
        ? undefined
        : {
          code: validationCode,
          data: errorData
        }
    }
  }

  private _fileSizeCheck (file: File): boolean {
    return file.size > this._maxSize
  }

  private _fileExtensionCheck (file: File): boolean {
    const fileExtensionPosition = file.name.search(/\.[0-9a-z]+$/i)
    const fileExtension = file.name.substring(fileExtensionPosition)
    return !this._extensions.includes(fileExtension)
  }

}
