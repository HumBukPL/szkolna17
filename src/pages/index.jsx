import { Box, Container, Group, Stack } from "@mantine/core";

import Car1 from "@/components/Car1";
import Car2 from "@/components/Car2";
import Car3 from "@/components/Car3";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { initAnalytics } from "@/firebase/firebase";

export default function Home() {
  useEffect(() => {
    const analytics = initAnalytics();
    if (analytics) {
      logEvent(analytics, "page_view", { title: "Home Page" });
    }
  }, []);

  return (
    <>
      <Stack spacing="xl" w="100%">
        <Box
          w="100%"
          sx={{
            borderRadius: "0.5rem",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: 'url("./baner3.png")',
          }}
        >
          <Hero />
        </Box>
        <Group
          position="center"
          mt={100}
          noWrap
          spacing="xl"
          sx={{
            marginBottom: 100,
          }}
        >
          <Car1 />
          <Car2 />
          <Car3 />
        </Group>
      </Stack>
    </>
  );
}
