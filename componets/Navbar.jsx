import Link from "next/link";

const routes = [
  { name: "Server", path: "/server" },
  { name: "Client", path: "/client" },
  { name: "Staticprop", path: "/staticprops" },
];

export default function Navbar() {
  return (
    <>
      {routes.map((r) => (
        <Link key={r.path} href={r.path}>
          {r.name}
        </Link>
      ))}
    </>
  );
}
