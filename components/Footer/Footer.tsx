'use client';

import {
  ActionIcon,
  Badge,
  Container,
  Group,
  rem,
  ThemeIcon
} from '@mantine/core';
import { IconBrandVk } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './Footer.module.css';
import { socials } from '@/constants';

export function Footer() {
  const router = useRouter();
  return (
    <div className={classes.footer}>
      <Container size="xl" className={classes.inner}>
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
          className={classes.title}
          radius={0}
          onClick={() => router.push('/')}
        >
          Vishal Kondle
        </Badge>
        <Group gap={0} justify="flex-end" wrap="nowrap">
          {socials.map(({ label, link, icon, color }) => (
            <ActionIcon
              key={label}
              size="lg"
              color={color}
              variant="subtle"
              component="a"
              target="_blank"
              href={link}
              rel="noreferrer"
              title={label}
            >
              {icon}
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </div>
  );
}
