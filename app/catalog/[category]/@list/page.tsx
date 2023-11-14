"use client";

import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/listbox";

const Page = () => {
  return (
    <Listbox aria-label="Actions">
      <ListboxItem key="new">New file</ListboxItem>
      <ListboxItem key="copy">Copy link</ListboxItem>
      <ListboxItem key="edit">Edit file</ListboxItem>
      <ListboxItem key="submit" className="text-success" color="success">
        Submit
      </ListboxItem>
    </Listbox>
  );
};

export default Page;
