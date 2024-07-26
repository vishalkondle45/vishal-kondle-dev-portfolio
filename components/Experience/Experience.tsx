'use client';

import { Box, SimpleGrid, Title } from '@mantine/core';
import { ExperienceItem } from './ExperienceItem';

export function Experience() {
  return (
    <Box id="experience" pt={80}>
      <Title order={3} fw={900} mb="md">
        Experience
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <ExperienceItem
          logo="https://vishal-kondle-dev-portfolio.s3.eu-north-1.amazonaws.com/wipro-1.jpg"
          name="ReactJs developer"
          _role="Aug 20 - Aug 24"
          responsibilites={[
            'Worked on an agile development team to deliver regular updates to business team and project managers.',
            'Worked with Jest unit test framework to write unit tests for React components.',
            'Developed various pages using ReactJs components, Forms, Events, Keys, Router, Animations and Redux.',
            'Used React-Router to turn application into Single Page Application (SPA).',
            'Used JIRA as the project management tool to manage projects and tasks for the team.'
          ]}
        />
        <ExperienceItem
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8hlrNaMGkmvz5j5QjzR4JS-kd3Rx_5dtRw&s"
          name="Intern"
          _role="Jun 20 - Dec 20"
          responsibilites={[
            'Developed a comprehensive social network platform for our college students, enabling them to connect, interact, and share information.',
            'Implemented core social networking features such as user profiles, friend connections, messaging, news feed, and notifications.',
            'Experienced in using Bootstrap for responsive design and UI development.',
            'Integrated dynamic functionality using JavaScript and jQuery to enhance user interaction and experience.',
            'Designed and developed a user-friendly interface using HTML, CSS, and Bootstrap to create a visually appealing and intuitive platform.'
          ]}
        />
      </SimpleGrid>
    </Box>
  );
}
