import { getAllTodo } from "@/libs/todoApi";

// getStaticPaths in Next13
export async function generateStaticParams() {
  const res = getAllTodo();
  const data = await res;
  return data.map((c) => ({
    slug: c?.text.replace(/\s+/g, "-").toLowerCase(),
  }));
}

export default function Staticpage({ params }) {
  return (
    <>
      <h1>The character name is: {params.slug}</h1>
    </>
  );
}
