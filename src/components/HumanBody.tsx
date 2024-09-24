interface Polygon {
  id: string;
  points: string;
  transform?: string;
}

interface BodyListItem {
  bodyName: string;
  polygons: Polygon[];
  className?: string;
}

interface BodyProps {
  bodyparts: BodyListItem[];
}

export default function Body({ bodyparts }: BodyProps) {
  return (
    <svg
      version="1.1"
      id="Map"
      className="fill-black"
      viewBox="0 0 578 538"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bodyparts.map((item) => (
        <g id={item.bodyName} className={item.className}>
          {item.polygons.map((part) => (
            <polygon
              id={part.id}
              points={part.points}
              transform={part.transform ? part.transform : ""}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
