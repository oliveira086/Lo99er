"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Warn = /** @class */ (function () {
    function Warn(service_name, service_version, appKey, message, route, data, header, timestamp, severity) {
        this.service_name = service_name;
        this.service_version = service_version;
        this.appKey = appKey;
        this.message = message;
        this.route = route;
        this.data = data;
        this.header = header;
        this.timestamp = timestamp;
        this.severity = severity;
        this.timestamp = "".concat(new Date().getTime());
        this.severity = 'warn';
    }
    return Warn;
}());
exports.default = Warn;
