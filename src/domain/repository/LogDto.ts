export default interface LogDto {
  service_name: string
  service_version: string
  appKey: string
  message: string
  route: string
  data: string
  timestamp?: string
  severity?: string
  "@timestamp"?: string
}
