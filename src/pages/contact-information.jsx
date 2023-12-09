// import { Stack, Text } from "@mantine/core";
// import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";

import { Box, Paper, Stack, Text } from "@mantine/core";
import { IconAddressBook, IconMail, IconPhone, IconSun } from "@tabler/icons-react";

export default function ContactInformation() {

    const MOCKDATA = [
        { title: 'Email', description: 'hello@gmail.com', icon: IconMail },
        { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
        { title: 'Address', description: '844 Morris Park avenue', icon: IconAddressBook },
        { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
    ];

    function ContactIcon({ icon: Icon, title, description }) {
        return (
          <div style={{
            display: "flex",
            alignItems: "center",
            color: "wite"
            }}>
            <Box mr="md">
              <Icon style={{ width: 'rem(24)', height: 'rem(24)' }} />
            </Box>
      
            <div>
              <Text size="xs">
                {title}
              </Text>
              <Text>{description}</Text>
            </div>
          </div>
        );
      }

    function contactInconListRender(){
        const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
        return <Stack>{items}</Stack>;
    }


  return (
    <>
        <Paper shadow="md" radius="lg" mt={"lg"} p={"lg"} style={{
            backgroundImage: 'linear-gradient(315deg, #1971c2 0%, #0d3e82 74%)',
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                color: "white"
            }}>
                <div style={{ 
                    boxSizing: "border-box",
                    position: "relative",
                    borderRadius: 20,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: 'rem(1px) solid transparent',
                    padding: "rem(20px)",
                    flex: '0 0 rem(280px)',
                }}>
                    <Text fz="lg" fw={700} style={{
                         marginBottom: 10,
                    }} c="#fff">
                        Contact information
                    </Text>

                    {contactInconListRender()}
                </div>
            </div>
        </Paper>
      {/* <Stack spacing="xl">
        <Text align="center" order={2} weight={700}>
          Contact Information
        </Text>

        <Stack spacing="sm">
          <ContactItem
            icon={<IconUser />}
            label="John Doe"
            description="Founder & CEO"
          />
          <ContactItem
            icon={<IconMail />}
            label="john.doe@example.com"
            link={`mailto:john.doe@example.com`}
          />
          <ContactItem
            icon={<IconPhone />}
            label="+1 (555) 123-4567"
            link={`tel:+15551234567`}
          />
        </Stack>
      </Stack> */}
    </>
  );
}

function ContactItem({ icon, label, description, link }) {
  return (
    <Stack align="start">
      {icon && <div>{icon}</div>}
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Text weight={700}>{label}</Text>
          </a>
        ) : (
          <Text weight={700}>{label}</Text>
        )}
        {description && <Text>{description}</Text>}
      </div>
    </Stack>
  );
}
