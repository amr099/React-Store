import {
    List as TailwindList,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";

export function List({ items, searchbar, scroll, setParam }) {
    return (
        <Card
            className={`fixed z-20 mt-[3rem] w-96 max-h-96 overflow-auto ${
                scroll && "mt-[7rem]"
            } ${searchbar ? "scale-100" : "scale-0"}`}
        >
            <TailwindList>
                {items?.map((item) => (
                    <ListItem onClick={() => setParam(item.title)}>
                        <ListItemPrefix>
                            <Avatar
                                variant='circular'
                                alt='candice'
                                src={item?.thumbnail}
                            />
                        </ListItemPrefix>
                        <div>
                            <Typography variant='h6' color='blue-gray'>
                                {item.title}
                            </Typography>
                        </div>
                    </ListItem>
                ))}
            </TailwindList>
        </Card>
    );
}
