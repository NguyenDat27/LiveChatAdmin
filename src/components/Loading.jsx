import {Layout, LegacyCard, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer} from "@shopify/polaris";

// Fetch dữ liệu sẽ gọi component này

function LoadingPage() {
  return (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  )
}

export default LoadingPage;