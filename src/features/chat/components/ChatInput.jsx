import { ActionIcon, Container, Loader, Textarea } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";

export const ChatInput = () => {
  const sending = false; //! placeholder: this will be a global state
  const sendButton = () => {
    if (!sending) {
      return (
        <ActionIcon mr="xs">
          <IconSend size="1.0rem" stroke={2.0} color="gray" />
        </ActionIcon>
      );
    }
    return <Loader size="sm" variant="oval" color="gray" mr="xs" />;
  };
  return (
    <Container size="md" px="md">
      <Textarea
        placeholder="Send a message"
        autosize
        minRows={1}
        rightSection={sendButton()}
      />
    </Container>
  );
};
