import HomeView from "@/views/HomeView.vue";
import { shallowMount } from "@vue/test-utils";

describe("HomeView", () => {
  test("Se valida snapshot de estructura HTML: HomeView", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <PostsView />
      </div>
    `);
  });
});