import { Flex, ScrollArea, createStyles, rem } from "@mantine/core";
import { FooterSimple, HeaderBar, NavbarSimple } from "./";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  root: {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    margin: 0,
    minHeight: "100%",
    maxHeight: "100vp",
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },

  inner: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 0,
    margin: 0,
    height: "100%",
  },

  content: {
    margin: 0,
  },

  view: {
    // margin: theme.spacing.md,
  },
}));

export const ChatLayout = ({ children }) => {
  const { classes } = useStyles();
  const { height, width } = useViewportSize();
  return (
    <Flex
      className={classes.root}
      gap="md"
      justify="stretch"
      align="stretch"
      direction="column"
      wrap="wrap"
    >
      <div className={classes.inner}>
        <HeaderBar />
        <Flex align="flex-start" direction="row">
          <NavbarSimple />
          <Flex
            className={classes.content}
            align="stretch"
            justify="stretch"
            direction="column"
            // wrap="wrap"
          >
            {/* <ScrollArea w={width - 300} h={height - 56}>
            </ScrollArea> */}
            <div className={classes.view}>{children}</div>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};
