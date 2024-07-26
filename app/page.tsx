import { Stack } from '@mantine/core';
import { Experience } from '@/components/Experience';
import { Introduction } from '@/components/Introduction';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack>
        <Introduction />
        <Experience />
        <Projects />
        <Skills />
      </Stack>
    </main>
  );
}
