import got from "got";
import config from "../config/default";

export interface User {
  createdAt: string;
  id: string;
  username: string;
}

export interface UserSession {
  createdAt: string;
  expiresAt: string;
  id: string;
  userId: string;
}

export default class UsersService {
  static async createUser({
    password,
    username,
  }: {
    password: string;
    username: string;
  }) {
    const body = await got
      .post(`${config.USERS_SERVICE_URI}/users`, {
        json: { password, username },
      })
      .json();
    return body;
  }

  static async createUserSession({
    password,
    username,
  }: {
    password: string;
    username: string;
  }) {
    const body = <UserSession>await got
      .post(`${config.USERS_SERVICE_URI}/sessions`, {
        json: { password, username },
      })
      .json();
    return body;
  }

  static async deleteUserSession({ sessionId }: { sessionId: string }) {
    const body = await got
      .delete(`${config.USERS_SERVICE_URI}/sessions/${sessionId}`)
      .json();
    return body;
  }

  static async fetchUser({ userId }: { userId: string }): Promise<User | null> {
    const body = await got
      .get(`${config.USERS_SERVICE_URI}/users/${userId}`)
      .json();
    if (!body) return null;
    return <User>body;
  }

  static async fetchUserSession({
    sessionId,
  }: {
    sessionId: string;
  }): Promise<UserSession | null> {
    const body = await got
      .get(`${config.USERS_SERVICE_URI}/sessions/${sessionId}`)
      .json();
    if (!body) return null;
    return <UserSession>body;
  }
}