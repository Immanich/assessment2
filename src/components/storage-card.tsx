// components/storage-card.tsx
import { Card, CardContent } from "@/components/ui/card";

interface StorageCardProps {
  title: string;
  count: number;
  size: string;
  usedPercentage: number;
  icon: React.ReactNode;
  color: string;
}

const StorageCard: React.FC<StorageCardProps> = ({
  title,
  count,
  size,
  usedPercentage,
  icon,
  color,
}) => {
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-full ${color}`}>{icon}</div>
          <span className="text-2xl font-bold">{count}</span>
        </div>
        <h3 className="font-medium text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{size}</p>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${color
                .replace("bg-", "bg-")
                .replace("text-", "bg-")}`}
              style={{ width: `${usedPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {usedPercentage}% of storage used
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StorageCard;
