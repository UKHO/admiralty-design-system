import { newSpecPage } from "@stencil/core/testing";
import { SkeletonComponent } from "../skeleton/skeleton";

describe('admiralty-skeleton', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SkeletonComponent],
      html: '<admiralty-skeleton></admiralty-skeleton>',
    });
    expect(root).toEqualHtml(`
      <admiralty-skeleton>
        <div class="block"></div>
      </admiralty-skeleton>
    `);
  });
});
