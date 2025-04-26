"use client"

import { useState, useEffect } from "react"
import PatientSignupForm from "./page"

export default function ClientPatientSignup() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <PatientSignupForm />
}
