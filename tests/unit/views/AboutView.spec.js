import AboutView from "@/views/AboutView.vue";
import { shallowMount } from "@vue/test-utils";

describe("AboutView", () => {
  test("Se valida snapshot de estructura HTML: AboutView", () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="about">
        <h1>Vista About</h1>
      </div>
    `);
  });
});
