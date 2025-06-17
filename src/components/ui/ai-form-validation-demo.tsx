import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AIFormValidation } from '@/components/ui/ai-form-validation';

export const AIFormValidationDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    password: false,
    phone: false
  });

  const handleChange = (field: string, value: string, isValid: boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setValidations(prev => ({ ...prev, [field]: isValid }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are valid
    const isFormValid = Object.values(validations).every(Boolean);
    
    if (isFormValid) {
      alert('Form submitted successfully!');
      // In a real app, you would submit the form data to your backend
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
  };

  const isFormValid = Object.values(validations).every(Boolean) && 
                     Object.values(formData).every(value => value.trim() !== '');

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border-2 border-orange-200">
      <h2 className="text-2xl font-bold text-orange-800 mb-6">Sign Up</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value, false)}
            placeholder="Enter your full name"
            className="w-full"
          />
          <AIFormValidation
            value={formData.name}
            fieldType="name"
            theme="orange"
            onChange={(value, isValid) => handleChange('name', value, isValid)}
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value, false)}
            placeholder="your@email.com"
            className="w-full"
          />
          <AIFormValidation
            value={formData.email}
            fieldType="email"
            theme="orange"
            onChange={(value, isValid) => handleChange('email', value, isValid)}
          />
        </div>
        
        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value, false)}
            placeholder="Create a secure password"
            className="w-full"
          />
          <AIFormValidation
            value={formData.password}
            fieldType="password"
            showStrengthMeter={true}
            theme="orange"
            onChange={(value, isValid) => handleChange('password', value, isValid)}
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value, false)}
            placeholder="(123) 456-7890"
            className="w-full"
          />
          <AIFormValidation
            value={formData.phone}
            fieldType="phone"
            theme="orange"
            onChange={(value, isValid) => handleChange('phone', value, isValid)}
          />
        </div>
        
        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};