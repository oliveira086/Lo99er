import LogDto from "src/domain/repository/LogDto";
export default class DatabaseRepository {
    constructor();
    save(data: LogDto): Promise<void>;
}
