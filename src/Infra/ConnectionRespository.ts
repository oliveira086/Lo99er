import { Client } from '@elastic/elasticsearch';
require('dotenv').config()

export default class ConnectionRepository {
  constructor() {
  }

  async connect (): Promise <any> {
    try {
      return new Client({
        requestTimeout: 5000,
        node: process.env.LO99ER_ELASTIC_SERVER,
        auth: {
          username: `${process.env.LO99ER_ELASTIC_USER}`,
          password: `${process.env.LO99ER_ELASTIC_PHRASE}`
        }
      })
    } catch(error) {
      // pass
    }
  }
}
