import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './power-indicator';

describe('power-indicator', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<power-indicator></power-indicator>',
    });
    expect(root).toEqualHtml(`
      <power-indicator>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </power-indicator>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<power-indicator first="Stencil" last="'Don't call me a framework' JS"></power-indicator>`,
    });
    expect(root).toEqualHtml(`
      <power-indicator first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </power-indicator>
    `);
  });
});
