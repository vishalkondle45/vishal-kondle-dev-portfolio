import { Contact } from '@/components/Contact';
import { Introduction } from '@/components/Introduction';
import { Stack } from '@mantine/core';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack p="xl">
        <Introduction />
        <Contact />
      </Stack>
    </main>
  );
}
