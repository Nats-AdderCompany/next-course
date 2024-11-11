import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";
import { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>

      {/* <Body style={{ background: "darkgrey" }}> */}
      {/* <Body style={body}>
        <Container>
          <Text style={heading}>Hello {name}</Text>
          <Link href="https://village88.com">www.village88.com</Link>
        </Container>
      </Body> */}

      {/* TAILWIND */}
      <Tailwind>
        <Body className="bg-blue-300">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://village88.com">www.village88.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "darkgrey",
};

const heading: CSSProperties = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "whitesmoke",
};

export default WelcomeTemplate;
