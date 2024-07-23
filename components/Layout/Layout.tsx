'use client';

import {
  ActionIcon,
  AppShell,
  Badge,
  Burger,
  Button,
  Container,
  Group,
  rem,
  ThemeIcon,
  useMantineColorScheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandVk, IconMoon, IconSun } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useLoaded } from '@/hooks/useLoaded';

export function Layout({ children }: { children: React.ReactNode }) {
  const { setColorScheme, colorScheme } = useMantineColorScheme({
    keepTransitions: true
  });
  const [opened, { toggle, close }] = useDisclosure();
  const router = useRouter();
  const loaded = useLoaded();

  const navigateTo = (route: string) => {
    router.push(route);
    close();
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened }
      }}
      padding="md"
    >
      <AppShell.Header>
        <Container pt="sm" px={0} size="xl">
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Badge
                p={0}
                size="xl"
                variant="transparent"
                leftSection={
                  <ThemeIcon size={rem(30)} radius="xl">
                    <IconBrandVk style={{ height: rem(20), width: rem(20) }} />
                  </ThemeIcon>
                }
                style={{ cursor: 'pointer' }}
                radius={0}
                onClick={() => navigateTo('/')}
              >
                Vishal Kondle
              </Badge>
              <Group ml="xl" gap={0} visibleFrom="sm">
                <Button onClick={() => navigateTo('/')} variant="subtle">
                  Home
                </Button>
                <Button variant="subtle" onClick={() => navigateTo('#skills')}>
                  Skills
                </Button>
                <Button variant="subtle" onClick={() => navigateTo('#myterm')}>
                  MyTerm
                </Button>
                <Button variant="subtle" onClick={() => navigateTo('#contact')}>
                  Contact
                </Button>
              </Group>
            </Group>
            {loaded && (
              <ActionIcon
                onClick={() =>
                  setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
                }
                title="Toggle color scheme"
                variant="default"
                size="lg"
                radius="xl"
                c="gray"
              >
                {colorScheme === 'light' ? (
                  <IconSun
                    style={{ height: rem(20), width: rem(20) }}
                    stroke={2}
                  />
                ) : (
                  <IconMoon
                    style={{ height: rem(20), width: rem(20) }}
                    stroke={2}
                  />
                )}
              </ActionIcon>
            )}
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Button onClick={() => navigateTo('/')} variant="subtle">
          Home
        </Button>
        <Button variant="subtle" onClick={() => navigateTo('#skills')}>
          Skills
        </Button>
        <Button variant="subtle" onClick={() => navigateTo('#myterm')}>
          MyTerm
        </Button>
        <Button variant="subtle" onClick={() => navigateTo('#contact')}>
          Contact
        </Button>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}