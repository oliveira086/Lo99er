import { Client } from '@elastic/elasticsearch';
require('dotenv').config()

export default class ConnectionRepository {
  constructor() {
  }

  async connect (): Promise <any> {
    return new Client({
      requestTimeout: 5000,
      node: process.env.LO99ER_ELASTIC_SERVER,
      auth: {
        // apiKey: 'N0p1M000NEJacFRVbVhGOWU5X0M6dmdGTGZCYTBUWDZZMVQ2Rk1SeVlZQQ=='
        username: `${process.env.LO99ER_ELASTIC_USER}`,
        password: `${process.env.LO99ER_ELASTIC_PHRASE}`
      }
    })
  }
}
