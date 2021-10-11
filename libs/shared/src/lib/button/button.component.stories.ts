import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  label: 'Button'
}

export const Hover = Template.bind({});
Hover.args = {
  label: 'Button',
  classes: 'usa-button--hover'
}
