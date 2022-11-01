import {
  type LoaderFunction,
  NavLink,
  Outlet,
  redirect,
} from "react-router-dom";

export const loader: LoaderFunction = ({ request }) => {
  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    return redirect("/example1");
  }
};

export function Root() {
  return (
    <>
      <header className=" space-x-2 border-b-2 p-3">
        <NavLink
          to="/example1"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Example 1
        </NavLink>
        <NavLink
          to="/example2"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Example 2
        </NavLink>
        <NavLink
          to="/example3"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Example 2
        </NavLink>
      </header>
      <main className="p-3">
        <Outlet />
      </main>
    </>
  );
}
