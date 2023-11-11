export async function trigerWorkflowtoFillDataset({
  sanityProjectId,
  sanityProjectDataset,
  vercelProjectId,
  vercelProjectName,
}: {
  sanityProjectId: string;
  sanityProjectDataset: string;
  vercelProjectId: string;
  vercelProjectName: string;
}) {
  try {
    console.log('triger github workflow');
    await fetch(
      `https://api.github.com/repos/focusreactive/Demo-NextJS13-Sanity/actions/workflows/75419986/dispatches`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: 'auto-roll-out', // switch to main when merged
          inputs: {
            'sanity-project-id': sanityProjectId,
            'sanity-project-dataset': sanityProjectDataset,
            'vercel-project-id': vercelProjectId,
            'vercel-project-name': vercelProjectName,
          },
        }),
      },
    );

    console.log('github workflow triggered');
  } catch (e) {
    console.log(e);
  }
}
