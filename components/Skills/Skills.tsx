'use client';

import { skills } from '@/constants';
import {
  Box,
  Card,
  CardSection,
  Image,
  SimpleGrid,
  Text,
  Title
} from '@mantine/core';

export function Skills() {
  return (
    <Box id="skills" pt={80}>
      <Title order={2} mb="md">
        Skills
      </Title>
      <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }}>
        {skills.map((skill) => (
          <Card key={skill.label} padding="sm" withBorder>
            <CardSection>
              <Image src={skill.icon} h={160} alt={skill.label} />
            </CardSection>
            <Text fw={700} size="lg" ta="center" mt="md">
              {skill.label}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
