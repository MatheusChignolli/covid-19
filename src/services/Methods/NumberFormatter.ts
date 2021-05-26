// import React from 'react';

function numberFormatter(
  n: number | undefined,
  p: number,
  ts: string,
  dp: string
): any {
  const t: string[] = []

  let number

  if (n === null) {
    return '-'
  } else {
    number = typeof n === 'undefined' ? 0 : n.toString()
  }

  if (typeof p == 'undefined') p = 2
  if (typeof ts == 'undefined') ts = ','
  if (typeof dp == 'undefined') dp = '.'

  const numberArray = Number(number).toFixed(p).split('.')

  for (
    let iLen = numberArray[0].length, i = iLen ? iLen % 3 || 3 : 0, j = 0;
    i <= iLen;
    i += 3
  ) {
    t.push(numberArray[0].substring(j, i))
    j = i
  }

  return t.join(dp) + (numberArray[1] ? dp + numberArray[1] : '')
}

export default numberFormatter
