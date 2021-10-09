import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SignInComponent } from './sign-in.component';
import { SharedModule } from '@hackathon/shared';

export default {
  title: 'Patterns/Sign In',
  component: SignInComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    })
  ],
} as Meta<SignInComponent>;

const Template: Story<SignInComponent> = (args: SignInComponent) => ({
  component: SignInComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
