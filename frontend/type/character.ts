import type { LightCone } from "./lightcone.ts";
import type { Relic_List } from "./relic.ts";
import { stat_list } from "./stats.ts";

export type character = {
  id: number;
  name: string;
  element: string;
  path: string;
  level: number;
  eidolon: number;
  lightcone: LightCone;
  relics: Relic_List;
  stats: stat_list;
};
