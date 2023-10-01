export const getAllTodo = async () =>
  await fetch(`http://localhost:3000/api/todo`).then((res) => res.json());
