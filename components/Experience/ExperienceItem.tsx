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
import { IconCircleCheck } from '@tabler/icons-react';

interface ProjectProps {
  logo: string;
  name: string;
  _role: string;
  responsibilites: string[];
}

export function ExperienceItem({
  logo,
  name,
  _role,
  responsibilites
}: ProjectProps) {
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
            <IconCircleCheck style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
        }
      >
        {responsibilites?.map((responsibility) => (
          <ListItem
            styles={{ itemWrapper: { alignItems: 'flex-start' } }}
            ta="justify"
            key={responsibility}
            lh={1.2}
          >
            {responsibility}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
