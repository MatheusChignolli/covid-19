export function dateFormatter(sentence: string, date: string): any {
  if (date === '') {
    return ''
  }

  const updatedAt = Number(Date.parse(date))
  const newDate = new Date(updatedAt)

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
    ,
    { value: hour },
    ,
    { value: minute },
  ] = dateTimeFormat.formatToParts(newDate)

  return `${sentence} ${day}/${month}/${year} ${hour}:${minute}`
}
