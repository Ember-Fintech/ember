import { useState } from "react"
import { signInWithPhoneNumber, ConfirmationResult, UserCredential } from "firebase/auth"

import { auth } from "../firebaseConfig"
import firebase from "firebase/compat"
import ApplicationVerifier = firebase.auth.ApplicationVerifier

interface PhoneAuthResponse {
  success: boolean
  user?: UserCredential["user"]
  error?: string
}

export const usePhoneAuth = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [verificationId, setVerificationId] = useState<ConfirmationResult | null>(null)

  // Send OTP to phone number
  const sendOTP = async (
    phoneNumber: string,
    recapthaVerifier?: ApplicationVerifier,
  ): Promise<boolean> => {
    try {
      setLoading(true)
      setError(null)
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recapthaVerifier)
      console.log("after confirmationnn")
      setVerificationId(confirmationResult)
      setLoading(false)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setLoading(false)
      return false
    }
  }

  // Verify OTP
  const verifyOTP = async (otp: string): Promise<PhoneAuthResponse> => {
    try {
      setLoading(true)
      setError(null)

      if (!verificationId) {
        throw new Error("Verification ID not found")
      }

      const result = await verificationId.confirm(otp)
      setLoading(false)
      return {
        success: true,
        user: result.user,
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      setLoading(false)
      return {
        success: false,
        error: errorMessage,
      }
    }
  }

  return {
    loading,
    error,
    sendOTP,
    verifyOTP,
  }
}
