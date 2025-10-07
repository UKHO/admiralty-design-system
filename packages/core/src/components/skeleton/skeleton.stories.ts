import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { SkeletonComponent } from "./skeleton";

const meta: Meta = {
  component: 'admiralty-skeleton',
  title: 'Skeleton'
};

export default meta;

type Story = StoryObj<SkeletonComponent>;

const template: Story = {
  render: args => html`<admiralty-skeleton width="${args.width}" height="${args.height}" radius="${args.radius}"></admiralty-skeleton>`,
};

export const Standard: Story = { ...template };

export const SquareSkeleton: Story = { ...template, args: { width: '200px', height: '200px', radius: '.5rem' } };

export const MultiSkeleton: Story = { render: args =>
    html`<div>
          <div>
            <admiralty-skeleton width="300px" height="300px" radius="10rem"></admiralty-skeleton>
          </div>
          <div>
            <admiralty-skeleton width="100px" height="20px" radius=".5rem"></admiralty-skeleton>
            <admiralty-skeleton width="100px" height="20px" radius=".5rem"></admiralty-skeleton>
            <admiralty-skeleton width="100px" height="20px" radius=".5rem"></admiralty-skeleton>
          </div>
          <div>
            <admiralty-skeleton width="310px" height="20px" radius=".5rem"></admiralty-skeleton>
          </div>
          <div>
            <admiralty-skeleton width="200px" height="20px" radius=".5rem"></admiralty-skeleton>
          </div>
          <div>
            <admiralty-skeleton width="250px" height="20px" radius=".5rem"></admiralty-skeleton>
          </div>
          <div>
            <admiralty-skeleton width="300px" height="20px" radius=".5rem"></admiralty-skeleton>
          </div>
          <div>
            <admiralty-skeleton width="310px" height="100px" radius=".5rem"></admiralty-skeleton>
          </div>
          <div>
            <admiralty-skeleton width="152px" height="100px" radius=".5rem"></admiralty-skeleton>
            <admiralty-skeleton width="152px" height="100px" radius=".5rem"></admiralty-skeleton>
          </div>
        </div>`
};

export const NoRadius: Story = { ...template, args: { width: '200px', height: '200px', radius: '0' } };

export const WithRadiusCircle: Story = { ...template, args: { width: '200px', height: '200px', radius: '10rem' } };
