import LogData from "./domain/repository/LogData";
import LogResponse from "./domain/repository/LogDto";

import Info from "./domain/entity/Info";
import Success from "./domain/entity/Success";
import Warn from "./domain/entity/Warn";
import Error from "./domain/entity/Error";

import DatabaseRepository from "./Infra/repository/DatabaseRespository";

require('dotenv').config()

export = {
  async info (data: LogData) : Promise <LogResponse> {
    try {
      const log = new Info(`${process.env.LO99ER_SERVICE_NAME}`, `${process.env.LO99ER_SERVICE_VERSION}`, `${process.env.LO99ER_APP_KEY}`, data.message, data.route, data.data, data.header);
      console.log("🚀 ~ info ~ log:", log)
      const database = new DatabaseRepository();
      await database.save(log);
      return log;
    } catch(error) {
      throw error
    }
  },

  async success (data: LogData): Promise <LogResponse> {

    try {
      const log = new Success(`${process.env.LO99ER_SERVICE_NAME}`, `${process.env.LO99ER_SERVICE_VERSION}`, `${process.env.LO99ER_APP_KEY}`, data.message, data.route, data.data, data.header);
      const database = new DatabaseRepository();
      await database.save(log);
      return log;
    } catch (error) {
      throw error
    }
  },

  async warn (data: LogData): Promise <LogResponse> {
    try {
      const log = new Warn(`${process.env.LO99ER_SERVICE_NAME}`, `${process.env.LO99ER_SERVICE_VERSION}`, `${process.env.LO99ER_APP_KEY}`, data.message, data.route, data.data, data.header);
      const database = new DatabaseRepository();
      await database.save(log);
      return log;
    } catch (error) {
      throw error
    }

  },

  async error (data: LogData): Promise <LogResponse> {
    try {
      const log = new Error(`${process.env.LO99ER_SERVICE_NAME}`, `${process.env.LO99ER_SERVICE_VERSION}`, `${process.env.LO99ER_APP_KEY}`, data.message, data.route, data.data, data.header);
      const database = new DatabaseRepository();
      await database.save(log);
      return log;
    } catch(error) {
      throw error
    }
  }
}
