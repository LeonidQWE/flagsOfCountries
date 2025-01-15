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
        <li key={index}>
          <span>{item.itemName}: </span>
          <span>{item.itemValue}</span>
        </li>
      ))}
    </ul>
  )
}
