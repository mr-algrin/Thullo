import {Box, Button} from "ui";
import {BoardsHeader, BoardsGrid, Page} from "components";

const BoardsPage = () => {

    const onAdd = () => {}

    return (
        <>
            <BoardsHeader/>
            <Page
                style={{
                    padding: '30px 100px 0 100px'
                }}
            >
                <Box
                    flex={'none'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    style={{
                        paddingBottom: '40px'
                    }}
                >
                    <span>
                        All boards
                    </span>
                    <Button
                        size={'small'}
                        onClick={onAdd}
                    >
                        Add
                    </Button>
                </Box>
                <BoardsGrid/>
            </Page>
        </>
    )
}

export default BoardsPage;