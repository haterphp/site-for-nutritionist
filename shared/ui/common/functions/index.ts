type TClassname = string | null | undefined | boolean

export const makeClassname = (...classNames: TClassname[]): string => {
    return classNames.filter(i => typeof i === 'string').join(' ')
}