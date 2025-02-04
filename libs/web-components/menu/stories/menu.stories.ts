const README = require('../README.md');
import '@finastra/button';
import '@finastra/menu';
import type { Menu } from '@finastra/menu';
import '@material/mwc-list/mwc-list-item';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypes, cssprops } from './sb-generated/fds-menu.json';

export default {
  title: 'NAVIGATION/Menu',
  component: 'fds-menu',
  argTypes,
  parameters: {
    actions: {
      handles: ['opened', 'closing', 'closed', 'action', 'selected']
    },
    docs: {
      description: { component: README }
    },
    cssprops
  },
  decorators: [
    (story) => html`${story()}
      <script>
        const menu = document.getElementById('basicMenu');
        const button = document.getElementById('basicButton');

        menu.anchor = button;  
        button.addEventListener('click', function() {
          menu.open = !menu.open;
        });
      </script>
      `
  ]
} as unknown as Meta;

const Template: Story<Menu> = (args) => {
  return html`
    <div style="position: relative;">
        <fds-button id="basicButton" raised label="Open Basic Menu"></fds-button>
        <fds-menu id="basicMenu" 
          ?open=${args.open} 
          corner=${args.corner}  
          menuCorner=${args.menuCorner} 
          ?quick=${args.quick} 
          ?absolute=${args.absolute} 
          ?fixed=${args.fixed}
          x=${ifDefined(args.x === null ? undefined : args.x)}
          y=${ifDefined(args.y === null ? undefined : args.y)}
          ?forceGroupSelection=${args.forceGroupSelection}
          ?fullwidth=${args.fullwidth}
          ?stayOpenOnBodyClick=${args.stayOpenOnBodyClick}          
          >
          <mwc-list-item>Preview</mwc-list-item>
          <mwc-list-item disabled><div>Share</div></mwc-list-item>
          <mwc-list-item disabled><div>Get Link</div></mwc-list-item>
          <li divider></li>
          <mwc-list-item>Download</mwc-list-item>
        </fds-menu>
    </div>
  `;
};

export const Default: Story<Menu> = Template.bind({});
