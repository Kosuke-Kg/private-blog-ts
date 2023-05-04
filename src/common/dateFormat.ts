import { format } from 'date-fns'

interface func {
  dateJP: (dateTime: Date) => string
}

const dateFormat = (): func => {
  const dateJP = (stringDate: Date): string => format(new Date(stringDate), 'yyyy年MM月dd日')

  return { dateJP }
}

export default dateFormat
