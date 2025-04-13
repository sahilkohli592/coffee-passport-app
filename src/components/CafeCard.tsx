
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CafeCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  isVisited: boolean;
  specialty?: string;
}

const CafeCard = ({ id, name, image, location, isVisited, specialty }: CafeCardProps) => {
  return (
    <Link to={`/cafes/${id}`}>
      <div className="cafe-card rounded-xl overflow-hidden bg-card border border-border">
        <div className="relative h-40">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          {isVisited && (
            <div className="absolute top-3 right-3 bg-green-500/90 text-white p-1 rounded-full">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-coffee-darker line-clamp-1">{name}</h3>
            {specialty && (
              <Badge variant="outline" className="bg-coffee-light text-coffee-darker">
                {specialty}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm mt-1">{location}</p>
          {isVisited ? (
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">
              Visited
            </Badge>
          ) : (
            <Badge variant="outline" className="mt-2">
              Available
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CafeCard;
