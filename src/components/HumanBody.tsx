import { motion } from "framer-motion";

interface Polygon {
  id: string;
  points: string;
  transform?: string;
  stroke?: string;
  className: string;
}

interface BodyListItem {
  bodyName: string;
  polygons: Polygon[];
  className?: string;
  clickable: boolean;
}

interface BodyProps {
  className: string;
  bodyparts: BodyListItem[];
}

export default function Body({ bodyparts, className }: BodyProps) {
  return (
    <svg
      version="1.1"
      id="Map"
      className={className}
      viewBox="0 0 578 538"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bodyparts.map((item, index) =>
        item.clickable ? (
          <motion.g
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            id={item.bodyName}
            className={item.className}
            key={index}
          >
            {item.polygons.map((part, index) => (
              <polygon
                key={index}
                id={part.id}
                points={part.points}
                transform={part.transform}
                className={part.className}
              />
            ))}
          </motion.g>
        ) : (
          <g className="fill-gray-400">
            {item.polygons.map((part, index) => (
              <polygon
                key={index}
                id={part.id}
                points={part.points}
                transform={part.transform}
                className={part.className}
              />
            ))}
          </g>
        ),
      )}
    </svg>
  );
}
