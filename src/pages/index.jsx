import { Group, Stack } from "@mantine/core";

import Car1 from "@/components/Car1";
import Car2 from "@/components/Car2";
import Car3 from "@/components/Car3";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Stack spacing="xl">
        <Hero />
        <Group position="center" mt={100} noWrap spacing="xl">
          <Car1 />
          <Car2 />
          <Car3 />
        </Group>
      </Stack>
    </>
  );
}
