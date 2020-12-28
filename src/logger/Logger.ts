type LogType =
    | string
    | any
    | object
    | number
    | boolean
    | symbol
    | unknown
    | never
    | undefined
    | null
    | Error
    | File
    | Date;

enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    ERROR = 'ERROR',
    LOG = 'LOG',
}

export default class Log {
    //Debug log
    public static debug = async (...msg: LogType[]): Promise<void> => {
        Log.backgroundTask(async () => {
            const message = Log.logMessage(LogLevel.DEBUG, msg);
            console.debug(message);
            return Promise.resolve();
        }).catch((e) => console.error(e));
    };
    //error log
    public static err = async (...msg: LogType[]): Promise<void> => {
            console.error(Log.logMessage(LogLevel.ERROR, msg));
    };
    //Alias
    public static error = async (...msg: LogType[]): Promise<void> =>
        Log.err(msg);
    //log log
    public static log = async (...msg: LogType[]): Promise<void> => {
        Log.backgroundTask(async () => {
            const message = Log.logMessage(LogLevel.LOG, msg);
            console.log(message);
            return Promise.resolve();
        }).catch((e) => console.error(e));
    };
    //info log
    public static info = async (...msg: LogType[]): Promise<void> => {
        Log.backgroundTask(async () => {
            const message = Log.logMessage(LogLevel.INFO, msg);
            console.info(message);
            return Promise.resolve();
        }).catch((e) => console.error(e));
    };
    private static logMessage = async (
        logLevel: LogLevel,
        ...msg: LogType[]
    ): Promise<string | void> => {
        const stamp: string = new Date().toDateString();
        return `${logLevel.toString()}: ${stamp}: ${JSON.stringify(...msg)}`;
    };
    private static backgroundTask = async (data) => {
        return new Promise( resolve => {
            (typeof data === "function") ? data() : data;
            resolve(true);
        }).catch((e) => console.error(e));
    };
}
