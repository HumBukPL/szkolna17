import { opinions } from "@/comments";
import CommentHtml from "@/components/Comment";
import { Box, Col, Container, Grid, Paper, Text } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

export default function AboutUs() {

  return (
    <>
        <Container size="lg">
      <Grid>
        <Col span={12}>
          <Paper shadow="md" padding="lg" radius="lg">
            <div style={{ textAlign: "center" }}>
              <IconUsers size="200" />
              <Text align="center" fz="xl" mt={2} weight={700}>
                About Us
              </Text>
            </div>

            <Text align="justify" mt={3}>
                Welcome to our car dealership, where our passion for automobiles drives innovation. 
                Established in 2005, we have been committed to providing a seamless and exhilarating car-buying experience.
                Our mission is to connect enthusiasts with their dream vehicles, offering a curated selection of top-quality
                cars that blend performance, style, and reliability.
            </Text>
            <Text align="justify" mt={3}>
            Our team, consisting of dedicated automotive professionals, strives to provide an unparalleled car-buying experience. With a deep understanding of the automotive industry and a passion for cars, we aim to offer personalized service and expert guidance. We believe in delivering exceptional vehicles that meet the highest standards of performance, safety, and style, ensuring that each customer finds their perfect match.
            </Text>

            <Text align="justify" mt={3}>
            We are more than just a brand; it's a community of car enthusiasts. We deeply appreciate the trust our customers place in us, and we are committed to fostering lasting relationships. Our customer-centric approach goes beyond the sale – it's about creating a community where car lovers can connect, share experiences, and embark on exciting journeys together.
            </Text>

            <Text align="justify" mt={3}>
            Thank you for being a part of our journey in the world of automobiles. Explore our wide range of offerings, from sleek sedans to powerful SUVs, and join us as we continue to redefine the car-buying experience. Our future goals include expanding our selection, introducing innovative features, and maintaining the highest standards of service. We look forward to accompanying you on the road ahead.
            </Text>
          </Paper>
        </Col>
      </Grid>
      <Box sx={{
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 20,
        margin: '40px 0',
      }}>
        {opinions.map((comment, index) => {
          return (
            <CommentHtml 
              key={index}
              name={comment.name} 
              timeAgo={comment.timeAgo}
              avatar={comment.avatar}
              comment={comment.comment}
            />
          )
        })}
      </Box>
    </Container>
    </>
  );
}