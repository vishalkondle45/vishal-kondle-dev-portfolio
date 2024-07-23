import { rem, Stack } from '@mantine/core';
import { Contact } from '@/components/Contact';
import { Introduction } from '@/components/Introduction';
import styles from './page.module.css';
import { Terminal } from '@/components/Terminal';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack gap={rem(100)} py="xl">
        <Introduction />
        <Skills />
        <Terminal />
        <Contact />
      </Stack>
    </main>
  );
}
