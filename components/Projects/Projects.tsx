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
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/UBS_Logo.png/800px-UBS_Logo.png"
          name="Regulatory Reports Framework"
          _role="ReactJs developer"
          responsibilites={[
            'Developed a highly responsive & scaled application for optum clients for their new application shop and search.',
            'Created a complex component like multi-level Tree structure without using any third party library.',
            'Migrated UBS-RRF React components to TypeScript and added full test coverage.',
            'Wrote unit test cases for all the components with the 86.00% coverage with jest & enzyme .'
          ]}
        />
        <Project
          logo="https://appexchange.salesforce.com/image_host/2ff34cad-ef49-463a-b2d4-11d3680a293c.png"
          name="Shop and Search"
          _role="NextJs developer"
          responsibilites={[
            'Migrated UBS-RRF React components to TypeScript and added full test coverage.',
            'Developed a highly responsive & scaled application for optum clients for their new application shop and search.',
            'Wrote unit test cases for all the components with the 86.00% coverage with jest & enzyme .',
            'Created a complex component like multi-level Tree structure without using any third party library.'
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}
