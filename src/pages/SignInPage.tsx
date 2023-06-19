import {Box, Button, Card} from "ui";
import {useNavigate} from "react-router-dom";

import {RoutesEnum} from "utils";
import {LogoIcon} from "components";

const SignInPage = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                background: '#f7f8fb',
                width: '100%',
                height: '100%',
                display: 'flex'
            }}
        >
            <Box flex={1} justifyContent={'center'} alignItems={'center'}>
                <LogoIcon size={50}/>
                <Card
                    variant={'bordered'}
                    style={{
                        marginTop: '20px',
                        width: '300px',
                        height: 'auto',
                        padding: '20px'
                    }}
                >
                    <Box flexDirection={'column'}>
                        <Button
                            fullWidth
                            size={'large'}
                            onClick={() => navigate(`/${RoutesEnum.BOARDS}`)}
                        >
                            Log in
                        </Button>
                    </Box>
                </Card>
            </Box>
        </div>
    )
}

export default SignInPage;