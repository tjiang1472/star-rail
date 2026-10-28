export type LightCone = {
  id: number;
  name: string;
  offset: Offset;
};

type OffsetPair = {
  x: number;
  y: number;
};

export type Offset = Record<number, OffsetPair>;
