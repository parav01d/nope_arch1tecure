import * as EventBus from "eventbusjs";
import { injectable} from "inversify";
import IEventService, { IEventPayload } from "Framework/Service/EventService/IEventService";

@injectable()
export class EventService implements IEventService {

    public dispatch<Payload, Model>(name: string, payload: IEventPayload<Payload, Model>): void {
        EventBus.dispatch(name, payload);
    }

    public addEventListener(name: string, func: (event: any) => void, reference: object): void {
        EventBus.addEventListener(name, func, reference);
    }

    public removeEventListener(name: string, func: (event: any) => void, reference: object): void {
        EventBus.removeEventListener(name, func, reference);
    }

    public getEvents(): string {
        return EventBus.getEvents();
    }
}

export default EventService;
