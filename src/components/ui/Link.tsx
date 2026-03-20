import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  activeClassName = "",
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
};
