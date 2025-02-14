import { InfoItem } from "components/InfoItem"

interface infoSchemaItem {
  itemName: string,
  itemValue: string | number,
}

interface InfoProps {
  infoSchema: infoSchemaItem[],
}

export const Info = ({ infoSchema }: InfoProps) => {
  return (
    <ul>
      {infoSchema.map((item, index) => (
        <InfoItem key={index} name={item.itemName} value={item.itemValue}/>
      ))}
    </ul>
  )
}
