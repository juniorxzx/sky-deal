export function formatBarCode(code: string) {
  const clean = code.replace(/\D/g, '')

  if (clean.length === 47) {
    return (
      clean.slice(0, 5) + '.' +
      clean.slice(5, 10) + ' ' +
      clean.slice(10, 15) + '.' +
      clean.slice(15, 21) + ' ' +
      clean.slice(21, 26) + '.' +
      clean.slice(26, 32) + ' ' +
      clean.slice(32, 33) + ' ' +
      clean.slice(33)
    )
  } else if (clean.length === 48) {
    return (
      clean.slice(0, 11) + '-' +
      clean.slice(11, 12) + ' ' +
      clean.slice(12, 23) + '-' +
      clean.slice(23, 24) + ' ' +
      clean.slice(24, 35) + '-' +
      clean.slice(35, 36) + ' ' +
      clean.slice(36, 47) + '-' +
      clean.slice(47)
    )
  } else {
    return clean
  }
}
