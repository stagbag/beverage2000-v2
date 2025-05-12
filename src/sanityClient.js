import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "g4thx2us",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});