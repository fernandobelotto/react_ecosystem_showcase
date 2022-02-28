import { Card } from "../../components/ui-card";
import { uikits } from "../../lists/ui-kits";

export default function UiKits() {
  return (
    <>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
        {uikits.map((uikit) => {
          return <Card title={uikit.title} link={uikit.link} />;
        })}
      </div>
      <div className="m-10 text-center p-3 bg-white rounded-md w-28">
        <p>Total of {uikits.length}</p>
      </div>
    </>
  );
}
