
export interface IEventPayload<Payload, Model> {
  payload: Payload;
  account?: any;
  targets?: Model[];
  target?: Model;
}

export interface IEventService {
    dispatch<Payload, Model>(name: string, payload: IEventPayload<Payload, Model>): void;
    addEventListener(name: string, func: any, reference: any): void;
    removeEventListener(name: string, func: (event: any) => void, reference: object): void;
    getEvents(): string;
}

export default IEventService;
