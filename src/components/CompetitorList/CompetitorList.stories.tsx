import {ComponentStory, Meta} from "@storybook/react";
import CompetitorList from "./CompetitorList";

export default {
  title: "Components/CompetitorList",
  component: CompetitorList,
} as Meta;

const Template: ComponentStory<typeof CompetitorList> = (args) => <CompetitorList {...args} />;

export const Default = Template.bind({});

Default.args = {
  competitorNames: [
    "Andy",
    "Dan",
    "Kieran"
  ],
  setCompetitorNames: (newList: Array<string>) => {}
};