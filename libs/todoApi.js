export const getAllTodo = async () =>
  await fetch(`${process.env.BASE_URL}/api/todo`).then((res) => res.json());
