import { html } from 'lit';
import '../src/badge-card.js';

export default {
  title: 'BadgeCard',
  component: 'badge-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badge-card
      style="--badge-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badge-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
