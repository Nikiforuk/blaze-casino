import { z } from 'zod';

const emailSchema = z.string().email('This email is not valid');

const usernameSchema = z
  .string()
  .min(3, 'This username is not valid')
  .max(20, 'This username is not valid')
  .regex(/^[a-zA-Z0-9]+$/, 'This username is not valid');

const PASSWORD_ERROR_MESSAGE = `Password must contain
 ∙ Minimum length: 8–12 characters
 ∙ Requirements:
 ∙ At least one uppercase letter (A–Z)
 ∙ At least one lowercase letter (a–z)
 ∙ At least one number (0–9)
 ∙ At least one special character (!@#$%^&*)`;

const passwordSchema = z
  .string()
  .min(8, PASSWORD_ERROR_MESSAGE)
  .max(12, PASSWORD_ERROR_MESSAGE)
  .regex(/[A-Z]/, PASSWORD_ERROR_MESSAGE)
  .regex(/[a-z]/, PASSWORD_ERROR_MESSAGE)
  .regex(/[0-9]/, PASSWORD_ERROR_MESSAGE)
  .regex(/[!@#$%^&*]/, PASSWORD_ERROR_MESSAGE);

export const signinSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export type SigninFormData = z.infer<typeof signinSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
