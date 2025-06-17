import React, { useState, useEffect } from 'react';
import { Check, AlertTriangle, Info, X } from 'lucide-react';

interface ValidationResult {
  isValid: boolean;
  message: string;
  suggestions?: string[];
  type: 'success' | 'error' | 'warning' | 'info';
}

interface AIFormValidationProps {
  value: string;
  fieldType: 'email' | 'password' | 'name' | 'text' | 'phone';
  showStrengthMeter?: boolean;
  theme?: 'orange' | 'purple' | 'blue';
  onChange?: (value: string, isValid: boolean) => void;
}

export const AIFormValidation: React.FC<AIFormValidationProps> = ({
  value,
  fieldType,
  showStrengthMeter = false,
  theme = 'orange',
  onChange
}) => {
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [strength, setStrength] = useState(0);

  // Theme styles
  const themeStyles = {
    orange: {
      success: 'text-green-600 bg-green-50 border-green-200',
      error: 'text-red-600 bg-red-50 border-red-200',
      warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      info: 'text-orange-600 bg-orange-50 border-orange-200',
      meter: {
        bg: 'bg-gray-200',
        fill: 'bg-orange-500',
        weak: 'bg-red-500',
        medium: 'bg-yellow-500',
        strong: 'bg-green-500'
      }
    },
    purple: {
      success: 'text-green-600 bg-green-50 border-green-200',
      error: 'text-red-600 bg-red-50 border-red-200',
      warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      info: 'text-purple-600 bg-purple-50 border-purple-200',
      meter: {
        bg: 'bg-gray-200',
        fill: 'bg-purple-500',
        weak: 'bg-red-500',
        medium: 'bg-yellow-500',
        strong: 'bg-green-500'
      }
    },
    blue: {
      success: 'text-green-600 bg-green-50 border-green-200',
      error: 'text-red-600 bg-red-50 border-red-200',
      warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      info: 'text-blue-600 bg-blue-50 border-blue-200',
      meter: {
        bg: 'bg-gray-200',
        fill: 'bg-blue-500',
        weak: 'bg-red-500',
        medium: 'bg-yellow-500',
        strong: 'bg-green-500'
      }
    }
  };

  const currentTheme = themeStyles[theme];

  useEffect(() => {
    validateInput(value);
  }, [value, fieldType]);

  const validateInput = (input: string) => {
    if (!input) {
      setValidation(null);
      if (onChange) onChange(input, false);
      return;
    }

    let result: ValidationResult;

    switch (fieldType) {
      case 'email':
        result = validateEmail(input);
        break;
      case 'password':
        result = validatePassword(input);
        break;
      case 'name':
        result = validateName(input);
        break;
      case 'phone':
        result = validatePhone(input);
        break;
      default:
        result = validateText(input);
    }

    setValidation(result);
    if (onChange) onChange(input, result.isValid);
  };

  const validateEmail = (email: string): ValidationResult => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      return {
        isValid: true,
        message: 'Valid email address',
        type: 'success'
      };
    }
    
    // AI-powered suggestions
    let suggestions: string[] = [];
    
    if (!email.includes('@')) {
      suggestions.push(`${email}@gmail.com`);
      suggestions.push(`${email}@outlook.com`);
    } else {
      const [username, domain] = email.split('@');
      
      if (!domain.includes('.')) {
        suggestions.push(`${username}@${domain}.com`);
        suggestions.push(`${username}@${domain}.org`);
      } else if (domain === 'gmal.com') {
        suggestions.push(`${username}@gmail.com`);
      } else if (domain === 'yaho.com') {
        suggestions.push(`${username}@yahoo.com`);
      }
    }
    
    return {
      isValid: false,
      message: 'Invalid email address',
      suggestions: suggestions.length > 0 ? suggestions : undefined,
      type: 'error'
    };
  };

  const validatePassword = (password: string): ValidationResult => {
    // Calculate password strength
    let strengthScore = 0;
    
    if (password.length >= 8) strengthScore += 1;
    if (/[A-Z]/.test(password)) strengthScore += 1;
    if (/[a-z]/.test(password)) strengthScore += 1;
    if (/[0-9]/.test(password)) strengthScore += 1;
    if (/[^A-Za-z0-9]/.test(password)) strengthScore += 1;
    
    setStrength(strengthScore);
    
    if (strengthScore < 3) {
      return {
        isValid: false,
        message: 'Password is too weak',
        suggestions: [
          'Add uppercase letters',
          'Add numbers',
          'Add special characters',
          'Make it longer'
        ].filter((_, index) => index < 5 - strengthScore),
        type: 'warning'
      };
    }
    
    return {
      isValid: true,
      message: strengthScore >= 4 ? 'Strong password' : 'Acceptable password',
      type: 'success'
    };
  };

  const validateName = (name: string): ValidationResult => {
    if (name.length < 2) {
      return {
        isValid: false,
        message: 'Name is too short',
        type: 'error'
      };
    }
    
    if (/\d/.test(name)) {
      return {
        isValid: false,
        message: 'Name should not contain numbers',
        type: 'error'
      };
    }
    
    return {
      isValid: true,
      message: 'Valid name',
      type: 'success'
    };
  };

  const validatePhone = (phone: string): ValidationResult => {
    // Remove non-digit characters for validation
    const digits = phone.replace(/\D/g, '');
    
    if (digits.length < 10) {
      return {
        isValid: false,
        message: 'Phone number is too short',
        type: 'error'
      };
    }
    
    // Format suggestion
    let formattedSuggestion;
    if (digits.length === 10) {
      formattedSuggestion = `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6, 10)}`;
    }
    
    return {
      isValid: true,
      message: 'Valid phone number',
      suggestions: formattedSuggestion ? [formattedSuggestion] : undefined,
      type: 'success'
    };
  };

  const validateText = (text: string): ValidationResult => {
    if (text.length < 3) {
      return {
        isValid: false,
        message: 'Text is too short',
        type: 'info'
      };
    }
    
    return {
      isValid: true,
      message: 'Valid input',
      type: 'success'
    };
  };

  const getValidationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check className="w-4 h-4" />;
      case 'error':
        return <X className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'info':
        return <Info className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStrengthMeterColor = () => {
    if (strength <= 2) return currentTheme.meter.weak;
    if (strength <= 3) return currentTheme.meter.medium;
    return currentTheme.meter.strong;
  };

  const getStrengthLabel = () => {
    if (strength <= 2) return 'Weak';
    if (strength <= 3) return 'Medium';
    return 'Strong';
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (onChange) onChange(suggestion, true);
  };

  if (!validation) return null;

  return (
    <div className="mt-1 text-sm">
      {/* Validation Message */}
      <div className={`flex items-center gap-2 p-2 rounded-md border ${currentTheme[validation.type]}`}>
        {getValidationIcon(validation.type)}
        <span>{validation.message}</span>
      </div>
      
      {/* Password Strength Meter */}
      {showStrengthMeter && fieldType === 'password' && value && (
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Password Strength</span>
            <span className="text-xs font-medium">{getStrengthLabel()}</span>
          </div>
          <div className={`w-full h-1.5 ${currentTheme.meter.bg} rounded-full overflow-hidden`}>
            <div 
              className={`h-full ${getStrengthMeterColor()} transition-all duration-300`}
              style={{ width: `${(strength / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Suggestions */}
      {validation.suggestions && validation.suggestions.length > 0 && (
        <div className="mt-2 space-y-1">
          <p className="text-xs text-gray-500">Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {validation.suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`text-xs px-2 py-1 rounded-md ${currentTheme.info} hover:opacity-80 transition-opacity`}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};