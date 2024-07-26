import {
  Anchor,
  Box,
  Button,
  Group,
  Image,
  List,
  ListItem,
  rem,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import {
  IconAt,
  IconCode,
  IconFileText,
  IconMapPinFilled,
  IconPhoneCall,
  IconPhoneFilled
} from '@tabler/icons-react';
import classes from './Introduction.module.css';

export function Introduction() {
  return (
    <Box id="introduction" mt={rem(20)}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            I&apos;m <span className={classes.highlight}>Vishal Kondle</span>
          </Title>
          <Text ta="justify" mt="md">
            Hi there! My name is Vishal Kondle and I’m a software engineer with
            over 3 years of experience in the industry, specializing in building
            innovative web applications with ReactJS.
          </Text>
          <List mt={30} spacing="sm" size="md">
            <ListItem
              icon={
                <ThemeIcon radius="xl" variant="transparent">
                  <IconCode className={classes.icon} stroke={3} />
                </ThemeIcon>
              }
            >
              <Anchor fw={700} target="_blank" href="https://react.dev">
                ReactJs Developer
              </Anchor>
            </ListItem>
            <ListItem
              icon={
                <ThemeIcon radius="xl" variant="transparent">
                  <IconAt className={classes.icon} stroke={3} />
                </ThemeIcon>
              }
            >
              <Anchor fw={700} href="mailto:vishal.kondle@gmail.com">
                vishal.kondle@gmail.com
              </Anchor>
            </ListItem>
            <ListItem
              icon={
                <ThemeIcon radius="xl" variant="transparent">
                  <IconPhoneFilled className={classes.icon} />
                </ThemeIcon>
              }
            >
              <Anchor fw={700} href="tel:+917276718848">
                +91 7276718848
              </Anchor>
            </ListItem>
            <ListItem
              icon={
                <ThemeIcon radius="xl" variant="transparent">
                  <IconMapPinFilled className={classes.icon} />
                </ThemeIcon>
              }
            >
              <Anchor
                fw={700}
                target="_blank"
                href="https://www.google.com/maps/place/Hyderabad"
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
            src="https://vishal-kondle-dev-portfolio.s3.eu-north-1.amazonaws.com/vishal_kondle.jpg"
          />
        </Group>
      </div>
    </Box>
  );
}
