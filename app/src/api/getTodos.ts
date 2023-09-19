const getTodos = async () => {
  const data = await fetch('http://localhost:3001/api/todos/Saruman')
            .then(res => res.json())
            .then(data => data)
  return data;  
}

 
export {
  getTodos
}