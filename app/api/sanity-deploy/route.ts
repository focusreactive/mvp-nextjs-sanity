import { headers } from 'next/headers';

import { createVercelProjectDeployment } from '../../(frontend)/roll-out/vercel-api';

export async function POST(req: Request, res: Response) {
  const authHeader = headers().get('authorization');
  const token = authHeader?.split(' ')[1];

  console.log('authHeader');
  console.log(authHeader);
  console.log('token');
  console.log(token);
  console.log('process.env.VERCEL_PERSONAL_AUTH_TOKEN');
  console.log(process.env.VERCEL_PERSONAL_AUTH_TOKEN);

  const urlParams = new URLSearchParams(req.url.split('?')[1]);

  const deploymentData = {
    projectId: urlParams.get('projectId') || '',
    projectName: urlParams.get('projectName') || '',
    repoId: Number(process.env.GITHUB_REPO_ID),
    type: process.env.REPO_TYPE || '',
    productionBranch: process.env.GITHUB_REPO_PRODUCTION_BRANCH || '',
  };

  if (token === process.env.VERCEL_PERSONAL_AUTH_TOKEN) {
    const result = await createVercelProjectDeployment(deploymentData);

    return Response.json(result);
  }

  return new Response('Invalid vercel token', { status: 402 });
}
