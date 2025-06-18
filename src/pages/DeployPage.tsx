import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { DeployButton } from '@/components/ui/deploy-button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Globe, Github, Code, Server, Database, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const DeployPage = () => {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployId, setDeployId] = useState<string | undefined>(undefined);
  const [deploymentChecklist, setDeploymentChecklist] = useState({
    frontend: true,
    database: true,
    environment: true,
    assets: true
  });

  const handleDeploy = async () => {
    setIsDeploying(true);
    
    try {
      // In a real implementation, this would call your backend to trigger the deployment
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate deployment process
      
      // Set a mock deployment ID
      setDeployId('mock-deploy-123');
      
      toast.success('Deployment initiated successfully!');
    } catch (error) {
      console.error('Deployment failed:', error);
      toast.error('Deployment failed. Please try again.');
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Deploy Your Magic Notebook</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Deployment Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-500" />
                Deploy to Netlify
              </CardTitle>
              <CardDescription>
                Share your Magic Notebook with the world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Your application will be built and deployed to Netlify's global CDN, making it accessible from anywhere in the world.
                </p>
                
                {/* Deployment Checklist */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-3">Pre-deployment Checklist</h3>
                  <ul className="space-y-2">
                    {Object.entries(deploymentChecklist).map(([key, isReady]) => (
                      <li key={key} className="flex items-center gap-2">
                        {isReady ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-amber-500" />
                        )}
                        <span className={isReady ? 'text-gray-700' : 'text-amber-600'}>
                          {key.charAt(0).toUpperCase() + key.slice(1)} {isReady ? 'ready' : 'not configured'}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <DeployButton 
                onDeploy={handleDeploy}
                isDeploying={isDeploying}
                deployId={deployId}
              />
            </CardFooter>
          </Card>
          
          {/* Deployment Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                Deployment Information
              </CardTitle>
              <CardDescription>
                What happens when you deploy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Build Process</h3>
                    <p className="text-sm text-gray-600">
                      Your code is compiled and optimized for production, ensuring fast load times and efficient performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Server className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Global CDN</h3>
                    <p className="text-sm text-gray-600">
                      Your application is distributed to servers around the world, ensuring fast access for all users regardless of location.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Database Connection</h3>
                    <p className="text-sm text-gray-600">
                      Your application will connect to your Supabase database using secure environment variables.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Github className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Continuous Deployment</h3>
                    <p className="text-sm text-gray-600">
                      Future updates can be automatically deployed when you push changes to your repository.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default DeployPage;