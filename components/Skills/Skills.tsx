'use client';

import {
  Box,
  Group,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import { skills } from '@/constants';

export function Skills() {
  return (
    <Box id="skills" py={80}>
      <Title order={2} mb="md">
        Skills
      </Title>
      <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6 }}>
        {skills.map(({ label, icon, color }) => (
          <Paper key={label} p="md" withBorder>
            <Group gap="xs" wrap="nowrap">
              <ThemeIcon variant="filled" radius="xl" size="md" color={color}>
                {icon}
              </ThemeIcon>
              <Text style={{ whiteSpace: 'nowrap' }} fw={700}>
                {label}
              </Text>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  );
}
