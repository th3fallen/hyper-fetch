import { Cache } from "cache";
import { CommandInstance } from "command";
import { Dispatcher } from "dispatcher";
import { ClientResponseType, ClientType, ClientQueryParamsType } from "client";
import { Builder } from "builder";
import { AppManager } from "managers";
import { NegativeTypes } from "types";

/**
 * Configuration setup for the builder
 */
export type BuilderConfig = {
  /**
   * Url to your server
   */
  baseUrl: string;
  /**
   * Custom client initialization prop
   */
  client?: ClientType;
  /**
   * Custom cache initialization prop
   */
  cache?: <B extends BuilderInstance>(builder: B) => Cache;
  /**
   * Custom app manager initialization prop
   */
  appManager?: <B extends BuilderInstance>(builder: B) => AppManager;
  /**
   * Custom fetch dispatcher initialization prop
   */
  fetchDispatcher?: <B extends BuilderInstance>(builder: B) => Dispatcher;
  /**
   * Custom submit dispatcher initialization prop
   */
  submitDispatcher?: <B extends BuilderInstance>(builder: B) => Dispatcher;
};

export type BuilderInstance = Builder<any, any>;

export type BuilderErrorType = Record<string, any> | string;

// Interceptors

export type RequestInterceptorCallback = (command: CommandInstance) => Promise<CommandInstance> | CommandInstance;
export type ResponseInterceptorCallback = (
  response: ClientResponseType<any, any>,
  command: CommandInstance,
) => Promise<ClientResponseType<any, any>> | ClientResponseType<any, any>;

// Stringify

export type StringifyCallbackType = (queryParams: ClientQueryParamsType | string | NegativeTypes) => string;