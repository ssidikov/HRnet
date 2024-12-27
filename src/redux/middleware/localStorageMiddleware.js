const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  const actionTypes = ['employees/addEmployee', 'employees/setEmployees']
  if (actionTypes.includes(action.type)) {
    const { employees } = store.getState().employees
    localStorage.setItem('employees', JSON.stringify(employees))
  }
  return result
}

export default localStorageMiddleware
