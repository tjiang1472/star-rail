import { baseinfo } from "../dictionary/baseinfo";

export default function Stats({ avatarDetailList }: any) {
  function find(id: any) {
    console.log(baseinfo[id]);
    // return baseinfo[id];
    return baseinfo[id].name;
  }

  return (
    <div>
      {avatarDetailList?.map((character: any) => (
        <div key={character.avatarId}>{find(character.avatarId)}</div>
      ))}
    </div>
  );
}
