import { newSpecPage } from "@stencil/core/testing";
import { SkeletonComponent } from "../skeleton/skeleton";

describe('admiralty-skeleton', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SkeletonComponent],
      html: '<admiralty-skeleton></admiralty-skeleton>',
    });
    expect(root).toEqualHtml(`
      <admiralty-skeleton aria-hidden="true" role="presentation" style="height: 1rem; width: 100%; border-radius: .5rem;">
        <div class="block"></div>
      </admiralty-skeleton>
    `);
  });
});
