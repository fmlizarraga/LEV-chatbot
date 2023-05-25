import {
  createStyles,
  Container,
  Group,
  rem,
  Text,
  ActionIcon,
} from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    // height: rem(45),
  },

  inner: {
    height: rem(50),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingTop: theme.spacing.md,
    // paddingBottom: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

// interface FooterSimpleProps {
//   links: { link: string; label: string }[];
// }

export const FooterSimple = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text color="dimmed" size="xs">
          © 2023 Franco Matías Lizárraga. All rights reserved.
        </Text>
        <Group className={classes.links}>
          <ActionIcon
            size="md"
            variant="default"
            radius="xl"
            component="a"
            href="https://github.com/fmlizarraga"
            target="_blank"
          >
            <IconBrandGithubFilled size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
