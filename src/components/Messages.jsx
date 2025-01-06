import {
  LegacyCard,
  ResourceList,
  Avatar,
  ResourceItem,
  Text,
} from "@shopify/polaris";

export default function Messages({ items }) {
  return (
    <LegacyCard>
      <ResourceList
        resourceName={{ singular: "customer", plural: "customers" }}
        items={items}
        renderItem={(item) => {
          const { id, name, location } = item;
          const media = <Avatar customer size="md" name={name} />;
          return (
            <ResourceItem
              id={id}
              media={media}
              accessibilityLabel={`View details for ${name}`}
            >
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {name}
              </Text>
              <div>{location}</div>
            </ResourceItem>
          );
        }}
      />
    </LegacyCard>
  );
}
