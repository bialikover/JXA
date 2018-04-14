// https://qiita.com/zakuroishikuro/items/a7def965f49a2ab55be4#automation%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6
export interface Automation {
    /**
     * get display string
     */
    getDisplayString(arg: any): string;

    /**
     * console.log
     */
    log(arg: any): void;
}
