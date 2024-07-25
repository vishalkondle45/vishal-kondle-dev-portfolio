'use client';

import { Box, SimpleGrid, Title } from '@mantine/core';
import { ExperienceItem } from './ExperienceItem';

export function Experience() {
  return (
    <Box id="projects" pt={80}>
      <Title order={3} fw={900} mb="md">
        Experience
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <ExperienceItem
          logo="https://www.wipro.com/content/dam/nexus/en/brand/images/secondary-logo-400x276.png"
          name="ReactJs developer"
          _role="Aug 2021 - Present"
          responsibilites={[
            'Collaborated with UI/UX designers to create visually appealing and user-friendly interfaces.',
            'Implemented state management using Redux to manage complex application state and improve performance.',
            'Implemented custom hooks for reusable logic, improving code maintainability and reducing development time.',
            'Implemented accessibility features (WCAG 2.1) to improve user experience for people with disabilities.',
            'Implemented a robust testing suite using Jest and React Testing Library, achieving 95% code coverage.'
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}
