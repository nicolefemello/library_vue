export function debounce<F extends (...args: unknown[]) => unknown>(
  fn: F,
  delay: number,
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<F>): void => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
