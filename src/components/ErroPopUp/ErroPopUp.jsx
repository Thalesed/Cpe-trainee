import { ErrorPopup, ButtonErro, PopupItem, ErroMensagem } from "./style";
import { BiMessageAltError } from "react-icons/bi";

const ErroPopUp = ({erroMsg, hide}) => {    
    function hidePopup(){
        erroMsg = "";
    }
    return (
      <>
          <ErrorPopup aberto={erroMsg}>
          <PopupItem>
            <BiMessageAltError style={{ scale: "4", marginTop: "40px" }} />
          </PopupItem>
          <PopupItem>
            <ErroMensagem>{erroMsg}</ErroMensagem>
          </PopupItem>
          <PopupItem>
            <ButtonErro onClick={hide}>Fechar</ButtonErro>
          </PopupItem>
        </ErrorPopup>
      </>
    );
  };
  export default ErroPopUp;