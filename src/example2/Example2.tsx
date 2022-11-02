import { LoaderFunction, NavLink, Outlet, redirect } from "react-router-dom";

export const loader: LoaderFunction = ({ request }) => {
  const { pathname } = new URL(request.url);
  if (pathname === "/example2") {
    return redirect(`${pathname}/sub1`);
  }
};

export function Example2() {
  return (
    <>
      <nav className="space-x-2">
        <NavLink
          to="sub1"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Sub 1
        </NavLink>
        <NavLink
          to="sub2"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Sub 2
        </NavLink>
        <NavLink
          to="sub3"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Sub 3
        </NavLink>
      </nav>
      <div className="flex h-screen place-content-center items-center pt-3">
        <Outlet />
      </div>
    </>
  );
}
