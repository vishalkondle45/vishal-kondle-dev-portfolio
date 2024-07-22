import { Stack } from '@mantine/core';
import { Contact } from '@/components/Contact';
import { Introduction } from '@/components/Introduction';
import styles from './page.module.css';
import { Terminal } from '@/components/Terminal';

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack gap="xl" py="xl">
        <Introduction />
        <Terminal />
        <Contact />
      </Stack>
    </main>
  );
}
