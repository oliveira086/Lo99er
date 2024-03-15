import LogData from "./domain/repository/LogData";
import LogResponse from "./domain/repository/LogDto";
declare const _default: {
    info(data: LogData): Promise<LogResponse>;
    success(data: LogData): Promise<LogResponse>;
    warn(data: LogData): Promise<LogResponse>;
    error(data: LogData): Promise<LogResponse>;
};
export = _default;
