import { NavLink } from "react-router-dom";
import s from './Link.module.scss';

interface LinkProps {
  path: string;
  text: string;
}

export const Link = ({ path, text }: LinkProps) => {
  return (
    <NavLink to={path} className={s.link}>
      {text}
    </NavLink>
  );
}
