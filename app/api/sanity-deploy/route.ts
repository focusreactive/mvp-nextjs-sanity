import { headers } from 'next/headers';

import { createVercelProjectDeployment } from '../../(frontend)/roll-out/vercel-api';

export async function POST() {
  const authHeader = headers().get('authorization');
  const token = authHeader?.split(' ')[1];

  const deploymentData = {
    projectId: process.env.VERCEL_PROJECT_ID || '',
    projectName: process.env.VERCEL_PROJECT_NAME || '',
    repoId: Number(process.env.GITHUB_REPO_ID),
    type: process.env.REPO_TYPE || '',
    productionBranch: process.env.GITHUB_REPO_PRODUCTION_BRANCH || '',
  };

  if (token === process.env.VERCEL_PERSONAL_AUTH_TOKEN) {
    console.log({ deploymentData });
    const result = await createVercelProjectDeployment(deploymentData);
    console.log('{ deploymentData }');

    return Response.json(result);
  }

  console.log('token invalid, pass if block');

  return new Response('Invalid vercel token', { status: 401 });
}
