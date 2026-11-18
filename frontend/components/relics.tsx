export default function Relic({ avatarDetailList }: any) {
  return (
    <div>
      {avatarDetailList?.map((character: any) => (
        <div key={character.avatarId}>
          {character.relicList.map((relic: any) => (
            <div key={relic.type}>
              <img
                src={`https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/relicfigures/IconRelic_${relic._flat.setID}_${relic.tid % 10}.png`}
              ></img>
              <div>
                +{relic.level}
                {relic._flat.props.map((test: any, index: number) => (
                  <div key={index}>
                    {test.type}
                    {test.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
