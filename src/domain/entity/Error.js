"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error = /** @class */ (function () {
    function Error(service_name, service_version, appKey, message, route, data, timestamp, severity) {
        this.service_name = service_name;
        this.service_version = service_version;
        this.appKey = appKey;
        this.message = message;
        this.route = route;
        this.data = data;
        this.timestamp = timestamp;
        this.severity = severity;
        this.timestamp = "".concat(new Date().getTime());
        this.severity = 'error';
    }
    return Error;
}());
exports.default = Error;
