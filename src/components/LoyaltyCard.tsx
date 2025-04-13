
import { QrCode } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface LoyaltyCardProps {
  username: string;
  redeemedCount: number;
  totalCount: number;
  memberSince: string;
}

const LoyaltyCard = ({ username, redeemedCount, totalCount, memberSince }: LoyaltyCardProps) => {
  const remainingCount = totalCount - redeemedCount;
  const progressPercentage = (redeemedCount / totalCount) * 100;

  return (
    <div className="loyalty-card rounded-xl p-6 w-full max-w-md mx-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-coffee-darker">Café Pass</h2>
          <p className="text-sm text-coffee-darker/80">Member since {memberSince}</p>
        </div>
        <div className="bg-white/80 backdrop-blur p-2 rounded-lg cursor-pointer hover:bg-white/90 transition-colors">
          <QrCode className="h-8 w-8 text-coffee-accent" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-coffee-darker font-medium">Redeemed</span>
        <span className="text-coffee-darker font-bold">{redeemedCount} / {totalCount}</span>
      </div>
      <Progress value={progressPercentage} className="h-2 mb-4" />

      <div className="bg-white/80 backdrop-blur rounded-lg p-4 text-center">
        <p className="text-coffee-darker font-medium">You have</p>
        <p className="text-3xl font-bold text-coffee-accent">{remainingCount} drinks</p>
        <p className="text-coffee-darker font-medium">remaining to redeem</p>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-coffee-darker/70">Present this pass at any of our partner cafés</p>
      </div>
    </div>
  );
};

export default LoyaltyCard;
