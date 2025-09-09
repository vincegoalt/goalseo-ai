export interface LocationService {
  service: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceLocation {
  location: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Location {
  name: string;
  slug: string;
  services: LocationService[];
}

export interface Service {
  name: string;
  locations: ServiceLocation[];
}

export interface LocationData {
  locations: Location[];
  services: Service[];
  totalPages: number;
}
