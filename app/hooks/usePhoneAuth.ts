import { useState } from 'react';
import { 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  ConfirmationResult,
  UserCredential
} from 'firebase/auth';

interface PhoneAuthResponse {
  success: boolean;
  user?: UserCredential['user'];
  error?: string;
}

import {auth} from "../firebaseConfig"

export const usePhoneAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationId, setVerificationId] = useState<ConfirmationResult | null>(null);
  
  // Setup invisible reCAPTCHA
  const setupRecaptcha = (elementId: string): void => {
    try {
      window.window.recaptchaVerifier = new RecaptchaVerifier(auth, elementId, {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved
        },
      });
      console.log(window.window)
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  // Send OTP to phone number
  const sendOTP = async (phoneNumber: string): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
      return false;
    }
  };

  // Verify OTP
  const verifyOTP = async (otp: string): Promise<PhoneAuthResponse> => {
    try {
      setLoading(true);
      setError(null);

      if (!verificationId) {
        throw new Error('Verification ID not found');
      }

      const result = await verificationId.confirm(otp);
      setLoading(false);
      return {
        success: true,
        user: result.user
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      setLoading(false);
      return {
        success: false,
        error: errorMessage
      };
    }
  };

  return {
    loading,
    error,
    sendOTP,
    verifyOTP,
    setupRecaptcha
  };
};

// Add RecaptchaVerifier to the window object type
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}