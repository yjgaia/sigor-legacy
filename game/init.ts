import { SPAInitializer } from "@common-module/app";
import { SupabaseConnector } from "@common-module/supabase";
import AppConfig, { IAppConfig } from "./AppConfig.js";

export default async function init(config: IAppConfig) {
  AppConfig.init(config);
  SPAInitializer.init();
  SupabaseConnector.init(AppConfig.supabaseUrl, AppConfig.supabaseKey);
}
