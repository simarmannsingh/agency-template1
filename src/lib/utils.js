import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { Josefin_Sans, Miniver } from "next/font/google";


const josefineSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefine',
  weight: ['100', '400', '700'],
});
const miniver = Miniver({
  subsets: ['latin'],
  variable: '--font-miniver',
  weight: '400',
});

export const fonts = {
  josefine: josefineSans.className,
  miniver: miniver.className,
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
