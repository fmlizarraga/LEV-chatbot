import {
  Avatar,
  Container,
  Flex,
  Grid,
  Group,
  ScrollArea,
  Space,
  Stack,
  createStyles,
  rem,
} from "@mantine/core";
import { ChatButton, ChatInput, FooterSimple } from "../components";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useRef } from "react";

const useStyles = createStyles((theme) => ({
  comment: {
    margin: 0,
    maxWidth: "100%",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  commentBot: {
    background: theme.colors.gray[9],
  },
  avatar: {
    // alignSelf: "flex-start",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 300,
    right: 0,
    // height: 149,
    paddingTop: theme.spacing.xs,
    background: `linear-gradient(rgba(44, 48, 50, 0), ${theme.colors.dark[8]} 58.85%)`,
  },
}));

export const ChatBotView = () => {
  const viewport = useRef(null);
  const { classes, cx } = useStyles();
  const { width, height } = useViewportSize();

  const scrollToBottom = () => {
    viewport.current.scrollTo({
      top: viewport.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Stack align="stretch" spacing={0}>
      <ScrollArea
        w={width - 300}
        h={height - 56}
        type="scroll"
        viewportRef={viewport}
      >
        <Group className={classes.comment}>
          <Flex justify="center" align="center" direction="row" w="100%">
            <Group position="center" spacing="xs">
              <Avatar radius="xs" className={classes.avatar} />
              <Container size="sm" px="md" m="auto">
                <p>
                  Sit elit anim tempor excepteur in reprehenderit. Laborum ut
                  irure ullamco sunt non id minim sunt consectetur quis elit
                  sunt. Adipisicing non ullamco quis minim pariatur magna dolor
                  laboris magna duis qui. Proident ea minim duis labore
                  cupidatat incididunt amet magna esse nulla irure adipisicing
                  dolor. Irure proident ex ullamco commodo ad tempor id ad.
                </p>
              </Container>
            </Group>
          </Flex>
        </Group>
        <Grid className={cx(classes.comment, classes.commentBot)}>
          <Container size="sm" px="md">
            <p>
              Ad esse commodo do irure laboris ea mollit ad et ad ipsum aute
              dolor laborum. Minim pariatur ut laborum reprehenderit officia
              reprehenderit tempor aliquip mollit. Ex elit duis do nulla
              reprehenderit do pariatur tempor veniam incididunt adipisicing et
              commodo sunt. Ut aliquip sint consectetur amet nulla nisi in ea
              cillum sit. Occaecat eu sit nulla exercitation tempor excepteur
              esse sit.
            </p>

            <p>
              Ex pariatur cupidatat magna anim dolor cillum. Cillum elit
              exercitation nostrud aliqua cupidatat magna aliquip nulla.
              Incididunt sunt anim irure amet id est cillum quis amet fugiat
              officia commodo. Labore ea adipisicing reprehenderit velit commodo
              quis sunt magna proident. Aliquip excepteur amet ut sunt culpa
              fugiat. Officia culpa reprehenderit do cillum enim esse cillum
              cillum minim amet aliqua. Et et consectetur id ullamco amet
              excepteur dolor occaecat. Nostrud excepteur amet est magna do ut
              elit. Esse officia officia do elit dolore ut. Reprehenderit aute
              sunt aute quis labore irure Lorem incididunt dolore proident in.
              Duis esse eiusmod magna labore duis et irure. Quis exercitation
              enim sint quis excepteur do magna aute officia sint consequat. Do
              aliqua nulla ut nostrud ea sunt eu veniam ipsum nisi nulla.
              Excepteur ullamco magna exercitation Lorem veniam eiusmod qui.
              Magna et amet sunt aliquip proident consequat. Eiusmod dolore duis
              Lorem minim minim quis velit aliqua exercitation esse mollit. Do
              minim aliqua nulla id ex. Cillum ad eiusmod ut est. Sunt
              reprehenderit sit qui aliqua veniam amet irure nulla. Exercitation
              Lorem id ad aliquip incididunt anim ex sunt id laboris minim
              fugiat ullamco ipsum. Pariatur id nostrud aliqua dolore pariatur
              sit esse Lorem minim ipsum laborum fugiat nulla nulla. Lorem
              excepteur ullamco nulla duis irure velit deserunt cupidatat
              reprehenderit Lorem. Mollit voluptate commodo esse sint tempor
              aliquip pariatur id ipsum. Do anim veniam qui adipisicing. Quis
              qui eu commodo voluptate laboris voluptate eu deserunt veniam. Ut
              fugiat tempor incididunt labore fugiat. Commodo irure fugiat Lorem
              est irure veniam non ipsum irure commodo. Velit incididunt anim id
              dolor excepteur est nostrud esse tempor est esse. Do est ea ea
              cillum minim et labore ipsum fugiat. Nisi enim labore nisi in sit
              excepteur aliquip nulla non eiusmod. Labore laborum mollit mollit
              enim ut sunt voluptate. Esse eiusmod velit tempor laborum. Fugiat
              fugiat officia minim amet voluptate commodo nisi. Cupidatat et
              magna velit aute dolore non sit cupidatat incididunt labore id
              anim cupidatat sit. Lorem aliquip anim ex incididunt qui duis eu
              exercitation et minim. Laborum consequat cupidatat dolore
              reprehenderit. Anim adipisicing et excepteur do enim quis
              voluptate deserunt ut ex officia amet adipisicing sit. Qui elit id
              velit cillum do labore qui ullamco minim dolore. Commodo
              incididunt occaecat elit esse ex dolore consectetur consequat duis
              voluptate labore. Nulla id eu in culpa sit id amet proident.
              Exercitation amet voluptate Lorem voluptate laborum sit tempor
              irure ad qui consequat excepteur. Excepteur et laborum nisi
              occaecat sit proident dolor proident veniam eu laborum nostrud ad
              adipisicing. Ut consequat incididunt dolore id fugiat ad sunt
              ipsum culpa. Adipisicing consectetur exercitation velit est
              consequat duis enim pariatur. Ullamco cillum ea quis ullamco
              consequat nostrud dolore non laborum ipsum irure. Ullamco magna
              sunt anim ipsum pariatur commodo dolor ex qui fugiat. Est sint
              voluptate reprehenderit officia pariatur consequat exercitation
              irure aliquip. Eiusmod pariatur nisi est irure sit mollit qui ut
              occaecat laboris nisi aliqua do consectetur. Incididunt cillum
              commodo ad aute. Sint ex non deserunt elit cillum ea duis id
              laboris. Commodo id esse minim occaecat ipsum nulla officia irure
              ad. Reprehenderit consequat in eiusmod nostrud enim esse eu. Anim
              incididunt dolor eu ex quis nulla Lorem proident exercitation
              sunt. Ut pariatur eu eu veniam qui commodo nisi minim laborum.
              Esse exercitation anim dolore commodo et esse. Dolor consequat
              occaecat labore minim irure nisi exercitation id in nostrud non.
              Non quis Lorem enim eiusmod irure excepteur qui labore minim dolor
              tempor nostrud. Sit ex occaecat aliquip sit exercitation laborum
              eu deserunt qui id Lorem veniam. Enim veniam deserunt ex aliquip
              pariatur. Aliqua aliqua amet quis magna ex nisi nostrud aute ut
              velit eu.
            </p>
          </Container>
        </Grid>
        <Space h={192} />
      </ScrollArea>
      <div className={classes.footer}>
        <ChatButton />
        <ChatInput />
        <FooterSimple />
      </div>
    </Stack>
  );
};
