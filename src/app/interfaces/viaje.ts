export interface Viaje {
  guid: string;
  users_id: number;
  date_request: Date;
  name: string;
  lastname: string;
  area: string;
  departament: string;
  project_code: string;
  travel_purpouse: string;
  departure_date: Date;
  arrival_date: Date;
  origin: string;
  destination: string;
  transport_type: string;
  kilometrers: number;
  stop_over: boolean;
  hote_name: string;
  url_hotel: string;
  approximate_amount: number;
}
