import React from "react";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
  Image,
  Card,
  Flex,
  Box,
  Text,
  Button,
  Modal,
} from "@mantine/core";
import {
  IconDiscountCheck,
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconThumbUp,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { comments2 } from "@/comments";
import CommentHtml from "@/components/Comment";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { initAnalytics } from "@/firebase/firebase";

const ProductPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const analytics = initAnalytics();
    if (analytics) {
      logEvent(analytics, "page_view", { title: "Product Page 2" });
    }
  }, []);

  const product = {
    name: "Porshe 911 GT3 RS",
    year: "2021",
    price: "$950,000",
    imageSrc: "/Porshe2.png",
    mockData: [
      { label: "2 passengers", icon: IconUsers },
      { label: "100 km/h in 2.2 seconds", icon: IconGauge },
      { label: "Sequential gearbox", icon: IconManualGearbox },
      { label: "Petrol", icon: IconGasStation },
    ],
  };

  const handleClick = () => {
    open();
    const analytics = initAnalytics();
    if (analytics) {
      logEvent(analytics, "buy_click", {
        item: "Item 2",
      });
    }
  };

  const renderModal = () => {
    return (
      <>
        <Modal
          opened={opened}
          onClose={() => {
            close();
          }}
          size={"xl"}
          title="Checkout summary"
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
        >
          <Text
            sx={{
              fontSize: 25,
              fontWeight: 700,
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Thank you for your purchase!
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "10px 0",
              padding: "10px 0",
            }}
          >
            <IconDiscountCheck size={200} strokeWidth={2} color={"#79d279"} />
            <Button
              radius="xl"
              onClick={() => {
                window.location.href = "/";
              }}
              variant="filled"
              color="indigo"
              sx={{
                width: 300,
                marginTop: 70,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Continue
            </Button>
          </Box>
          <Text
            sx={{
              fontSize: 15,
              fontWeight: 700,
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Hopefuly you will enjoy your new car!
          </Text>
        </Modal>
      </>
    );
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Text
          sx={{
            fontSize: 30,
            fontWeight: 700,
            textAlign: "left",
            margin: "20px 0",
            width: "40%",
            marginLeft: "7%",
          }}
        >
          {product.name} - {product.year}
        </Text>
        <Flex justify="space-around" align="center" direction="row">
          <Image radius="lg" maw={800} src={product.imageSrc} />
          <Card
            radius={"lg"}
            sx={{
              // border: '1px solid red',
              width: "30%",
            }}
          >
            <Text
              sx={{
                fontSize: 20,
                fontWeight: 700,
                textAlign: "left",
                margin: "20px 0",
              }}
            >
              Specifications
            </Text>
            <Flex align={"center"} direction={"column"}>
              {product.mockData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      padding: "10px 0",
                    }}
                  >
                    <Icon
                      size={30}
                      color="white"
                      stroke={2}
                      sx={{
                        marginRight: 20,
                      }}
                    />
                    <Text
                      sx={{
                        fontSize: 20,
                        fontWeight: 700,
                        textAlign: "left",
                        margin: "20px 0",
                      }}
                    >
                      {item.label}
                    </Text>
                  </Box>
                );
              })}
              <Button
                radius="xl"
                onClick={handleClick}
                variant="filled"
                color="indigo"
                sx={{
                  width: 300,
                  marginLeft: "7%",
                  marginTop: 20,
                }}
              >
                Buy for {product.price}
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Box>
      <Box
        sx={{
          // border: '1px solid red',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: 20,
          margin: "20px 0",
        }}
      >
        {comments2.map((comment, index) => {
          return (
            <CommentHtml
              key={index}
              name={comment.name}
              timeAgo={comment.timeAgo}
              avatar={comment.avatar}
              comment={comment.comment}
            />
          );
        })}
      </Box>
      {renderModal()}
    </>
  );
};

export default ProductPage;
