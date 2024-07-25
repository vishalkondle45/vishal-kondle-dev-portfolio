'use client';

import {
  Divider,
  Group,
  Image,
  List,
  ListItem,
  Paper,
  rem,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import { IconClipboardCheck } from '@tabler/icons-react';

interface ProjectProps {
  logo: string;
  name: string;
  _role: string;
  responsibilites: string[];
}

export function Project({ logo, name, _role, responsibilites }: ProjectProps) {
  return (
    <Paper p="md" withBorder>
      <Image alt="UBS Logo" src={logo} w={200} h={70} radius="md" />
      <Group gap={0} justify="space-between">
        <Title order={5}>{name}</Title>
        <Text fw={700} c="dimmed" ta="right">
          {_role}
        </Text>
      </Group>
      <Divider my="md" />
      <List
        spacing="lg"
        size="md"
        center
        icon={
          <ThemeIcon size={30} radius="xl">
            <IconClipboardCheck style={{ width: rem(20), height: rem(20) }} />
          </ThemeIcon>
        }
      >
        {responsibilites?.map((responsibility) => (
          <ListItem
            styles={{
              itemWrapper: { alignItems: 'flex-start' },
              itemLabel: { lineHeight: 1.2 }
            }}
            key={responsibility}
          >
            {responsibility}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
