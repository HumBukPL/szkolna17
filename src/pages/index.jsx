import { Group, Stack } from "@mantine/core";

import Car1 from "@/components/Car1";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Stack spacing="xl">
        <Hero />
        <Group position="center" mt={100} h="30vh" noWrap>
          <Car1 />
        </Group>
      </Stack>
    </>
  );
}
