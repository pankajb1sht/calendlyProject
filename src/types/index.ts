export interface Consultant {
  id: string;
  name: string;
  title: string;
  bio: string;
  hourlyRate: number;
  expertise: string[];
  avatarUrl?: string;
  bookingLink: string;
}

export interface ConsultantFormData {
  name: string;
  title: string;
  bio: string;
  hourlyRate: number;
  expertise: string[];
  avatarUrl?: string;
}