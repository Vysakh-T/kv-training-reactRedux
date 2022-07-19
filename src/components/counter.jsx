import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../features/counter/counterSlice'

import { useCreateEmployeeMutation } from '../services/employee'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const p = {
    "name": "Gojo ",
    "jdate": "12/12/12",
    "email": "gojo@abc.com",
    "role": "admin",
    "status": "active",
    "experience": "lorem",
    "password": "password",
    "department": {
        "name": "Dep"
    },
    "address": {
        "zipcode": "123123",
        "desc": "lorem ipsum"
    }
}


  return (
    <div>
      <div>
        {/* <button
          aria-label="Increment value"
          onClick={() => useCreateEmployeeMutation(p)}
        >
          Increment
        </button> */}
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment Value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  )
}