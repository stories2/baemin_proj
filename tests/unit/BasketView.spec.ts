import { shallowMount } from "@vue/test-utils";
import BasketView from "@/views/BasketView.vue";

describe("HelloWorld.vue", () => {
  it("Calc sum cost of orders", () => {
    const wrapper = shallowMount(BasketView, {
      data: function () {
        return {
          dispatch: null,
          orderList: null,
          orders: {
            orderList: [
              {
                id: "test1",
                cost: 10000,
              },
              {
                id: "test2",
                cost: 12000,
              },
              {
                id: "test3",
                cost: 14000,
              },
              {
                id: "test4",
                cost: 16000,
              },
            ],
          },
        };
      },
    });

    expect(wrapper.vm.sumCost).toEqual(52000);
  });

  it("If orderlist is null then sum should be returns 0", () => {
    const wrapper = shallowMount(BasketView, {
      data: function () {
        return {
          dispatch: null,
          orderList: null,
          orders: {
            orderList: null,
          },
        };
      },
    });

    expect(wrapper.vm.sumCost).toEqual(0);
  });
});
