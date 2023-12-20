import { Paper, Text } from "@mantine/core";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { initAnalytics } from "@/firebase/firebase";

export default function ReturnPolicy() {
  useEffect(() => {
    const analytics = initAnalytics();
    if (analytics) {
      logEvent(analytics, "page_view", { title: "Return Policy Page" });
    }
  }, []);

  function renderReturnPolicy() {
    return (
      <>
        <Text align="justify" c="#fff">
          At XYZ Company, we want to ensure your satisfaction with every
          purchase. If for any reason you are not satisfied with your purchase,
          you may return it within 30 days of the purchase date for a full
          refund or exchange.
        </Text>

        <Text align="justify" c="#fff" mt={10}>
          To initiate a return, please check our contact information page at{" "}
          <a href="/contact-information">contact</a>.
        </Text>

        <Text align="justify" c="#fff" mt={10}>
          Returned items must be in their original condition, unused, and in the
          original packaging. Please ensure that all tags and labels are still
          attached.
        </Text>

        <Text align="justify" c="#fff" mt={10}>
          Please allow 2-4 weeks for your return to be processed. Once your
          return is received and inspected, we will notify you of the approval
          or rejection of your refund. If approved, your refund will be
          processed, and a credit will be automatically applied to your original
          method of payment.
        </Text>

        <Text align="justify" c="#fff" mt={10}>
          If you have any further questions about our return policy, feel free
          to contact us. We appreciate your business!
        </Text>
      </>
    );
  }

  return (
    <>
      <Paper
        shadow="md"
        radius="lg"
        mt={"lg"}
        p={"lg"}
        style={{
          backgroundImage: "linear-gradient(315deg, #1971c2 0%, #0d3e82 74%)",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              position: "relative",
              borderRadius: 20,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "rem(1px) solid transparent",
              padding: "rem(20px)",
              flex: "0 0 rem(280px)",
            }}
          >
            <Text
              fz="lg"
              fw={700}
              style={{
                marginBottom: 10,
              }}
              c="#fff"
            >
              Return policy
            </Text>
            {renderReturnPolicy()}
          </div>
        </div>
      </Paper>
    </>
  );
}
