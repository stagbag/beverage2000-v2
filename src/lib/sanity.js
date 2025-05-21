import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'g4thx2us',
	dataset: 'production',
	apiVersion: '2025-02-06',
	useCdn: true
});
