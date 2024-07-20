// globals.d.ts
interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: any;
  }
  
  declare module 'firebase/auth' {
  export interface ConfirmationResult {
    // Add any known properties of ConfirmationResult here
    confirm(verificationCode: string): Promise<any>;
  }
}
