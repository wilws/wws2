import BoxView from "../box/BoxView";
import ListView from "../list/ListView";


const Main = (): JSX.Element => {
  return (
    <main className="main">
      <ListView/>
      <BoxView/>
    </main>
  );
};

export default Main;