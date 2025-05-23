import { Epilogue } from 'next/font/google';

export const epilogue = Epilogue({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-epilogue', // optional nếu bạn dùng Tailwind
});
