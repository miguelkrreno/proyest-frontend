import { Time } from "@angular/common";

export interface Formacion {
  guid: string;
  date_request: Date;
  name: string;
  lastname: string;
  area: string;
  department: string;
  ProyectCode: string;
  training_motive: string;
  start_day_training: Date;
  end_day_training: Date;
  requested_training: string;
  provider: string;
  hours: string;
  start_time_training: Time;
  end_time_training: Time;
  number_participants: number;
  aproximated_amount: number;
}