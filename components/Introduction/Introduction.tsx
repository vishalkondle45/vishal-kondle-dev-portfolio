import {
  Anchor,
  Button,
  Group,
  Image,
  List,
  ListItem,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import {
  IconAt,
  IconCode,
  IconFileText,
  IconPhone,
  IconPhoneCall,
  IconPinnedFilled
} from '@tabler/icons-react';
import classes from './Introduction.module.css';

export function Introduction() {
  return (
    <>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            I&apos;m <span className={classes.highlight}>Vishal Kondle</span>
          </Title>
          <Text ta="justify" c="dimmed" mt="md">
            Hi there! My name is Vishal Kondle and I’m a software engineer with
            over 3 years of experience in the industry, specializing in building
            innovative web applications with ReactJS.
          </Text>
          <List mt={30} spacing="sm" size="md">
            <ListItem
              icon={
                <ThemeIcon radius="xl">
                  <IconCode className={classes.icon} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <Anchor
                fw={700}
                target="_blank"
                href="https://react.dev"
                c="dark"
              >
                ReactJs Developer
              </Anchor>
            </ListItem>
            <ListItem
              icon={
                <ThemeIcon radius="xl">
                  <IconPhone className={classes.icon} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <Anchor fw={700} href="tel:+917276718848" c="dark">
                +91 7276718848
              </Anchor>
            </ListItem>
            <ListItem
              icon={
                <ThemeIcon radius="xl">
                  <IconAt className={classes.icon} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <Anchor fw={700} href="mailto:vishal.kondle@gmail.com" c="dark">
                vishal.kondle@gmail.com
              </Anchor>
            </ListItem>
            <ListItem
              icon={
                <ThemeIcon radius="xl">
                  <IconPinnedFilled className={classes.icon} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <Anchor
                fw={700}
                target="_blank"
                href="https://www.google.com/maps/place/Hyderabad"
                c="dark"
              >
                Hyderabad, Telangana
              </Anchor>
            </ListItem>
          </List>
          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              leftSection={<IconPhoneCall className={classes.icon} />}
              className={classes.control}
              component="a"
              href="tel:+917276718848"
              td="none"
            >
              Call Me
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              leftSection={<IconFileText className={classes.icon} />}
              className={classes.control}
            >
              Resume
            </Button>
          </Group>
        </div>
        <Group className={classes.imageContainer}>
          <Image
            radius="50%"
            className={classes.image}
            src="/vishal_kondle.JPG"
          />
        </Group>
      </div>
    </>
  );
}
