import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Only create a real Sanity client if env vars are explicitly set
const hasValidConfig = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) && 
                       process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'navnerds';

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
