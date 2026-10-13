import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Check if we have a real Sanity project ID (8 char alphanumeric)
const hasValidConfig = projectId && /^[a-z0-9]{8}$/.test(projectId);

const realClient = hasValidConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    })
  : null;

// Dummy client that returns empty results when Sanity is not configured
const dummyClient = {
  fetch: async () => [],
  withConfig: () => dummyClient,
};

export const client = realClient || dummyClient;
