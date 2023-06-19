import {AppBar, Box} from "ui";
import Logo from "./Logo";
import UserProfile from "./UserProfile";


const BoardsHeader = () => {

    return (
        <AppBar>
            <Box justifyContent={'space-between'} flexDirection={'row'}>
                <Logo/>
                <UserProfile/>
            </Box>
        </AppBar>
    )
}

export default BoardsHeader;