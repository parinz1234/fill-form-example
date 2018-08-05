import React from 'react'

const SecondForm  = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Gender</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="title">Age</label>
          <input type="text" />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}

export default SecondForm
