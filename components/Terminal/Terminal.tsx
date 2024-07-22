'use client';

import {
  ActionIcon,
  Box,
  Group,
  Paper,
  rem,
  ScrollArea,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import { useRef, useState } from 'react';
import './Terminal.module.css';

export function Terminal() {
  const [command, setCommand] = useState('');
  const [commands, setCommands] = useState<
    { command: string; response: string }[]
  >([]);
  const viewport = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    switch (command) {
      case 'clear':
        setCommands([]);
        break;

      case 'help':
        setCommands([
          ...commands,
          { command, response: 'Available commands: clear | help | whoami' }
        ]);
        break;

      default:
        setCommands([
          ...commands,
          {
            command,
            response: `${command}: command not found`
          }
        ]);
        break;
    }
    setCommand('');
    if (viewport.current) {
      setTimeout(() => {
        viewport.current!.scrollTo({
          top: viewport.current!.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  };

  return (
    <>
      <Box>
        <Title order={3} mb="md">
          MyTerm
        </Title>
        <Paper p="xs" shadow="xl" withBorder>
          <Group gap="xs">
            <ActionIcon size={rem(16)} radius="xl" color="red"></ActionIcon>
            <ActionIcon size={rem(16)} radius="xl" color="yellow"></ActionIcon>
            <ActionIcon size={rem(16)} radius="xl" color="green"></ActionIcon>
          </Group>
          <Text fw={700} my="md">
            Welcome to my website! Get started by typing `help` command below
          </Text>
          <ScrollArea ff="monospace" viewportRef={viewport} h={400}>
            {commands.map((cmd, index) => (
              <Box mb="sm" key={index}>
                <TextInput
                  leftSection={
                    <Text c="green" lineClamp={1} fw={700}>
                      $ vishalkondle-dev &gt;
                    </Text>
                  }
                  leftSectionWidth={200}
                  fw={700}
                  variant="unstyled"
                  value={cmd?.command}
                  styles={{ input: { fontFamily: 'monospace' } }}
                  readOnly
                />
                <Text
                  px={rem(4)}
                  fw={700}
                  c={cmd?.response.includes('not') ? 'red' : 'gray'}
                  ff="monospace"
                >
                  {cmd?.response}
                </Text>
              </Box>
            ))}
            <TextInput
              leftSection={
                <Text
                  c="green"
                  lineClamp={1}
                  style={{ whiteSpace: 'nowrap' }}
                  fw={700}
                >
                  $ vishalkondle-dev &gt;
                </Text>
              }
              ff="monospace"
              leftSectionWidth={200}
              variant="unstyled"
              value={command}
              fw={700}
              onChange={(event) => setCommand(event.currentTarget.value)}
              onKeyUp={(event) =>
                event.key === 'Enter' && command && handleSubmit()
              }
              styles={{ input: { fontFamily: 'monospace' } }}
            />
          </ScrollArea>
        </Paper>
      </Box>
    </>
  );
}
