export type Relic = {
  id: number;
  level: number;
  main_stat_name: string;
  main_stat: number;
  substats: substat[];
};

export type substat = {
  substat_name: string;
  substat: number;
};

export type Relic_List = {
  relics: Relic[];
};
