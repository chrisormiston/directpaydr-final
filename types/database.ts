// Database schema types for DirectPayDr

// User roles
export type UserRole = "patient" | "provider" | "employer" | "admin"

// Base user interface
export interface User {
  id: string
  email: string
  emailVerified?: Date
  name?: string
  image?: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

// Patient profile
export interface Patient {
  id: string
  userId: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  insuranceProvider?: string
  insurancePolicyNumber?: string
  createdAt: Date
  updatedAt: Date
}

// Provider specialties
export type ProviderSpecialty =
  | "Bariatrics"
  | "General Surgery"
  | "Imaging & Radiology"
  | "Labs"
  | "Office Visits"
  | "Pregnancy"
  | "Wellness"
  | "Other"

// Provider profile
export interface Provider {
  id: string
  userId: string
  providerName: string
  practiceName: string
  specialty: ProviderSpecialty
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  licenseNumber: string
  licenseState: string
  npi?: string // National Provider Identifier
  bio?: string
  acceptingNewPatients: boolean
  createdAt: Date
  updatedAt: Date
}

// Employer plan types
export type EmployerPlanType = "Self-Insured" | "Fully-Insured" | "Hybrid" | "Other"

// Employer profile
export interface Employer {
  id: string
  userId: string
  companyName: string
  contactName: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  numberOfEmployees: number
  planType: EmployerPlanType
  currentInsurer?: string
  createdAt: Date
  updatedAt: Date
}

// Admin permission levels
export type AdminPermissionLevel = "read" | "write" | "admin" | "superadmin"

// Admin profile
export interface Admin {
  id: string
  userId: string
  permissionLevel: AdminPermissionLevel
  department?: string
  createdAt: Date
  updatedAt: Date
}

// Account (for OAuth providers)
export interface Account {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token?: string
  access_token?: string
  expires_at?: number
  token_type?: string
  scope?: string
  id_token?: string
  session_state?: string
}

// Session
export interface Session {
  id: string
  userId: string
  expires: Date
  sessionToken: string
}

// Verification Token (for email verification)
export interface VerificationToken {
  identifier: string
  token: string
  expires: Date
}

// Password Reset Token
export interface PasswordResetToken {
  id: string
  email: string
  token: string
  expires: Date
}
