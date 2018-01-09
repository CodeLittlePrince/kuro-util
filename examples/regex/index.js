import regex from '../../src/regex/index.js'

const tel = document.getElementById('tel')
const tip = document.getElementById('tip')
tel.addEventListener('input', () => {
  tip.className = regex.mobile.test(tel.value) ? '' : 'hide'
})