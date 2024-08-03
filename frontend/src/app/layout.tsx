// src/app/layout.tsx
'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust path according to your file structure
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Provider>
  );
}
