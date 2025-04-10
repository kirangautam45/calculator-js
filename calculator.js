function appendValue(value) {
  document.getElementById('display').value += value
}
function clearDisplay() {
  document.getElementById('display').value = ''
}
function backspace() {
  let display = document.getElementById('display')
  display.value = display.value.slice(0, -1)
}
function sanitizeExpression(expression) {
  return expression
    .replace(/\+{2,}/g, '+') // Replace multiple '+' with a single '+'
    .replace(/-{2,}/g, '+') // Replace '--' with '+'
    .replace(/\+-| -\+/g, '-') // Normalize '+-' or '-+'
    .replace(/^\+/, '') // Remove leading '+' if any
}
function calculateResult() {
  let display = document.getElementById('display')
  let sanitizedExpression = sanitizeExpression(display.value)

  try {
    display.value = eval(sanitizedExpression)
  } catch {
    display.value = 'Error'
  }
}
