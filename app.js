const state = {
  a: 'apple',
  b: 'banana',
  c: 'city',
  d: 'dom',
  e: 'end',
  f: 'forEach',
  g: 'gesdrwesf',
}
const stateFirstLetter = Object.keys(state)
const stateValues = Object.values(state)

function getElements(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    ;`No element exists with selection ${selection} check selection`
  }
}

const firstLetter = getElements('#firstLetter')
const values = getElements('#values')
window.addEventListener('DOMContentLoaded', function () {
  firstLetter.innerHTML = stateFirstLetter
    .map((i) => {
      return `<option value="${i}">${i.toUpperCase()}</option>`
    })
    .join('')
  values.innerHTML = stateValues
    .map((i) => {
      return `<option value="${i}">${i[0].toUpperCase()}${i.slice(
        1
      )}</option>`
    })
    .join('')

  const selectedFirstLetter = getElements('#firstLetter')
  const selectedValues = getElements('#values')

  selectedFirstLetter.addEventListener('change', (e) => {
   const selectedValue = e.target.value
    selectedValues.value = state[selectedValue]
  })
  selectedValues.addEventListener('change', (e) => {
    const selectedValue = e.target.value
    selectedFirstLetter.value = stateFirstLetter.find(
      (i) => state[i] === selectedValue
    )
  })
})
