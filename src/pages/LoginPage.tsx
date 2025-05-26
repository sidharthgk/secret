import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('email');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    console.log('Login attempted with:', { email, password });
  };
  
  return (
    <div className="flex h-screen w-full">
      <div className="relative hidden md:flex md:w-1/2 bg-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200"></div>
        
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <div className="absolute bottom-0 h-24 w-full bg-blue-200 rounded-t-full"></div>
          <div className="absolute bottom-8 h-24 w-full bg-blue-300 rounded-t-full"></div>
          <div className="absolute bottom-16 h-24 w-full bg-blue-400 rounded-t-full"></div>
        </div>
        
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-white rounded-full shadow-lg"></div>
        </div>
        
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-sm p-6 rounded-lg text-center text-white">
          <h2 className="text-xl">Welcome to the dps-uk</h2>
          <p className="mt-2">Login to explore</p>
          
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Right side with login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-teal-500">dps-uk</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Login your account!</h1>
          
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button 
              className={`py-2 px-4 ${activeTab === 'email' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('email')}
            >
              E-mail
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'mobile' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('mobile')}
            >
              Mobile Number
            </button>
          </div>
          
          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail address</label>
              <input 
                type="email" 
                placeholder="Type text here" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input 
                  type={passwordVisible ? "text" : "password"} 
                  placeholder="Type text here" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <Eye className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                className="text-sm text-teal-500 hover:text-teal-600"
                onClick={() => console.log('Forgot password clicked')}
              >
                Forgot password?
              </button>
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}