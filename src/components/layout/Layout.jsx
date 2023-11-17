import { AppShell, Box } from "@mantine/core";

import NavbarMini from "./Navbar";
import { HeaderMegaMenu } from "./Header";

export default function Layout({ children }) {
  return (
    <AppShell padding="md" navbar={<NavbarMini />} header={<HeaderMegaMenu />}>
      <Box>{children}</Box>
    </AppShell>
  );
}
