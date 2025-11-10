"use client";

import { PropsWithChildren, MouseEvent } from "react";

type Props = PropsWithChildren<{
  className?: string;
  eventName?: string;            // default "CTA_Click"
  ariaLabel?: string;
}>;

function buildDestWithParams(dest: string) {
  const url = new URL(dest);
  const params = new URLSearchParams(window.location.search);
  params.forEach((v, k) => url.searchParams.set(k, v));
  if (location.hash) url.hash = location.hash;
  return url.toString();
}

export default function CtaLink({
  className,
  children,
  eventName = "CTA_Click",
  ariaLabel
}: Props) {
  const DEST = process.env.NEXT_PUBLIC_DEST_URL || "https://www.hirepr0.com/";

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      // @ts-ignore
      window.fbq?.("trackCustom", eventName, {
        source: "aapkiinaukri",
        path: location.pathname
      });
    } catch {}
    const target = buildDestWithParams(DEST);
    setTimeout(() => (location.href = target), 350);
  };

  return (
    <a href={DEST} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
