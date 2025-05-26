export interface AppUser {
  id: string;
  firstName: string;
  lastName: string;
  nhsNumber: string;
  email: string;
  mobilePhone: string;
  dob: string;
  lastLoginTimestamp: string;
  feedbackCount: number;
}

export interface PatientFeedback {
  fullName: string;
  nhsNumber: string;
  dob: string;
  providerName: string;
  apptDate: string;
  rating: number;
  isGoogleReviewSubmitted: boolean;
  feedbackText?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

export interface AppPromotion {
  id: string;
  name: string;
  description?: string;
  scheduleFrom: string;
  scheduleTo: string;
  startTime?: string;
  endTime?: string;
  targetAudienceSummary: string;
  status: 'active' | 'upcoming' | 'expired';
  views: number;
  clicks: number;
  image?: string;
}

export interface Plan {
  id: string;
  practice: string;
  planName: string;
  description: string;
  features: string;
  price: number;
}

export interface HealthTip {
  id: string;
  title: string;
  videourl: string;
  category: string;
}

export interface Guideline {
  id: string;
  videourl: string;
  description: string;
  pdfuploaded: string;
}
