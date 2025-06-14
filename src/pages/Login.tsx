
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Lock, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`bg-note-${i}`}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300/30 to-amber-300/30 rounded-lg border-l-4 border-yellow-400/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-amber-700 hover:text-amber-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Magic</span>
          </Link>

          {/* Login Form */}
          <div className="bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 p-8 rounded-3xl border-4 border-amber-400 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="bg-amber-200 p-4 rounded-2xl border-4 border-yellow-400 transform -rotate-1 inline-block mb-4">
                <img 
                  src="/lovable-uploads/cb8ad732-ec0b-4d19-8ec7-5886d9f5bda1.png" 
                  alt="Magic Notebook Logo" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h1 className="text-3xl font-bold text-amber-800 mb-2">Welcome Back!</h1>
              <p className="text-amber-700">Enter your magical credentials</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="bg-yellow-50 p-4 rounded-2xl border-3 border-amber-300 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <label className="block text-amber-800 font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/80 border-2 border-amber-200 rounded-xl pl-12 pr-4 py-3 text-amber-800 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="bg-amber-50 p-4 rounded-2xl border-3 border-yellow-300 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <label className="block text-amber-800 font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/80 border-2 border-amber-200 rounded-xl pl-12 pr-4 py-3 text-amber-800 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Your magical password"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25"
              >
                <Star className="w-5 h-5 mr-2" />
                Cast Login Spell
              </Button>
            </form>

            {/* Footer Links */}
            <div className="mt-6 text-center space-y-2">
              <Link to="/signup" className="block text-amber-700 hover:text-amber-900 font-medium">
                Need an account? Join the Magic Circle
              </Link>
              <a href="#" className="block text-amber-600 hover:text-amber-800 text-sm">
                Forgot your spell? Reset password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
