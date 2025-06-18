interface DeploymentOptions {
  id?: string;
}

export async function getDeploymentStatus(options: DeploymentOptions) {
  try {
    const response = await fetch(`/api/deployment-status?id=${options.id}`);
    if (!response.ok) {
      throw new Error(`Failed to get deployment status: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error getting deployment status:', error);
    return null;
  }
}