export interface RetrievedRelic {}

export interface RetrievedCharacter {
  relicList: RetrievedRelic[];
  level: number;
  rank: number;
  avatardId: number;
}

export interface Profile {
  avatarDetailList: RetrievedCharacter[];
  uid: number;
}
