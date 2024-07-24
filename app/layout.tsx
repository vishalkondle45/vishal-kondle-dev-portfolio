import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import theme from '@/theme';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Layout } from '@/components/Layout';

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
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications />
          <Container px={0} size="xl">
            <Layout>{children}</Layout>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
