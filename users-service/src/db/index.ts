import config from "../config/default";
import { Connection, createConnection } from "typeorm";

import User from "./entities/Users";
import UserSession from "./entities/UserSession";

let connection: Connection;

/**
 * Initializes connection
 */
export const initConnection = async () => {
  connection = await createConnection({
    entities: [User, UserSession],
    type: "mysql",
    url: <string>config.USERS_SERVICE_DB_URL,
  });
};

const getConnection = () => connection;

export default getConnection;
