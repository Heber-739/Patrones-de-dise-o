(()=>{
    
class AppConfig {
    private static instance: AppConfig;
    private config: { [key: string]: any } = {};

    private constructor() {}

    public static getInstance(): AppConfig {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }

    public setConfig(key: string, value: any): void {
        this.config[key] = value;
    }

    public getConfig(key: string): any {
        return this.config[key];
    }
}

const appConfig = AppConfig.getInstance();
appConfig.setConfig('endpoint', '//localhost:4200');
console.log(appConfig.getConfig('endpoint')); 
})()