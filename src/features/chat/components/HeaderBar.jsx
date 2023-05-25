import {
  createStyles,
  Header,
  Group,
  Burger,
  rem,
  Text,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import { IconPlus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  title: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  logo: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(10)} ${rem(10)}`,
    borderRadius: theme.radius.xl,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export const HeaderBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header} mb={0}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <MantineLogo size={28} className={classes.logo} />
        </Group>

        <Text weight={600} size={rem(16)} className={classes.title}>
          This is an example
        </Text>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}></Group>

          <Button variant="subtle" sx={{ margin: 0, padding: 0 }}>
            <IconPlus size="2.2rem" stroke={1.2} />
          </Button>
        </Group>
      </div>
    </Header>
  );
};
