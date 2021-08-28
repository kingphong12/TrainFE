export const getUser = (data) => {
  return {
    type: "GET__USER",
    payload: data,
  }
}

export const addUser = (data) => {
  return {
    type: "ADD__USER",
    payload: data
  }
}


export const deleteUser = (id) => {
  return {
    type: "DELETE__USER",
    payload: id
  }
}
