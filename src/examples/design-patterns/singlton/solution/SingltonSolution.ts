
export { };

const LANGUAGE_CODE_EN_US: string= "en-US";
const LANGUAGE_CODE_FR_FR: string = "fr-FR";

class KindleSystem {
    private static _instance: KindleSystem;
    private static readonly DEFAULT_LANGUAGE_CODE = LANGUAGE_CODE_EN_US;
    private languageCode: string = KindleSystem.DEFAULT_LANGUAGE_CODE;

    private constructor() {
      // everything relies on the constructor being private
    }

    public static getInstance() {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }

    public getLanguageCode(): string {
      return this.languageCode;
    }

    public setLanguageCode(languageCode: string): void {
      this.languageCode = languageCode;
    }
}

class KindleMenu {
  private readonly kindleSystem: KindleSystem = KindleSystem.getInstance();
  
  public getLanguageCode(): string {
    return this.kindleSystem.getLanguageCode();
  }
}

const kindleSystem: KindleSystem = KindleSystem.getInstance();
const kindleMenu: KindleMenu = new KindleMenu();

console.log(kindleMenu.getLanguageCode()); // output: "en-US"

kindleSystem.setLanguageCode(LANGUAGE_CODE_FR_FR);

console.log(kindleMenu.getLanguageCode()); // output: "fr-FR"

