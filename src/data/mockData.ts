import { AppUser, PatientFeedback, UserProfile, AppPromotion } from '../types';

export const appUsers: AppUser[] = [
  {
    id: '1',
    firstName: 'Wendy',
    lastName: 'Warren',
    nhsNumber: '45904',
    email: 'georgia@gmail.com',
    mobileNumber: '09778651234',
    dateOfBirth: '04-07-1999',
    lastLoginTimestamp: '08:00',
    numberOfFeedbacks: 5
  },
  {
    id: '2',
    firstName: 'Bessie',
    lastName: 'Fox',
    nhsNumber: '28200',
    email: 'dolores@gmail.com',
    mobileNumber: '09213456789',
    dateOfBirth: '12-07-1991',
    lastLoginTimestamp: '08:40',
    numberOfFeedbacks: 5
  },
  {
    id: '3',
    firstName: 'Darlene',
    lastName: 'Lane',
    nhsNumber: '43359',
    email: 'sara@gmail.com',
    mobileNumber: '09213456789',
    dateOfBirth: '03-04-2003',
    lastLoginTimestamp: '09:10',
    numberOfFeedbacks: 4
  },
  {
    id: '4',
    firstName: 'Dianne',
    lastName: 'Hawkins',
    nhsNumber: '74875',
    email: 'felicia@gmail.com',
    mobileNumber: '09991234567',
    dateOfBirth: '02-10-1998',
    lastLoginTimestamp: '09:20',
    numberOfFeedbacks: 3
  },
  {
    id: '5',
    firstName: 'Irma',
    lastName: 'Fox',
    nhsNumber: '13671',
    email: 'tim@gmail.com',
    mobileNumber: '09234567890',
    dateOfBirth: '04-07-1999',
    lastLoginTimestamp: '09:10',
    numberOfFeedbacks: 1
  },
  {
    id: '6',
    firstName: 'Regina',
    lastName: 'Richards',
    nhsNumber: '93046',
    email: 'nevaeh@gmail.com',
    mobileNumber: '09991234567',
    dateOfBirth: '04-07-1999',
    lastLoginTimestamp: '08:50',
    numberOfFeedbacks: 2
  },
  {
    id: '7',
    firstName: 'Esther',
    lastName: 'Warren',
    nhsNumber: '10708',
    email: 'nathan@gmail.com',
    mobileNumber: '09213456789',
    dateOfBirth: '03-04-2003',
    lastLoginTimestamp: '09:10',
    numberOfFeedbacks: 0
  },
  {
    id: '8',
    firstName: 'Priscilla',
    lastName: 'Edwards',
    nhsNumber: '23340',
    email: 'kenzi@gmail.com',
    mobileNumber: '09991234567',
    dateOfBirth: '12-07-1991',
    lastLoginTimestamp: '09:00',
    numberOfFeedbacks: 4
  },
  {
    id: '9',
    firstName: 'Jane',
    lastName: 'Fox',
    nhsNumber: '20079',
    email: 'michael@gmail.com',
    mobileNumber: '09213456789',
    dateOfBirth: '02-10-1998',
    lastLoginTimestamp: '08:40',
    numberOfFeedbacks: 1
  }
];

export const patientFeedback: PatientFeedback[] = [
  {
    id: '1',
    patientName: 'Wendy',
    nhsNumber: '45904',
    dateOfBirth: '04-07-1999',
    providerName: 'Name_1',
    appointmentCompletedOn: '01-12-2024',
    rating: 5,
    googleReviewSubmitted: true,
    feedbackText: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: '2',
    patientName: 'Bessie',
    nhsNumber: '28200',
    dateOfBirth: '12-07-1991',
    providerName: 'Name_2',
    appointmentCompletedOn: '29-10-2024',
    rating: 0,
    googleReviewSubmitted: false
  },
  {
    id: '3',
    patientName: 'Darlene',
    nhsNumber: '43359',
    dateOfBirth: '03-04-2003',
    providerName: 'Name_3',
    appointmentCompletedOn: '29-11-2024',
    rating: 5,
    googleReviewSubmitted: true
  },
  {
    id: '4',
    patientName: 'Dianne',
    nhsNumber: '74875',
    dateOfBirth: '02-10-1998',
    providerName: 'Name_4',
    appointmentCompletedOn: '27-11-2024',
    rating: 5,
    googleReviewSubmitted: true
  },
  {
    id: '5',
    patientName: 'Irma',
    nhsNumber: '13671',
    dateOfBirth: '04-07-1999',
    providerName: 'Name_5',
    appointmentCompletedOn: '05-12-2024',
    rating: 5,
    googleReviewSubmitted: true
  },
  {
    id: '6',
    patientName: 'Regina',
    nhsNumber: '93046',
    dateOfBirth: '04-07-1999',
    providerName: 'Name_6',
    appointmentCompletedOn: '02-11-2024',
    rating: 5,
    googleReviewSubmitted: true
  },
  {
    id: '7',
    patientName: 'Esther',
    nhsNumber: '10708',
    dateOfBirth: '03-04-2003',
    providerName: 'Name_7',
    appointmentCompletedOn: '16-11-2024',
    rating: 5,
    googleReviewSubmitted: true
  },
  {
    id: '8',
    patientName: 'Priscilla',
    nhsNumber: '23340',
    dateOfBirth: '12-07-1991',
    providerName: 'Name_8',
    appointmentCompletedOn: '05-11-2024',
    rating: 5,
    googleReviewSubmitted: true
  },
  {
    id: '9',
    patientName: 'Jane',
    nhsNumber: '20079',
    dateOfBirth: '02-10-1998',
    providerName: 'Name_9',
    appointmentCompletedOn: '08-12-2024',
    rating: 5,
    googleReviewSubmitted: true
  }
];

export const userProfile = {
  name: 'Michael Robinson',
  email: 'michael.robin@gmail.com'
};

export const appPromotions: AppPromotion[] = [
  {
    id: '1',
    name: 'Promotion Name 1',
    scheduleFrom: '15-10-2024',
    scheduleTo: '17-10-2024',
    targetAudienceSummary: 'Promote our summer colle...',
    status: 'active',
    views: 178,
    clicks: 178
  },
  {
    id: '2',
    name: 'Promotion Name 1',
    scheduleFrom: '15-10-2024',
    scheduleTo: '17-10-2024',
    targetAudienceSummary: 'Promote our summer colle...',
    status: 'upcoming',
    views: 178,
    clicks: 178
  },
  {
    id: '3',
    name: 'Promotion Name 1',
    scheduleFrom: '15-10-2024',
    scheduleTo: '17-10-2024',
    targetAudienceSummary: 'Promote our summer colle...',
    status: 'expired',
    views: 178,
    clicks: 178
  },
  {
    id: '4',
    name: 'Promotion Name 1',
    scheduleFrom: '15-10-2024',
    scheduleTo: '17-10-2024',
    targetAudienceSummary: 'Promote our summer colle...',
    status: 'active',
    views: 178,
    clicks: 178
  },
  {
    id: '5',
    name: 'Promotion Name 1',
    scheduleFrom: '15-10-2024',
    scheduleTo: '17-10-2024',
    targetAudienceSummary: 'Promote our summer colle...',
    status: 'active',
    views: 178,
    clicks: 178
  }
];