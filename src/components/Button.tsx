import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({ href, children, className, loading, onClick, target }) => (
  <a href={href} className={`${className} ${loading ? "loading" : ""}`} onClick={onClick} target={target || "_self"}>
    {children}
  </a>
);
