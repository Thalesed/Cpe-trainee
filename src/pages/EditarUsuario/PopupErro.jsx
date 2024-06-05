import { ErrorPopup, ButtonErro, PopupItem, ErroMensagem } from "./style";
import { BiMessageAltError } from "react-icons/bi";

const PopupErro = ({msg}) => {
  return (
    <ErrorPopup aberto={erroMensagem}>
      <PopupItem>
        <BiMessageAltError style={{ scale: "4", marginTop: "40px" }} />
      </PopupItem>
      <PopupItem>
        <ErroMensagem>{msg}</ErroMensagem>
      </PopupItem>
      <PopupItem>
        <ButtonErro onClick={() => setErroMensagem(false)}>Fechar</ButtonErro>
      </PopupItem>
    </ErrorPopup>
  );
};

export default PopupErro;