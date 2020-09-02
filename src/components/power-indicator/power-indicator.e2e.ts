import { newE2EPage } from '@stencil/core/testing';

describe('power-indicator', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<power-indicator></power-indicator>');
    const element = await page.find('power-indicator');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<power-indicator></power-indicator>');
    const component = await page.find('power-indicator');
    const element = await page.find('power-indicator >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
