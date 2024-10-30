import { ReactNode } from 'react';

export default function Button({
  children,
  className,
}: {
  children: ReactNode | ReactNode[] | string | undefined;
  className: string;
}) {
  return (
    <button
      className={`flex h-11 w-11 items-center justify-center rounded bg-neutral-600 shadow-[#404040_0_-3px_0_inset] hover:translate-y-[-2px] active:translate-y-[2px] hover:active:transform ${className}`}
    >
      {children}
    </button>
  );
}
