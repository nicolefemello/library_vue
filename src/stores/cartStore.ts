import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { IBook } from "@/types/booksTypes";

export interface ICartItem extends IBook {
  quantity: number;
}

export enum EDiscountCoupon {
  DEVWEB10 = 0.1,
  DEVWEB20 = 0.2,
  DEVWEB50 = 0.5,
  RAPAZ = 1.0,
}

export const useCartStore = defineStore("cart", () => {
  const products = ref<ICartItem[]>([]);
  const couponCode = ref<string>("");

  const subtotal = computed(() => {
    return products.value.reduce((acc, book) => {
      const price = book.saleInfo.listPrice?.amount || 0;
      return acc + price * book.quantity;
    }, 0);
  });

  const discount = computed(() => {
    const discountRate =
      EDiscountCoupon[couponCode.value as keyof typeof EDiscountCoupon] || 0;
    return subtotal.value * discountRate;
  });

  const total = computed(() => {
    return subtotal.value - discount.value;
  });

  function addToCart(book: IBook) {
    const alreadyExist = products.value.find((item) => item.id === book.id);
    if (alreadyExist) {
      alreadyExist.quantity += 1;
    } else {
      products.value.push({ ...book, quantity: 1 });
    }
  }

  function subtractFromCart(bookId: string) {
    const index = products.value.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      if (products.value[index].quantity > 1) {
        products.value[index].quantity -= 1;
      } else {
        products.value.splice(index, 1);
      }
    }
  }

  function removeFromCart(bookId: string) {
    const index = products.value.findIndex((book) => book.id === bookId);
    products.value.splice(index, 1);
  }

  function getProductQuantity(bookId: string) {
    const product = products.value.find((book) => book.id === bookId);
    return product ? product.quantity : 0;
  }

  function getProductSubtotal(bookId: string) {
    const product = products.value.find((book) => book.id === bookId);
    if (product) {
      const price = product.saleInfo.listPrice?.amount || 0;
      return product.quantity * price;
    }
  }

  function clearCart() {
    products.value = [];
    couponCode.value = "";
  }

  function applyCoupon(code: string) {
    if (EDiscountCoupon[code as keyof typeof EDiscountCoupon]) {
      couponCode.value = code;
      return true;
    } else {
      return false;
    }
  }

  return {
    products,
    subtotal,
    discount,
    total,
    couponCode,
    addToCart,
    subtractFromCart,
    removeFromCart,
    getProductQuantity,
    getProductSubtotal,
    clearCart,
    applyCoupon,
  };
});
