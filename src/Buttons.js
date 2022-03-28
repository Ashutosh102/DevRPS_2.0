
const Toggle = ({ easyMode, setEasyMode }) => {
   if (easyMode) {
      return (
         <div className="toggle easy">
            <div className="toggle-icon" onClick={() => { setEasyMode(true) }}>EASY</div>
            <div className="switch" onClick={() => { setEasyMode(false) }}>
               <div className="switch-button"></div>
            </div>
            <div className="toggle-icon" onClick={() => { setEasyMode(false) }}>HARD</div>
         </div>);

   } else {
      return (
         <div className="toggle advanced">
            <div className="toggle-icon" onClick={() => { setEasyMode(true) }}>EASY</div>
            <div className="switch" onClick={() => { setEasyMode(true) }}>
               <div className="switch-button"></div>
            </div>
            <div className="toggle-icon" onClick={() => { setEasyMode(false) }}>HARD</div>
         </div>);
   }
};

const RockButton = () => {
   return (
      <div className="game-button rock">
         <div className="icon-bg">
            <img src="/images/icon-rock.svg" alt="rock" />
         </div>
      </div>
   );
};

const PaperButton = () => {
   return (
      <div className="game-button paper">
         <div className="icon-bg">
            <img src="/images/icon-paper.svg" alt="paper" />
         </div>
      </div>
   );
};

const ScissorsButton = () => {
   return (
      <div className="game-button scissors">
         <div className="icon-bg">
            <img src="/images/icon-scissors.svg" alt="scissors" />
         </div>
      </div>
   );
};

const LizardButton = () => {
   return (
      <div className="game-button lizard">
         <div className="icon-bg">
            <img src="/images/icon-lizard.svg" alt="lizard" />
         </div>
      </div>
   );
};

const SpockButton = () => {
   return (
      <div className="game-button spock">
         <div className="icon-bg">
            <img src="/images/icon-spock.svg" alt="spock" />
         </div>
      </div>
   );
};

export { Toggle, RockButton, PaperButton, ScissorsButton, LizardButton, SpockButton };