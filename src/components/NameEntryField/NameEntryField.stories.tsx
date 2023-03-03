import { ComponentStory, Meta } from "@storybook/react";
import NameEntryField from "./NameEntryField";

export default {
  title: "Components/NameEntryField",
  component: NameEntryField,
} as Meta;

const Template: ComponentStory<typeof NameEntryField> = () => (
  <NameEntryField />
);

export const Default = Template.bind({});

Default.args = {
  addNameToList: (s: string) => {
    console.log(s);
  },
};
