export interface CreateOrderDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  companyName?: string;

  projectType: string;
  serviceType: string;
  budget: number;
  timeline: string;
  projectDescription: string;

  additionalRequirements?: string;

  termsAccepted: boolean;
  userId?: string;
}

export interface GetOrderDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  companyName?: string;

  projectType: string;
  serviceType: string;
  budget: number;
  timeline: string;
  projectDescription: string;

  additionalRequirements?: string;

  termsAccepted: boolean;

  userId?: string;
}
