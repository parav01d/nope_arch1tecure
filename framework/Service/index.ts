import { ContainerModule, interfaces } from "inversify";
import TranslationService from "Framework/Service/TranslationService/TranslationService";
import ITranslationService from "Framework/Service/TranslationService/ITranslationService";
import EventService from "Framework/Service/EventService/EventService";
import IEventService from "Framework/Service/EventService/IEventService";

export * from "Framework/Service/TranslationService/ITranslationService";
export * from "Framework/Service/EventService/IEventService";

export class ServiceModule extends ContainerModule {
    static EventService = Symbol("EventService");
    static TranslationService = Symbol("TranslationService");

    constructor() {
        super((bind: interfaces.Bind) => {
            bind<IEventService>(ServiceModule.EventService).to(EventService);
            bind<ITranslationService>(ServiceModule.TranslationService).to(TranslationService);
        });
    }
}

export default ServiceModule;
