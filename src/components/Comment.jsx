import { Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';

export default function CommentHtml({name, timeAgo, comment, avatar}) {
  return (
    <Paper withBorder radius="md" p={'lg'} sx={{
    }}>
      <Group>
        <Avatar
          src={avatar}
          alt={name}
          radius="xl"
        />
        <div>
          <Text fz="xl">{name}</Text>
          <Text fz="md" c="dimmed">
            {timeAgo}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider
        pl={55}
        pt={'md'}
        fz={'md'}
        >
        <Text fz="xl" c="dimmed">
            {comment}
        </Text>
      </TypographyStylesProvider>
    </Paper>
  );
}