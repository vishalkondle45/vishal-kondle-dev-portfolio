import { rem } from '@mantine/core';
import {
  IconBrandAws,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
  IconTestPipe
} from '@tabler/icons-react';

export const skills = [
  {
    label: 'React JS',
    icon: <IconBrandReact style={{ width: rem(20), height: rem(20) }} />,
    color: 'blue'
  },
  {
    label: 'Next JS',
    icon: <IconBrandNextjs style={{ width: rem(20), height: rem(20) }} />,
    color: 'dark'
  },
  {
    label: 'Redux',
    icon: <IconBrandRedux style={{ width: rem(20), height: rem(20) }} />,
    color: 'purple'
  },
  {
    label: 'Javascript',
    icon: <IconBrandJavascript style={{ width: rem(20), height: rem(20) }} />,
    color: 'yellow'
  },
  {
    label: 'Git',
    icon: <IconBrandGit style={{ width: rem(20), height: rem(20) }} />,
    color: 'orange'
  },
  {
    label: 'Typescript',
    icon: <IconBrandTypescript style={{ width: rem(20), height: rem(20) }} />,
    color: 'blue'
  },
  {
    label: 'Test cases',
    icon: <IconTestPipe style={{ width: rem(20), height: rem(20) }} />,
    color: 'brown'
  },
  {
    label: 'Node JS',
    icon: <IconBrandNodejs style={{ width: rem(20), height: rem(20) }} />,
    color: 'green'
  },
  {
    label: 'AWS',
    icon: <IconBrandAws style={{ width: rem(20), height: rem(20) }} />,
    color: 'orange'
  },
  {
    label: 'MongoDB',
    icon: <IconBrandMongodb style={{ width: rem(20), height: rem(20) }} />,
    color: 'green'
  },
  {
    label: 'CSS',
    icon: <IconBrandCss3 style={{ width: rem(20), height: rem(20) }} />,
    color: 'blue'
  },
  {
    label: 'HTML',
    icon: <IconBrandHtml5 style={{ width: rem(20), height: rem(20) }} />,
    color: 'red'
  }
];

export const navItems = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Experience',
    link: '#experience'
  },
  {
    label: 'Projects',
    link: '#projects'
  },
  {
    label: 'Skills',
    link: '#skills'
  }
];
