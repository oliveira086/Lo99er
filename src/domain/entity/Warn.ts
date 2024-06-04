export default class Warn {
  constructor (
    readonly service_name: string,
    readonly service_version: string,
    readonly appKey: string,
    readonly message: string,
    readonly route: string,
    readonly data: string,
    readonly header?: string,
    readonly timestamp?: string,
    readonly severity?: string,
  ) {
    this.timestamp = `${new Date().getTime()}`;
    this.severity = 'warn';
  }
}
