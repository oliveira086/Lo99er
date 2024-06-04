export default class Info {
    readonly service_name: string;
    readonly service_version: string;
    readonly appKey: string;
    readonly message: string;
    readonly route: string;
    readonly data: string;
    readonly header?: string | undefined;
    readonly timestamp?: string | undefined;
    readonly severity?: string | undefined;
    constructor(service_name: string, service_version: string, appKey: string, message: string, route: string, data: string, header?: string | undefined, timestamp?: string | undefined, severity?: string | undefined);
}
