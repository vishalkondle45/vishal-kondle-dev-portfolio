'use client';

import {
  Box,
  Button,
  Group,
  SimpleGrid,
  TextInput,
  Textarea,
  Title
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

export function Contact() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length === 0
    }
  });

  const onSubmit = () => {
    notifications.show({
      icon: <IconCheck stroke={4} />,
      color: 'green',
      title: 'Thank you for contacting me',
      message: 'I will get back to you soon.'
    });
  };

  return (
    <Box id="contact" pt={80}>
      <form onSubmit={form.onSubmit(() => onSubmit())}>
        <Title order={3} fw={900} mb="md">
          Contact Me
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </Box>
  );
}
