type LogType =
    | string
    | any
    | object
    | number
    | bigint
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
        const message = Log.logMessage(LogLevel.DEBUG, msg);
        console.debug(message);
        return Promise.resolve();
    };
    //error log
    public static err = async (...msg: LogType[] | Error[]): Promise<void> => {
        const message = Log.logMessage(LogLevel.ERROR, msg);
        console.error(message);
        return Promise.resolve();
    };
    //Alias
    public static error = async (...msg: LogType[] | Error[]): Promise<void> =>
        Log.err(msg);
    //log log
    public static log = async (...msg: LogType[]): Promise<void> => {
        const message = Log.logMessage(LogLevel.LOG, msg);
        console.log(message);
        return Promise.resolve();
    };
    //info log
    public static info = async (...msg: LogType[]): Promise<void> => {
        const message = Log.logMessage(LogLevel.INFO, msg);
        console.info(message);
        return Promise.resolve();
    };
    private static logMessage = async (
        logLevel: LogLevel,
        ...msg: LogType[]
    ): Promise<string | void> => {
        const stamp: string = new Date().toDateString();
        return JSON.stringify(`${logLevel.toString()}: ${stamp}: `, ...msg);
    };
    private static backgroundTask = async (data) => {
        return new Promise(async resolve => {
            (typeof data === "function") ?  data() : data;
            resolve(true);
        });
    };
}
