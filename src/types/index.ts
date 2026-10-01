export interface DistanceItem {
  place: string;
  time: string;
  distance: string;
}

export interface Parcel {
  id: string;
  code: string;
  surfaceM2: number;
  status: 'Disponible' | 'Reservado' | 'Vendido';
  dimensions?: string;
  orientation?: string;
  featureNote?: string;
}

export interface Loteo {
  id: string;
  slug: string;
  name: string;
  location: string;
  zone: string;
  shortDescription: string;
  fullDescription: string;
  concept: string;
  lotCount: number;
  minSurfaceM2: number;
  maxSurfaceM2: number;
  infrastructure: string[];
  status: 'Preventa exclusiva' | 'En comercialización' | 'Últimos lotes' | 'Obras iniciadas';
  stage: string;
  launchYear: string;
  financing: string;
  deliveryTime: string;
  coverImage: string;
  gallery: string[];
  featured?: boolean;
  highlights: string[];
  locationDetails: {
    address: string;
    department: string;
    accessNotes: string;
    distances: DistanceItem[];
    mapQuery: string;
  };
  masterplanNote: string;
  parcels: Parcel[];
}

export type ViewState = 
  | { view: 'home' }
  | { view: 'loteo-detail'; slug: string };
