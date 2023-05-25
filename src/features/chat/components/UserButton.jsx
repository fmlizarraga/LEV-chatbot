import { forwardRef } from 'react';
import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    createStyles,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    user: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },

    userActive: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
  }));
  
//   interface UserButtonProps extends UnstyledButtonProps {
//     image: string;
//     name: string;
//     email: string;
//     icon?: React.ReactNode;
//   }
  
  export const UserButton = forwardRef(({ image, name, email, icon, userMenuOpened, ...others },ref) => {
    const { classes, cx } = useStyles();
  
    return (
      <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })} {...others} ref={ref}>
        <Group>
          <Avatar src={image} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>
  
            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>
  
          {icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
        </Group>
      </UnstyledButton>
    );
  })