export function howFast(speed: any): string {
  if (typeof speed !== 'number') {
    throw new Error('speed needs to be a numbers!')
  }
  let how = 'not too fast';
  if (speed >= 200) {
    how = 'ultra fast'
  } else if (speed >= 100) {
    how = 'super fast'
  } else if (speed >= 50) {
    how = 'pretty fast'
  }
  return how
}

module.exports = { howFast }

