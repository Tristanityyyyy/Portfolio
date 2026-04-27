import Card from "@/components/ui/Card";

type Props = {
  title: string;
  issuer: string;
  date: string;
};

export default function CertCard({ title, issuer, date }: Props) {
  return (
    <Card className="flex justify-between items-center">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-zinc-500">{issuer}</p>
      </div>
      <span className="text-xs text-zinc-400">{date}</span>
    </Card>
  );
}
