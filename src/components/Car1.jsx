import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { initAnalytics } from "@/firebase/firebase";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));
// Dane
const mockdata = [
  { label: "2 passengers", icon: IconUsers },
  { label: "100 km/h in 2.5 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Petrol", icon: IconGasStation },
];

export default function Car1() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image maw={380} mx="auto" src="/Porshe1.png" alt="Porshe GT2 RS" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          {/* Nazwa */}
          <Text fw={500}>Porshe 911 GT2 RS</Text>
          <Text fz="xs" c="dimmed">
            {/*  Rocznik */}
            2018
          </Text>
        </div>
        {/* <Badge variant="outline">25% off</Badge> */}
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Performance configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {/* Cena */}
              $700,000
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              in one payment
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: 1 }}
            onClick={() => {
              const analytics = initAnalytics();
              if (analytics) {
                logEvent(analytics, "view_offer_click", {
                  item: "Item 1",
                });
              }
              window.location.href = "/product/1";
            }}
          >
            View offer
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
