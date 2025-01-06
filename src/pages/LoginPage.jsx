import {
  Button,
  Form,
  FormLayout,
  Icon,
  Text,
  TextField,
} from "@shopify/polaris";
import styled from "styled-components";
import { ArrowRightIcon } from "@shopify/polaris-icons";

export default function LoginPage() {
  const handleSubmit = () => {
    alert("Đăng nhập thành công");
  };
  return (
    <Wrapper>
      <div className="gap-6 z-10 bg-background w-[500px] flex flex-col rounded-lg p-8 ">
        <div>
          <Text variant="heading2xl" as="h2">
            Đăng nhập
          </Text>
          <Text as="p" variant="headingMd" fontWeight="medium" tone="subdued">
            Đăng nhập Live Chat
          </Text>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              label="Mật khẩu"
              type="password"
              autoComplete="current-password"
            />
            <ButtonStyle>
              <Button submit fullWidth variant="primary">
                Đăng nhập
              </Button>
              <div className="icon">
                <Icon source={ArrowRightIcon} tone="subdued" />
              </div>
            </ButtonStyle>
          </FormLayout>
        </Form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: conic-gradient(
      from 202deg at 81.78% 23.22%,
      #4629f2 0deg,
      #13c6ff 125.62500357627869deg,
      #b94dfb 215.62499284744263deg,
      #ff53ee 294.3749928474426deg,
      #f3b960 360deg
    ),
    #d9d9d9;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(18px);
    z-index: 1;
  }
  .Polaris-TextField__Input {
    height: 38px;
    font-size: 15px;
  }
  .Polaris-Button {
    height: 45px;
  }
`;
const ButtonStyle = styled.div`
  position: relative;

  .icon {
    position: absolute;
    right: 41%;
    top: 55%;
    transform: translate(0, -50%);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    svg {
      color: #fff;
    }
  }

  &:hover {
    .icon {
      opacity: 1;
      transform: translate(100%, -50%);
    }
  }
`;
