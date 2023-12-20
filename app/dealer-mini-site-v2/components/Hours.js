export default function Hours({ className }) {
  return (
    <div className={className}>
      <ul className="grid grid-cols-[100px_1fr] max-w-xs gap-1 mx-auto">
        <li className="text-right font-bold">Sunday:</li>
        <li>CLOSED - CLOSED</li>
        <li className="text-right font-bold">Monday:</li>
        <li>8:30 AM - 5:30 PM</li>
        <li className="text-right font-bold">Tuesday:</li>
        <li>8:30 AM - 5:30 PM</li>
        <li className="text-right font-bold">Wednesday:</li>
        <li>8:30 AM - 5:30 PM</li>
        <li className="text-right font-bold">Thursday:</li>
        <li>8:30 AM - 5:30 PM</li>
        <li className="text-right font-bold">Friday:</li>
        <li>8:30 AM - 5:30 PM</li>
        <li className="text-right font-bold">Saturday:</li>
        <li>9:00 AM - 3:00 PM</li>
      </ul>
    </div>
  );
}
