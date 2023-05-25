import { MantineProvider } from "@mantine/core";
import { ChatBotView, ChatLayout } from "./features/chat";

export const ChatApp = () => {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark", primaryColor: "indigo" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ChatLayout>
        <ChatBotView />
      </ChatLayout>
    </MantineProvider>
  );
};
