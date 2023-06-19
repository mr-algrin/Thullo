import {Card} from "../ui";
import styled from "styled-components";

const StyledBoardCard = styled(Card)`
  height: 243px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background: #fcfcfc;
  }
`

const BoardCard = () => {

    return (
        <StyledBoardCard>
            demo
        </StyledBoardCard>
    )
}

export default BoardCard;