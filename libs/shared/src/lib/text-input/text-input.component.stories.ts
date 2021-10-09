import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

export default {
  title: 'Components/Text Input',
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TextInputComponent>;

const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
  component: TextInputComponent,
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
  label: 'Text input label',
};

Primary.storyName = 'Default';

export const Focused = Template.bind({});

Focused.args = {
  label: 'Text input focused',
  focus: true,
};

export const Error: Story<TextInputComponent> = (args) => ({
  props: args,
  template: `
    <hackathon-text-input
      [label]="label"
      [errorMessage]="errorMessage">
    </hackathon-text-input>
  `,
});

Error.args = {
  label: 'Text input error',
  errorMessage: 'Helpful error message'
};


export const Success = Template.bind({});

Success.args = {
  label: 'Text input success',
  success: true
};


export const Password: Story<TextInputComponent> = (args) => ({
  props: args,
  template: `
    <form class="usa-form">
      <hackathon-text-input
        [label]="label"
        [password]="password">
      </hackathon-text-input>
    </form>
  `,
});

Password.args = {
  label: 'Text input password',
  password: true
};

