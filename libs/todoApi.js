export const getAllTodo = async () =>
  await fetch(`/api/todo`).then((res) => res.json());

//hello
