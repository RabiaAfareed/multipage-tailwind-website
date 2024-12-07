// Configure the Roboto font with desired subsets and weights
import { Roboto } from 'next/font/google';
export const roboto = Roboto({
    subsets: ['latin'], // Add subsets as needed, e.g., 'latin', 'cyrillic', etc.
    weight: ['400', '700'], // Specify font weights, e.g., '400' for regular, '700' for bold
    style: ['normal', 'italic'], // Include styles if needed
    display: 'swap', // Optional: Use 'swap' to improve performance
  });