import { format } from 'date-fns'
import { statesList } from '../data/usStates'

// Function for formatting the date
export const formatDate = (date) => {
  return format(new Date(date), 'dd/MM/yyyy')
}

// Mapping of the full names of the States in their abbreviations
const statesMap = statesList.reduce((acc, state) => {
  acc[state.name] = state.abbreviation
  return acc
}, {})

export const getStateAbbreviation = (stateName) => {
  return statesMap[stateName] || stateName
}
