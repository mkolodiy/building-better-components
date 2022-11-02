import { LoaderFunction, NavLink, Outlet, redirect } from "react-router-dom";
import { WishlistProvider } from "./WishlistContext";

export const loader: LoaderFunction = ({ request }) => {
  const { pathname } = new URL(request.url);
  if (pathname === "/example3") {
    return redirect(`${pathname}/products`);
  }
};

export function Example3() {
  return (
    <>
      <nav className="space-x-2">
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            isActive ? "bg-slate-200 p-1" : "p-1 hover:bg-slate-100"
          }
        >
          Wishlist
        </NavLink>
      </nav>
      <div className="pt-3">
        <WishlistProvider>
          <Outlet />
        </WishlistProvider>
      </div>
    </>
  );
}
