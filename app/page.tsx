import { rem, Stack } from '@mantine/core';
import { Experience } from '@/components/Experience';
import { Introduction } from '@/components/Introduction';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack mb={rem(600)}>
        <Introduction />
        <Experience />
        <Projects />
        <Skills />
      </Stack>
    </main>
  );
}
