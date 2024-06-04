import ConnectionRepository from "../ConnectionRespository";
import LogDto from "src/domain/repository/LogDto";
const connectionRepository: ConnectionRepository = new ConnectionRepository();
const connection: any = connectionRepository.connect();

const indexPrefix = 'search-logs'

export default class DatabaseRepository {
  constructor () {
  }

  async save (data: LogDto): Promise<void> {
    try {
      const elasticConnection: any = await connection;
      data["@timestamp"] = data.timestamp;
      delete data.timestamp;

      await elasticConnection?.helpers.bulk({
        datasource: [data],
        pipeline: "ent-search-generic-ingestion",
        onDocument: (doc:any) => ({ index: { _index: indexPrefix }}),
      });
    } catch (error) {
      //pass
    }
  }
}
