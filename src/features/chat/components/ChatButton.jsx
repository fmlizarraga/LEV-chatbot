import { Button, Flex, Text } from "@mantine/core";
import { IconTool } from "@tabler/icons-react";

export const ChatButton = () => {
  return (
    <Flex justify="center" align="center" direction="row" mb="xs">
      <Button
        variant="default"
        leftIcon={<IconTool color="gray" size="0.95rem" stroke={1.6} />}
        color="gray"
      >
        <Text fz="sm" fw={350}>
          Options
        </Text>
      </Button>
    </Flex>
  );
};
