'use client';

import { Box, SimpleGrid, Title } from '@mantine/core';
import { Project } from './Project';

export function Projects() {
  return (
    <Box id="projects" pt={80}>
      <Title order={3} fw={900} mb="md">
        Projects
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Project
          logo="https://vishal-kondle-dev-portfolio.s3.eu-north-1.amazonaws.com/ubs.png"
          name="Regulatory Reports Framework"
          _role="ReactJs developer"
          responsibilites={[
            'Migrated UBS-RRF React components to TypeScript and added full test coverage.',
            'Used Media Queries for the design to be compatible with different screen sizes.',
            'Implemented state management using Redux to manage complex application state and improve performance.',
            'Developed a reusable component library to improve application development and maintainability.',
            'Implemented the Drag and Drop functionality using React-Draggable'
          ]}
        />
        <Project
          logo="https://vishal-kondle-dev-portfolio.s3.eu-north-1.amazonaws.com/optum.png"
          name="Shop and Search"
          _role="NextJs developer"
          responsibilites={[
            'Developed a highly responsive & scaled application for optum clients for their new application shop and search.',
            'Implemented a robust testing suite using Jest and React Testing Library, achieving 95% code coverage.',
            'Implemented accessibility features (WCAG 2.1) to improve user experience for people with disabilities.',
            'Implemented custom hooks for reusable logic, improving code maintainability and reducing development time.',
            'Integrated API calls using Axios to fetch data from database.'
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}
