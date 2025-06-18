import React, { useState } from 'react';
import { Rocket, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getDeploymentStatus } from '@/lib/deployment';

interface DeployButtonProps {
  onDeploy: () => Promise<void>;
  isDeploying?: boolean;
  deployId?: string;
  className?: string;
}

export const DeployButton: React.FC<DeployButtonProps> = ({
  onDeploy,
  isDeploying = false,
  deployId,
  className = ''
}) => {
  const [status, setStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  const [deployUrl, setDeployUrl] = useState<string | null>(null);

  const handleDeploy = async () => {
    if (isDeploying || status === 'deploying') return;
    
    setStatus('deploying');
    try {
      await onDeploy();
      setStatus('success');
      
      // If we have a deployId, check the status
      if (deployId) {
        const deployStatus = await getDeploymentStatus({ id: deployId });
        if (deployStatus && deployStatus.deploy_url) {
          setDeployUrl(deployStatus.deploy_url);
        }
      }
    } catch (error) {
      console.error('Deployment failed:', error);
      setStatus('error');
    }
  };

  return (
    <div className={className}>
      {status === 'success' && deployUrl ? (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-green-600">
            <Check className="w-5 h-5" />
            <span>Deployment successful!</span>
          </div>
          <a 
            href={deployUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit your site
          </a>
        </div>
      ) : (
        <Button
          onClick={handleDeploy}
          disabled={isDeploying || status === 'deploying'}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
        >
          {isDeploying || status === 'deploying' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Deploying...
            </>
          ) : (
            <>
              <Rocket className="w-4 h-4 mr-2" />
              Deploy to Netlify
            </>
          )}
        </Button>
      )}
    </div>
  );
};