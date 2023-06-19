import {useNavigate} from "react-router-dom";

import {Logo} from "components";
import {AppBar, Box, Button} from "ui";
import {RoutesEnum} from 'utils';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <AppBar>
                <Box justifyContent={'space-between'} flexDirection={'row'}>
                    <Logo/>
                    <Box flexDirection={'row'} justifyContent={'flex-end'}>
                        <Button
                            variant={'text'}
                            style={{marginRight: '10px'}}
                            onClick={() => navigate(RoutesEnum.SIGN_IN)}
                        >
                            Login
                        </Button>
                        <Button
                            color={'secondary'}
                            style={{paddingLeft: '10px'}}
                            onClick={() => navigate(RoutesEnum.SIGN_UP)}
                        >
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </AppBar>
        </>
    )
}

export default LandingPage;