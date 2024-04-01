
export { };

const LANGUAGE_CODE_EN_US: string = "en-US";
const LANGUAGE_CODE_FR_FR: string = "fr-FR";

class KindleSystem {
    private static readonly DEFAULT_LANGUAGE_CODE = LANGUAGE_CODE_EN_US;
    private languageCode: string = KindleSystem.DEFAULT_LANGUAGE_CODE;

    public getLanguageCode(): string {
      return this.languageCode;
    }

    public setLanguageCode(languageCode: string): void {
      this.languageCode = languageCode;
    }
}

class KindleMenu {
  private readonly kindleSystem: KindleSystem = new KindleSystem();
  
  public getLanguageCode(): string {
    return this.kindleSystem.getLanguageCode();
  }
}

const kindleSystem: KindleSystem = new KindleSystem();
const kindleMenu: KindleMenu = new KindleMenu();

console.log(kindleMenu.getLanguageCode()); // output: "en-US"

kindleSystem.setLanguageCode(LANGUAGE_CODE_FR_FR);

console.log(kindleMenu.getLanguageCode()); // output: "en-US"

