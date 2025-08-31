

export interface Review {
  id: number | string;
  author: string;
  role: string;
  rating: number;
  text: string;
}

export interface JobDetailsContent {
  title: string;
  intro: string;
  whatYoullDo: string[];
  whatWeOffer: string[];
  testimonial?: string;
  closingStatement?: string;
}

export interface Job {
  id: number;
  type: string;
  location: string;
  salary: string;
  url: string;
  details: JobDetailsContent;
}

export interface Value {
  icon: string;
  title: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}