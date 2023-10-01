import { getAllTodo } from "@/libs/todoApi";
import Link from "next/link";

// getStaticProps in Next13

export default async function BlogList() {
  const res = getAllTodo();
  const data = await res;
  return (
    <div>
      <h2>getStaticPaths and getStaticProps</h2>
      {data?.map((c) => (
        <ul key={c._id}>
          <Link
            href={`/staticprops/${c.text}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <li>{c.text}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}
