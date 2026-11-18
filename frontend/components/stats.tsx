export default function Stats({ avatarDetailList }: any) {
  function log() {
    console.log(avatarDetailList);
  }

  return (
    <div>
      <button onClick={log}></button>
      {avatarDetailList?.map((character: any) => (
        <img
          key={character.avatarId}
          src={`https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarroundicon/avatar/${character.avatarId}.png`}
        ></img>
      ))}
    </div>
  );
}
