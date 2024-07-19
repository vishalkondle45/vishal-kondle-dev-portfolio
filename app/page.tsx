import { Title } from "@mantine/core";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title c="red" ta="center">
        Vishal Kondle | Portfolio
      </Title>
    </main>
  );
}
