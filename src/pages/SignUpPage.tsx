import {useNavigate} from "react-router-dom";

import {Box, Button, Card} from "ui";
import {LogoIcon, Page} from "components";
import {RoutesEnum} from "utils";


const SignUpPage = () => {
    const navigate = useNavigate();

    return (
        <Page>
            <Box justifyContent={'center'}>
                <LogoIcon size={50}/>
                <Card
                    variant={'bordered'}
                    style={{
                        marginTop: '20px',
                        width: '300px',
                        padding: '20px'
                    }}
                >
                    <Box>
                        <Button
                            fullWidth
                            size={'large'}
                            onClick={() => navigate(`/${RoutesEnum.BOARDS}`)}
                        >
                            Sign up
                        </Button>
                    </Box>
                </Card>
            </Box>
        </Page>
    )
}

export default SignUpPage;