import { routes } from "./routes";

export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm m-4 float-right">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          // eslint-disable-next-line react/jsx-key
          <li>
            <a
              href={href}
              className="flex items-center gap-1 hover:underline hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};