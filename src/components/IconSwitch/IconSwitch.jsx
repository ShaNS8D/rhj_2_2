const IconSwitch = ({ icon, onSwithhandler }) => {
  return (
    <div className="icon-menu__wrap">
      <span className="material-icons" onClick={onSwithhandler}>
        {icon}
      </span>
    </div>
  );
}

export default IconSwitch;