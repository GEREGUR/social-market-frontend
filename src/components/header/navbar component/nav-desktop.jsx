import { routes } from "./routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm ">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={title}>
            <a
              href={href}
              className="flex items-center gap-1 hover:underline hover:text-neutral-400 transition-all"
            >
              <Icon />
              <strong>{title}</strong>
            </a>
          </li>
        );
      })}
    </ul>
  );
};