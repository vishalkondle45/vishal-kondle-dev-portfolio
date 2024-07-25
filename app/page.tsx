import { Stack } from '@mantine/core';
import { Contact } from '@/components/Contact';
import { Introduction } from '@/components/Introduction';
import { Skills } from '@/components/Skills';
import { Terminal } from '@/components/Terminal';
import styles from './page.module.css';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack>
        <Introduction />
        <Experience />
        <Projects />
        <Skills />
        <Terminal />
        <Contact />
      </Stack>
    </main>
  );
}
