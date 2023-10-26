import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  Spinner,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";
import { useGetCategoriesQuery } from "src/features/products/productsApiSlice";

export default function FilterByCategory() {
  const { data } = useGetCategoriesQuery();

  return (
    <Card className="h-full p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Filter by category
        </Typography>
      </div>
      <List>
        {!data && <Spinner color="blue" className="w-12 h-12 mx-auto" />}
        {data?.map((category) => (
          <ListItem className="p-0">
            <label
              htmlFor={category}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={category}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <span className="text-xs">{category}</span>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
