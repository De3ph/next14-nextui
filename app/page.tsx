import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";

export default function Home() {
  return (
    <main>
      Hi!
      <Listbox>
        <ListboxSection>
          <ListboxItem key="hey">Hey</ListboxItem>
        </ListboxSection>
      </Listbox>
    </main>
  );
}
