import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <s-page heading="Featured Collection Grid">
      <s-section heading="How to use this app">
        <s-paragraph>
          This app adds a <strong>Featured Collection Grid</strong> block to your theme. 
          The block shows random products from any collection you choose.
        </s-paragraph>
      </s-section>

      <s-section heading="Add the block to your theme">
        <s-unordered-list>
          <s-list-item>Go to <strong>Online Store</strong> → <strong>Themes</strong></s-list-item>
          <s-list-item>Click <strong>Customize</strong> on your current theme</s-list-item>
          <s-list-item>On any page (e.g. Homepage), click <strong>Add block</strong> or <strong>Add section</strong></s-list-item>
          <s-list-item>Under <strong>Apps</strong>, find <strong>Featured Collection Grid</strong></s-list-item>
          <s-list-item>Add it and choose a collection, heading, number of products, and columns</s-list-item>
          <s-list-item>Click <strong>Save</strong></s-list-item>
        </s-unordered-list>
      </s-section>

      <s-section slot="aside" heading="Block settings">
        <s-paragraph>
          <strong>Collection</strong> — Pick which collection to show products from
        </s-paragraph>
        <s-paragraph>
          <strong>Heading</strong> — Optional heading above the grid
        </s-paragraph>
        <s-paragraph>
          <strong>Products to show</strong> — 2–24 products (default: 8)
        </s-paragraph>
        <s-paragraph>
          <strong>Columns</strong> — 2–6 columns on desktop (2 on mobile)
        </s-paragraph>
      </s-section>

      <s-section slot="aside" heading="Random order">
        <s-paragraph>
          Products are shown in a random order each time the page loads, so customers see a fresh selection.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
