import { Contact } from '@/components/Contact';
import { Introduction } from '@/components/Introduction';
import { Skills } from '@/components/Skills';
import { Terminal } from '@/components/Terminal';
import { Stack } from '@mantine/core';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack>
        <Introduction />
        <Skills />
        <Terminal />
        <Contact />
      </Stack>
    </main>
  );
}
