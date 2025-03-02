import { useState } from "react";
import products from '../../db/db'
import IconSwitch from '../IconSwitch'
import CardsView from "../Cards/CardsView";
import ListView from "../List/ListView";


const Store = () => {
  const [currentView, setCurrentView] = useState({
    menuIcon: 'view_list',
    storeView: 'list'
  });

  const onSwithhandler = (e) => {
    let icon = e.target.textContent;
    let view;
    icon === "view_list" ? (icon = "view_module") : (icon = "view_list");
    icon === "view_list" ? (view = "list") : (view = "module");
    setCurrentView({ menuIcon: icon, storeView: view });
  }

  return (  
    <div className={"store-container"}>
        <IconSwitch
          icon={currentView.menuIcon}
          onSwithhandler={(e) => onSwithhandler(e)}
        />
        {currentView.storeView === "list" ? (
          <ListView products={products} />
        ) : (
          <CardsView products={products} />
        )}
      </div>
  );
}

export default Store;
