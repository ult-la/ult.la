import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-[26px] w-auto",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-100 60 4952 1520"
      className={className}
      aria-label="ULT.LA"
    >
      <g transform="scale(1,-1) translate(0,-1536)" fill="currentColor">
        <path
          transform="translate(0, 0)"
          d="M867 1456H1201L1032 465Q1012 314 943.5 203.5Q875 93 761.0 34.5Q647 -24 491 -22Q344 -19 245.0 41.5Q146 102 101.5 210.5Q57 319 73 465L241 1456H577L410 464Q403 412 402.0 363.5Q401 315 424.0 283.5Q447 252 513 250Q583 246 620.0 275.0Q657 304 674.0 354.5Q691 405 699 464Z"
        />
        <path
          transform="translate(1098, 0)"
          d="M849 270 802 0H206L254 270ZM577 1456 324 0H-8L243 1456Z"
        />
        <path
          transform="translate(1795, 0)"
          d="M862 1456 609 0H274L527 1456ZM1204 1456 1157 1185H146L194 1456Z"
        />
        <path
          transform="translate(2847, 0)"
          d="M849 270 802 0H206L254 270ZM577 1456 324 0H-8L243 1456Z"
        />
        <path
          transform="translate(3768, 0)"
          d="M723 1134 268 0H-100L588 1456H820ZM735 0 671 1168 679 1456H900L1084 0ZM838 543 790 272H176L224 543Z"
        />
      </g>
    </svg>
  );
};
