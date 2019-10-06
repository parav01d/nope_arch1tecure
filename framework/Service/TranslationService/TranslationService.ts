import en from "Translation/en";
import { injectable} from "inversify";
import ITranslationService from "Framework/Service/TranslationService/ITranslationService";

export * from "Translation";

@injectable()
export class TranslationService implements ITranslationService {
    private i18n: any;

    constructor() {
      this.i18n = require("i18n-js");
      this.i18n.fallbacks = true;
      this.i18n.translations = { en };
      this.i18n.locale = "en";
    }

    public translate = (key: string, payload?: any): string => this.i18n.t(key, payload);
}

export default TranslationService;
