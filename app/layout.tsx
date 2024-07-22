import '@mantine/core/styles.css';

import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import theme from '@/theme';

export const metadata = {
  title: 'Vishal Kondle | Portfolio',
  description: 'This is the portfolio of Vishal Kondle'
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <MantineProvider
          theme={theme}
          forceColorScheme="dark"
          defaultColorScheme="dark"
        >
          <Container size="xl">{children}</Container>
        </MantineProvider>
      </body>
    </html>
  );
}
