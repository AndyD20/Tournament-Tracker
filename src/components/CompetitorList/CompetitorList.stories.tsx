import {ComponentStory, Meta} from "@storybook/react";
import CompetitorList from "./CompetitorList";
import Competitor from "../../classes/Competitor";

export default {
  title: "Components/CompetitorList",
  component: CompetitorList,
} as Meta;

const Template: ComponentStory<typeof CompetitorList> = (args) => <CompetitorList {...args} />;

export const Default = Template.bind({});

Default.args = {
  competitors: [
    new Competitor(0, "Andy"),
    new Competitor(0, "Dan"),
    new Competitor(0, "Kieran"),
  ],
  setCompetitors: () => {}
};